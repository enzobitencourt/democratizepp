import {styled} from "styled-components"

export const Botao = styled.div`
    width: 93vw;
    height: 17vh;
    display: flex;
    flex-direction: row;
    background-color: #FFFFFF;
    border-radius: 18.4px;
    border: 1px solid #000;
    justify-content: space-between;
    align-items: center;
`

export const ImgPolitico = styled.div`
    border-radius: 18.4px 0px 0px 18.4px;
    background: url(${(props) => props.imagem});
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 28vw;
    border: 1px solid #000;
    align-items: flex-start;
    display: flex;
    justify-content: end;
    padding: 1vw;
`

export const Infos = styled.button`
    display: flex;
    width: 54vw;
    height: auto;
    margin-left: 3.5vw;
    flex-direction: column;
    gap: 2vw;
    align-items: flex-start;
    justify-content: center;
`

export const Gray = styled.div`
    border-radius: 0px 18.4px 18.4px 0px;
    background: #5B5858;
    color: #5B5858;
    height: 100%;
    width: 7vw;
`

export const Nome = styled.p`
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    margin: 0;
    text-align: left;
`

export const Coligacao = styled.p`
    color: #424242;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    margin: 0;
    text-align: left;
`

export const Numero = styled.p`
    color: #424242;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    margin: 0;
`
export const Partido = styled.p`
    color: #424242;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    margin: 0;
    text-align: left;
`