import { styled } from "styled-components";

export const ContainerFavoritos = styled.div`
    display: flex;
    flex-direction: column;
    width: 48vw;
    height: 26vh;
    gap: 1vh;
    border-radius: 18.24px;
    background: #FFF;
`

export const ImgFavs = styled.img`
    width: 100%;
    height: 18vh;
    border-radius: 18.24px;
`
export const Informacoes = styled.div`
    width: 100%;
    height: auto;
    padding: 1vw 2vw;
`

export const CargoFav = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin:0;
`

export const Favorito = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1vw;
`
export const NomeFav = styled.p`
    color: #000;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    margin: 0;
`
