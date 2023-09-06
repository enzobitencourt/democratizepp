import { styled } from "styled-components";

export const Imagem = styled.div`
    background: url(${(props) => props.imagem});
    background-size: cover;
    width: 93vw;
    height: 22vh;
    border-radius: 28.5px;
    display: flex;
    flex-direction: column-reverse;
`

export const Titulo = styled.div`
    background-color: rgba(0, 0, 0, 0.70);
    border-radius: 0 28.5px 28.5px 28.5px;
    width: 83vw;
    height: auto;
    padding: 1.5vh 0px 1.5vh 13px;
    vertical-align: center;
`

export const Texto = styled.p`
    color: #FFF;
    font-family: 'Poppins';
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
`