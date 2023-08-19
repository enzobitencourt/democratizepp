import {styled} from "styled-components"
import DepsImg from "../../Assets/Deps.jpeg"
import SensImg from "../../Assets/Sens.webp"

export const Container = styled.div`
    margin-top: 1vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
`

export const ContainerMid = styled.div`
    display: flex;
    flex-direction: column;
    align-content: left;
    width: 93vw;
    height: auto;
    gap: 1vh;
    margin-top: 3vh;
`

export const Titulo = styled.p`
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
`
export const Espacos = styled.div`
    width: 93vw;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Deps = styled.button`
    width: 44.4vw;
    height: 15vh;
    border: none;
    border-radius: 18.2px;
    background: url(${DepsImg});
    background-size: cover;
    padding: 0;
`
export const Sens = styled.button`
    width: 44.4vw;
    height: 15vh;
    border: none;
    border-radius: 18.2px;
    background: url(${SensImg});
    background-size: cover;
    padding: 0;
`

export const Esfumado = styled.div`
    border-radius: 18.2px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 31.77%, rgba(66, 66, 66, 0.86) 80.73%);
    width: 44.4vw;
    height: 15vh;
    display: flex;
    flex-direction: column-reverse;
`

export const Area = styled.p`
    text-align: center;
    color: #E1E1E1;
    margin: 0;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 2vw;
`
export const ContainerEnd = styled.div`
    display: flex;
    flex-direction: column;
    width: 93vw;
    height: auto;
    gap: 1vh;
    margin-top: 3vh;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: row;
    width: 93vw;
    height: auto;
    justify-content: space-between;
`

export const InputNome = styled.input`
    width: 60vw;
    height: 5vh;
    border-radius: 28.6px;
    background: white;
    color: black;
    padding-left: 3vw;
`

export const DivPesquisa = styled.div`
    width: 28vw;
    height: 5vh;
    border-radius: 28.6px;
    background-color: #1B676B;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const FilterButton = styled.button`
    width: 11vw;
    height: 5vh;
    border-radius: 28.6px 0 0 28.6px;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 1vw;
`

export const SearchButton = styled.button`
    width: 17vw;
    height: 5vh;
    border-radius: 28.6px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`
    width: 7vw;
    height: 2vh;
`
export const Img1 = styled.img`
    width: 8vw;
    height: 2vh;
`

export const Resultados = styled.div`
    display: flex;
    flex-direction: column;
    width: 93vw;
    height: auto;
    gap: 2vh;
    padding-top: 3vh;
    margin-bottom: 12vh;
`
