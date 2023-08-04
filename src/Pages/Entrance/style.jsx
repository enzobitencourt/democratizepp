import { styled } from "styled-components";
import fundo from "../../Assets/BackEntrance/4.jpg"

export const Fundo = styled.div`
    background: url(${fundo});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
    margin: 0;
    border: 0;
    padding: 0;
`

export const Gradiente = styled.div`
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(27, 103, 107, 0.00) 40.10%, rgba(27, 103, 107, 0.67) 100%);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Logo = styled.img`
    width: 245px;
    height: 180px;
`

export const Acessar = styled.button`
    background-color: #F0AD4E;
    border-color: none;
    border-radius: 200px;
    width: 245px;
    height: 72px;
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`