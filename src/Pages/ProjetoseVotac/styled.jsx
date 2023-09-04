import {styled} from "styled-components"

export const Container = styled.div`
    margin-top: 1vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    gap: 3.5vh;
`
export const DivConteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-content: left;
    width: 93vw;
    gap: 4.5vh;
    padding: 0 0 0 1vh;
`

export const Infos = styled.div`
    width: 93vw;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 3vh;
`

export const TextInfos = styled.p`
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    display: flex;
    flex-direction: row;
    gap: 1vw;
`

export const LinkAutor = styled.a`
    color: #000;
    margin: 0;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
`

export const Participantes = styled.p`
    color: #000;
    margin: 0;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Pesquisa = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: row;
    width: 93vw;
    height: auto;
    justify-content: space-between;
`

export const Resultados = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    margin-bottom: 13vh;
`