import {styled} from "styled-components"

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

export const DivInput = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    height: 3vh;
`

export const Input = styled.input`
    width: 55vw;
    height: 4vh;
    border-radius: 28.6px 0 0 28.6px;
    background-color: white;
    padding: 0 0 0 2vw;
    border: 1px solid black;
    font-size: 15px;
`

export const Enviar = styled.button`
    width: 17vw;
    height: 4vh;
    border: 1px solid #1B676B;
    color: #1B676B;
`