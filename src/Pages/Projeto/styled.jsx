import { styled } from "styled-components";

export const Container = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    padding: 4vh 2vh;
    width: 90vw;
    margin-bottom: 10vh;
    gap: 3vh;
`

export const Titulo = styled.p`
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
`

export const GeneralContent = styled.div`
    display:flex;
    width: 93vw;
    height: auto;
    flex-direction: column;
    gap: 3vh;
    justify-content: left;
    align-items:left;
`

export const Titulos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
`

export const Subtitulo = styled.div`
    color: #767575;
    width: 85vw;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
`

export const Barra = styled.div`
    width: 65vw;
    height: 3px;
    background: #1B676B;
`

export const Resumo = styled.p`
    color: #000;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`
