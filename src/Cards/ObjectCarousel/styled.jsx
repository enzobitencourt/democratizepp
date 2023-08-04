import { styled } from "styled-components";
import imagem from "../../Assets/notícia_carrossel.jpg"

export const Imagem = styled.div`
    background: url(${imagem});
    background-size: cover;
    width: 93vw;
    height: 22vh;
    border-radius: 28.5px;
    display: flex;
    flex-direction: column-reverse;
`

export const Titulo = styled.div`
    background-color: rgba(0, 0, 0, 0.59);
    border-radius: 0px 28.5px 28.5px 28.5px;
    width: 80vw;
    height: 6vh;
    padding: 0px 0px 0px 13px;
    vertical-align: center;
`

export const Texto = styled.p`
    color: #FFF;
    font-family: 'Poppins';
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-items: center;

`