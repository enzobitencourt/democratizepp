import { styled } from "styled-components";

export const Header = styled.div`
    width: auto;
    height: 12vh;
    display: flex;
    flex-direction: row;
    padding: 0 5vw;
    margin-top: 8vh;
    gap: 3vw;
`

export const FotoLogin = styled.div`
    width: 12vh;
    height: 100%;
    border-radius: 50%;
    background: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
`

export const NomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100%;
    justify-content: center;
`

export const Nome = styled.p`
    color: #000;
    font-size: 19.954px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
`
export const Cidadao = styled.p`
    color: #9D9D9D;
    font-size: 12.245px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    gap: 6vh;
    padding: 0;
    width: 100vw;
    height: auto;
`