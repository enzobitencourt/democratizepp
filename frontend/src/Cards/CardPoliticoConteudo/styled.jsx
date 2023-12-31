import {styled} from "styled-components"

export const Botao = styled.div`
    width: 93vw;
    height: auto;
    display: flex;
    flex-direction: row;
    background-color: #FFFFFF;
    border-radius: 18.4px;
    border: 1px solid rgb(0, 0, 0);
    justify-content: space-between;
`

export const Conteudo = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: 15vh;
    gap: 4vw;
`

export const ImgPolitico = styled.div`
    background: url(${(props) => props.imagem});
    background-size: cover;
    border-radius: 18.4px 0px 0px 18.4px;
    height: 15vh;
    width: 25vw;
    border: 1px solid #000;
    align-items: flex-start;
    display: flex;
    justify-content: end;
    padding: 1vw;
`

export const Infos = styled.button`
    display: flex;
    width: 50vw;
    flex-direction: column;
    gap: 2vw;
    align-items: flex-start;
    justify-content: center;
`

export const Gray = styled.div`
    border-radius: 0px 18.4px 18.4px 0px;
    background: #5B5858;
    height: 15vh;
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

export const Status = styled.p`
    color: ${(props) => props.cor};
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Cargo = styled.p`
    color: #424242;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    margin: 0;
    text-align: left;
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