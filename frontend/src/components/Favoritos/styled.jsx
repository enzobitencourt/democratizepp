import { styled } from "styled-components";

export const ContainerFav = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    gap: 3vw;
    width: 93vw;
    height: auto;
    margin-bottom: 2vh;
    position: relative;

    ::-webkit-scrollbar {
    display: none;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
}
`

export const Container = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Conteudo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2vw;
`

export const Texto = styled.p`
    color: #767575;
    padding: 0 8vw;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

