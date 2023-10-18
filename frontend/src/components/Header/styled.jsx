import { styled } from "styled-components";
import perfil from "../../Assets/perfil_semconta.png"

export const Container = styled.div`
    width: 93vw;
    height: 10vh;
    margin-bottom: 1vh;
    margin-top: 1vh;
    display: flex;
    flex-direction: row;
`

export const TituloContainer = styled.div`
    width: 45vw;
    height: 10vh;
    font-family: 'Poppins';
    align-content: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`

export const Texto = styled.p`
    color: #767575;
    font-family: "Poppins";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`

export const Nome = styled.p`
    color: #000;
    font-family: "Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`
export const PerfilContainer = styled.div`
    width: 55vw;
    height: 10vh;
    display: flex;
    flex-direction: row-reverse;
    align-content: center;
    margin-top: 1.5vh;
`

export const Perfil = styled.div`
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    background: url(${perfil});
    background-size: cover;
`


