import { styled } from "styled-components"

export const Filters = styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    justify-content: space-between;
    padding: 0vh 1vh;
    margin-bottom: 2vh;
`

export const Direita = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
    width: 40vw;
    height: auto;
`

export const Esquerda = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
    width: 35vw;
    height: auto;
`

export const DivInput = styled.form`
    display: flex;
    flex-direction: row;
    width: 98%;
    gap: 2vw;
    height: 5.5vh;
    border-radius: 28.6px;
    background: white;
    border: 1px solid black;
    align-items: center;
`

export const Input = styled.input`
    width: 55vw;
    height: 5vh;
    border-radius: 28.6px 0 0 28.6px;
    background-color: white;
    padding: 0 0 0 4vw;
    font-size: 15px;
    outline: none;
`

export const Enviar = styled.button`
    width: 17vw;
    height: 3vh;
    border: 1px solid #1B676B;
    color: white;
    border-radius: 10px;
    background-color: #1B676B;
`

export const Selects = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    gap: 1vw;
    justify-content: center;
`

export const Titulo = styled.p`
    font-size: 16px;
`