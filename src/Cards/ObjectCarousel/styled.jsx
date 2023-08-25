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
    border-radius: 28.5px;
    width: 85vw;
    height: auto;
    padding: 2vh 0px 2vh 13px;
    vertical-align: center;
`

export const Texto = styled.p`
    color: #FFF;
    font-family: 'Poppins';
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-items: center;
`