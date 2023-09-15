import React, { useState, useEffect } from 'react';
import * as pdfjs from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';
import { styled } from 'styled-components';
import pdfs from '../pdfs/2022BR280001607833.pdf'

const PdfTextExtractor = () => {
    const Div = styled.div`
        width: 98vw;
        height: auto;
        display: flex;
        flex-direction: column;
    `

    const [pdfText, setPdfText] = useState('');
    const [containsKeyword, setContainsKeyword] = useState(false);

    const keyword = 'economia';

    const extractTextFromPdf = async (filePath) => {
        try {
            const response = await fetch(filePath);
            const arrayBuffer = await response.arrayBuffer();
            const pdfData = new Uint8Array(arrayBuffer);
            pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';

            const loadingTask = pdfjs.getDocument({ data: pdfData });
            const pdf = await loadingTask.promise;

            let fullText = '';

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map((item) => item.str).join(' ');
                fullText += pageText;
            }

            setPdfText(fullText);

            if (fullText.includes(keyword)) {
                setContainsKeyword(true);
            } else {
                setContainsKeyword(false);
            }
        } catch (error) {
            console.error('Erro ao extrair texto do PDF:', error);
        }
    };

    // Use useEffect para carregar o PDF ao montar o componente (substitua 'caminho_do_seu_arquivo.pdf' pelo caminho real do arquivo)
    useEffect(() => {
        const filePath = pdfs;
        extractTextFromPdf(filePath);
    }, []);

    return (
        <Div>
            <h2>Extrair Texto de PDF</h2>
            {pdfText && (
                <div>
                    <h3>Texto Extraído:</h3>
                    <p>{pdfText}</p>
                </div>
            )}
            {containsKeyword && (
                <div>
                    <h3>Contém a palavra-chave:</h3>
                    <p>true</p>
                </div>
            )}
        </Div>
    );
};

export default PdfTextExtractor;
