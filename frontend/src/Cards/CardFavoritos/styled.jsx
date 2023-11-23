import { styled } from "styled-components";

export const ContainerFavoritos = styled.div`
    display: flex;
    flex-direction: column;
    width: 43vw;
    height: auto;
    gap: 1vh;
    border-radius: 18.24px;
    background: #FFF;
    padding: 0 0 2vh 0;
`

export const ImgFavs = styled.div`
    width: 43vw;
    height: 20vh;
    border-radius: 18.24px;
    background: url(${(props) => props.imagem});
    background-size: cover;
    background-position: center;
`
export const Informacoes = styled.div`
    width: 43vw;
    display: flex;
    flex-direction: column;
    height: auto;
    gap: 0.3vh;
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
    justify-content: space-between;
    align-items: start;
`
export const NomeFav = styled.p`
    color: #000;
    width: 78%;
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
