import { styled } from "styled-components";

export const ContainerNot = styled.div`
    width: 93vw;
    height: 14vh;
    display: flex;
    flex-direction: row;
    border-radius: 24.32px;
    background: linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF;
    margin-top: 2vh;
`

export const ImgNot = styled.div`
    background: url(${(props) => props.imagem});
    background-size: cover;
    background-position: center;
    border-radius: 24.32px 0px 0px 24.32px;
    width: 25vw;
    height: 14vh;
`

export const TextContainer = styled.div`
    max-width: 58vw;
    height: auto;
    margin-left: 4vw;
    margin-right: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Nottitulo = styled.p`
    color: #000;
    font-family: "Poppins";
    font-size: 13.376px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
`

export const Portal = styled.p`
    color: #E40C0C;
    font-family: "Poppins";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 2vw 0vw 0vw 0vw;
`