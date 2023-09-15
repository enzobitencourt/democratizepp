import React, { useState, useEffect } from 'react';
import * as pdfjs from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';
import { styled } from 'styled-components';
import candidatos from '../../../LogicaCandidatos/database.json';

const PdfTextExtractor = () => {
    const Div = styled.div`
        width: 98vw;
        height: auto;
        display: flex;
        flex-direction: column;
    `;

    const [pdfResults, setPdfResults] = useState([]);
    const keyword = 'economia';

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

            const containsKeyword = fullText.includes(keyword);

            return { candidate, containsKeyword };
        } catch (error) {
            console.error(`Error extracting text from PDF for candidate ${candidate.nome}:`, error);
            return { candidate, containsKeyword: false };
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
                    return { candidate, containsKeyword: false };
                }
            });

            const results = await Promise.all(pdfPromises);
            setPdfResults(results);
        };

        loadPDFs();
    }, []);

    return (
        <Div>
            <h2>Extrair Texto de PDF</h2>
            {pdfResults.map((result, index) => (
                <div key={index}>
                    <h3>{result.candidate.nome}</h3>
                    <p>Contains Keyword: {result.containsKeyword.toString()}</p>
                </div>
            ))}
        </Div>
    );
};

export default PdfTextExtractor;
