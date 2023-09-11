import { styled } from "styled-components";

export const Container = styled.div`
    margin-top: 1vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
`

export const DivInput = styled.div`
    width: 93vw;
    height: 6vh;
    border-radius: 28.6px;
    display: flex;
    flex-direction: row;
    background: white;
`

export const InputNome = styled.input`
    width: 67vw;
    padding-left: 3vw;
    background: none;
    border-radius: 28.6px 0 0 28.6px;
    outline: none;
`

export const ButtonFilter = styled.button`
    width: 11vw;
    height: 6vh;
    align-items: center;
    display: flex;
    justify-content: center;
`

export const ButtonSearch = styled.button`
    width: 14vw;
    border-radius: 0 28.6px 28.6px 0;
    background: #1B676B;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    width: 7vw;
    height: 2vh;
`
export const Img1 = styled.img`
    width: 8vw;
    height: 2.5vh;
`
export const Titulo = styled.p`
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
`

export const ContainerResult = styled.div`
    display: flex;
    flex-direction: column;
    align-content: left;
    width: 93vw;
    height: auto;
    gap: 1vh;
    margin-top: 3vh;
`

export const Resultados = styled.div`
    display: flex;
    flex-direction: column;
    width: 93vw;
    height: auto;
    gap: 2vh;
    margin-bottom: 12vh;
`
