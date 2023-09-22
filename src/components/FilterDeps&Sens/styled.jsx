import {styled} from "styled-components"

export const Filters = styled.div`
    display: flex;
    flex-direction: row;
    width: 75vw;
    justify-content: space-between;
    padding: 0vh 1vh;
    margin-bottom: 2vh;
`

export const Direita = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
    width: auto;
    height: auto;
`

export const DivInput = styled.div`
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
`

export const Enviar = styled.button`
    width: 15vw;
    height: 4vh;
    color: white;
    border-radius: 7px;
    background-color: #1B676B;
`

