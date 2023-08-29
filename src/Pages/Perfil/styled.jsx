import {styled} from "styled-components"

export const Container = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    padding: 4vh 2vh;
    width: 93vw;
    gap: 10vh;
`

export const InfPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 93vw;
    margin-top: 1vh;
    height: auto;
    justify-content: space-between;
`

export const FotoLogin = styled.img`
    width: 13vh;
    height: 100%;
    border-radius: 50%;
    background-size: cover;
`

export const DivComplemento = styled.div`
    background: none;
    border: none;
    padding: 0;
    width: 6vh;
    height: 6vh;
`

export const EditDiv = styled.div`
    display: flex;
    width: 93vw;
    height: auto;
    flex-direction: column;
`

export const EditTexto = styled.p`
    color: #000;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; 
`

export const Nome = styled.p`
    color: #000;
    font-size: 19.954px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
    margin: 0;
`
export const Cidadao = styled.p`
    color: #9D9D9D;
    font-size: 12.245px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    margin: 0;
`