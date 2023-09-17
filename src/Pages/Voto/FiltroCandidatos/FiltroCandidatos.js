import React, { useState, useEffect } from 'react';
import * as pdfjs from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';
import { styled } from 'styled-components';
import candidatos from '../LogicaCandidatos/database.json'
import CardCandidato from '../../../Cards/CardCandidato/CardCandidato';
import Carregando from '../../../components/Carregando/Carregando';
import { Container, Conteudo, Texto } from './styled';

const FiltroCandidatos = (props) => {
    const Div = styled.div`
        height: auto;
        align-items: center;
        gap: 2vh;
        display: flex;
        flex-direction: column;
    `;

    const [pdfResults, setPdfResults] = useState([]);
    const keywords = props.keywords;
    const nome = props.nome;
    console.log(nome)
    const [loading, setLoading] = useState(true)

    const extractTextFromPdf = async (pdfData, candidate) => {
        try {
            pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';

            const loadingTask = pdfjs.getDocument(pdfData);
            const pdf = await loadingTask.promise;

            let fullText = '';

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map((item) => item.str).join(' ');
                fullText += pageText;
            }

            const keywordMatches = keywords.filter(keyword => fullText.includes(keyword));

            // Verifica se o candidato possui todas as palavras-chave
            const hasAllKeywords = keywordMatches.length === keywords.length;

            return { candidate, hasAllKeywords };
        } catch (error) {
            console.error(`Error extracting text from PDF for candidate ${candidate.nome}:`, error);
            return { candidate, hasAllKeywords: false };
        }
    };

    useEffect(() => {
        const loadPDFs = async () => {
            if (props.resetSearch) {
                setLoading(true);
                setPdfResults([]); // Limpar os resultados de busca anteriores
                props.setResetSearch(false); // Resetar o estado de resetSearch de volta para false
    
                if (keywords.length === 0) {
                    // Se keywords estiver vazio, exibir todos os candidatos
                    setPdfResults(candidatos);
                    setLoading(false);
                } else {
                    const loadedResults = await Promise.all(
                        candidatos.map(async (candidate) => {
                            try {
                                const module = await import(`../pdfs/2022${candidate.pdf}.pdf`);
                                const result = await extractTextFromPdf(module.default, candidate);
                                return result;
                            } catch (error) {
                                console.error('Erro ao carregar componente dinâmico:', error);
                                return { candidate, hasAllKeywords: false };
                            }
                        })
                    );
    
                    // Filtrar candidatos com todas as palavras-chave
                    const results = loadedResults.filter(result => result.hasAllKeywords);
                    setPdfResults(results);
                    setLoading(false);
                }
            }
        };

        if (props.resetSearch) {
            setLoading(true)
            setPdfResults([]); // Clear previous search results
            props.setResetSearch(false); // Reset resetSearch back to false
            loadPDFs(); // Trigger a new search
        }

   });



    return (
        <>
            {loading === true ? (
                <Carregando loading={loading} />
            ) : (
                <Div>
                    {pdfResults.length > 0 ? (
                        pdfResults.map((result, index) => (
                            <CardCandidato
                                key={index}
                                nome={result.candidate.nome}
                                img={result.candidate.imagem}
                                coligacao={result.candidate.coligacao}
                                partido={result.candidate.partido}
                                numero={result.candidate.numero}
                                url={`https://divulgacandcontas.tse.jus.br/divulga/#/candidato/2022/2040602022/BR/${result.candidate.id}`}
                            />
                        ))
                    ) : (
                        <Container>
                            <Conteudo>
                                <Texto>Nenhum candidato encontrado ou faltando palavras-chave</Texto>
                            </Conteudo>
                        </Container>
                    )}
                </Div>
            )}
        </>

    );
};

export default FiltroCandidatos;
