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
    margin: 0;
    height: 100vh;
    display: flex;
    padding: 4vh;
    flex-direction: column;
`

export const Logo = styled.img`
    width: 245px;
    height: 180px;
`

export const Acessar = styled.button`
    background-color: #F0AD4E;
    border: none;
    border-radius: 200px;
    height: 5.5vh;
    width: 80%;
    color: #FFF;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 7vh;
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0;
    height: 90%;
`

export const Container = styled.div`
    background: rgba(255, 255, 255, 0.83);
    border-radius: 35px;
    border: 2px solid #000;
    width: 70vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3vh;
    height: auto;
    gap: 2vh;
`

export const Input = styled.input`
    width: 100%;
    height: 5vh;
    border-radius: 18.2px;
    border: 1px solid #000;
    padding: 0 0 0 3vw;
`
export const LinksAlternativos = styled.button`
    background: none;
    border: none;
    width: auto;
    height: auto;
    color: #000;
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`

export const Abaixo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
`

export const DivSenhas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Input2 = styled.input`
    width: 47%;
    height: 5vh;
    border-radius: 18.2px;
    border: 1px solid #000;
    padding: 0 0 0 3vw;
`