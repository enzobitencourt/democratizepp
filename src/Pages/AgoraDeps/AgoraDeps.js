import HeaderEspaco from "../../components/HeadersEspacos/HeaderEspaco"
import Menu from "../../components/Menu/Menu"
import { ContainerFilter, Container, ContainerInput, DivPesquisa, Img1, InputNome, SearchButton, InputAutor, ContainerResultados, } from "./styled"
import { Select } from '@chakra-ui/react'
import Search from "../../Assets/IconSearch.svg"
import Ordenar from "../../components/Ordenar/Ordenar"
import CardConteudos from "../../Cards/CardConteudos/CardConteudos"
import { useState, useEffect } from "react"
import axios from "axios"

function AgoraDeps() {
    const [selectedTema, setSelectedTema] = useState("");
    const [selectedPartido, setSelectedPartido] = useState("");
    const [authorInput, setAuthorInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [descubraSelect, setDescubraSelect] = useState('')
    const [ordem, setOrdem] = useState('')

    const handleSearchClick = () => {
        console.log("Valor do descubra é: ", descubraSelect)
        console.log("Valor do primeiro select:", selectedTema);
        console.log("Valor do segundo select:", selectedPartido);
        console.log("Valor do input de autor:", authorInput);
        console.log("Valor do input de nome:", nameInput);

        setNameInput('')
        setDescubraSelect('')
        setSelectedPartido('')
        setAuthorInput('')
        setSelectedTema('')
    };

    const customSelectStyles = {
        control: {
            height: '5vh',
        },
        menu: {
            maxHeight: '20vh', // Set the maximum height for the dropdown
            overflowY: 'scroll', // Enable vertical scrolling when needed
        },
    };


    const [partidos, setPartidos] = useState([])
    const [temas, setTemas] = useState([])

    const Database = () => {
        axios
            .get(
                "https://dadosabertos.camara.leg.br/api/v2/partidos?ordem=ASC&ordenarPor=sigla"
            )
            .then((response) => {
                setPartidos(response.data.dados);
            })
            .catch((error) => {
                console.log("error");
            });
    };

    const DatabaseTemas = () => {
        axios
            .get(
                "https://dadosabertos.camara.leg.br/api/v2/referencias/proposicoes/codTema"
            )
            .then((response) => {
                setTemas(response.data.dados);
            })
            .catch((error) => {
                console.log("error");
            });
    };

    useEffect(() => {
        Database();
        DatabaseTemas()
    }, []);


    return (
        <>
            <Container>
                <HeaderEspaco titulo='Câmara dos Deputados' subtitulo='Agora na Câmara' />
                <ContainerFilter>
                    <ContainerInput>
                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' value={descubraSelect} onChange={(e) => setDescubraSelect(e.target.value)} placeholder='Descubra'>
                            <option value='Proposições'>Proposições</option>
                            <option value='Eventos'>Eventos</option>
                            <option value='Frentes'>Frentes</option>
                        </Select>

                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' value={selectedTema} onChange={(e) => setSelectedTema(e.target.value)} placeholder='Tema'>
                            {temas.map((tema, index) => (
                                <option key={index} value={tema.nome}>
                                    {tema.nome}
                                </option>
                            ))}
                        </Select>
                    </ContainerInput>

                    <ContainerInput>
                        <InputAutor
                            placeholder="Autor"
                            value={authorInput}
                            onChange={(e) => setAuthorInput(e.target.value)} />

                        <Select bg="white" styles={customSelectStyles} w='45vw' h='5vh' borderRadius='28.6px' value={selectedPartido} onChange={(e) => setSelectedPartido(e.target.value)} placeholder='Partido' maxH="50px" overflowY="" >
                            {partidos.map((partido, index) => (
                                <option key={index} value={partido.sigla}>
                                    {partido.sigla}
                                </option>
                            ))}
                        </Select>
                    </ContainerInput>

                    <ContainerInput>
                        <InputNome placeholder="Nome" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                        <DivPesquisa>
                            <SearchButton onClick={handleSearchClick}>
                                <Img1 src={Search} />
                            </SearchButton>
                        </DivPesquisa>
                    </ContainerInput>
                </ContainerFilter>
                <ContainerResultados>
                    <Ordenar ordenar={setOrdem} ordem={ordem} />
                    <CardConteudos ir='frentes' titulo='Frente Parlamentar em Defesa dos Direitos da Mulher' partido='Partido: PP/2019' />
                    <CardConteudos ir='frentes' titulo='Frente Parlamentar em Defesa dos Direitos da Mulher' partido='Partido: PP/2019' />
                </ContainerResultados>
                <Menu barra='1' />
            </Container>
        </>
    )
}

export default AgoraDeps