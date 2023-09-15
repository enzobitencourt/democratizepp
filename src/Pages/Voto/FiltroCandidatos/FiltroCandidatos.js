import React, { useState, useEffect } from 'react';
import * as pdfjs from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';
import { styled } from 'styled-components';
import candidatos from '../../../LogicaCandidatos/database.json';
import CardCandidato from '../../../Cards/CardCandidato/CardCandidato';

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
            const pdfPromises = candidatos.map(async (candidate) => {
                try {
                    const module = await import(`../pdfs/2022${candidate.pdf}.pdf`);
                    const result = await extractTextFromPdf(module.default, candidate);
                    return result;
                } catch (error) {
                    console.error('Error loading dynamic component:', error);
                    return { candidate, hasAllKeywords: false };
                }
            });

            // Filtra os candidatos que possuem todas as palavras-chave
            const results = (await Promise.all(pdfPromises)).filter(result => result.hasAllKeywords);
            setPdfResults(results);
        };

        loadPDFs();
    }, []);

    return (
        <Div>
            {pdfResults.map((result, index) => (
                <CardCandidato
                key={index}
                nome={result.candidate.nome}
                img={result.candidate.imagem}
                coligacao={result.candidate.coligacao}
                partido={result.candidate.partido}
                numero={result.candidate.numero}
                />
            ))}
        </Div>
    );
};

export default FiltroCandidatos;
