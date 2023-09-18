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
    const [loading, setLoading] = useState(true)


    useEffect(() => {
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

                const keywordMatches = keywords.filter(keyword => fullText.toLowerCase().includes(keyword.toLowerCase()));

                // Verifica se o candidato possui todas as palavras-chave
                const hasAllKeywords = keywordMatches.length === keywords.length;

                return { candidate, hasAllKeywords };
            } catch (error) {
                console.error(`Error extracting text from PDF for candidate ${candidate.nome}:`, error);
                return { candidate, hasAllKeywords: false };
            }
        };

        const loadPDFs = async () => {
            if (props.resetSearch) {
                setLoading(true);
                setPdfResults([]); // Limpar os resultados de busca anteriores
                props.setResetSearch(false); // Resetar o estado de resetSearch de volta para false

                const loadedResults = await Promise.all(
                    candidatos.map(async (candidate) => {
                        try {
                            const module = await import(`../pdfs/2022${candidate.pdf}.pdf`);
                            const result = await extractTextFromPdf(module.default, candidate);

                            // Verifica se o nome do candidato corresponde ao nome fornecido
                            if (nome && candidate.nome.toLowerCase().includes(nome.toLowerCase())) {
                                return result; // Inclui o resultado se o nome corresponder
                            } else if (!nome) {
                                return result; // Inclui o resultado se nenhum nome for fornecido
                            } else {
                                return { candidate, hasAllKeywords: false }; // Ignora o resultado se o nome não corresponder
                            }
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

        if (props.resetSearch) {
            setLoading(true)
            setPdfResults([]); // Clear previous search results
            props.setResetSearch(false); // Reset resetSearch back to false
            loadPDFs(); // Trigger a new search
        }
    }, [props.resetSearch, nome, props, keywords]);



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
                                <Texto>Nenhum candidato encontrado. Pesquise novamente!</Texto>
                            </Conteudo>
                        </Container>
                    )}
                </Div>
            )}
        </>

    );
};

export default FiltroCandidatos;
