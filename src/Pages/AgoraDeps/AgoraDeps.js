import HeaderEspaco from "../../components/HeadersEspacos/HeaderEspaco"
import Menu from "../../components/Menu/Menu"
import { ContainerFilter, Container, ContainerInput, DivPesquisa, Img1, InputNome, SearchButton, InputAutor, ContainerResultados, } from "./styled"
import { Select } from '@chakra-ui/react'
import Search from "../../Assets/IconSearch.svg"
import Ordenar from "../../components/Ordenar/Ordenar"
import { useState, useEffect } from "react"
import axios from "axios"
import Carregando from "../../components/Carregando/Carregando"
import ResultadosDeps from "./ResultadosDeps/ResultadosDeps"
import { useResultadosDeps } from "../../Contexts/ResultadosDeps/ResultadosDepsContext"
import { Titulo } from "./ResultadosDeps/styled"

function AgoraDeps() {
    const [selectedTema, setSelectedTema] = useState("");
    const [selectedPartido, setSelectedPartido] = useState("");
    const [authorInput, setAuthorInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [descubraSelect, setDescubraSelect] = useState('')
    const [ordem, setOrdem] = useState('')
    const [selectedTipo, setSelectedTipo] = useState('')
    const [temaSelected, setTemaSelected] = useState('')
    const [partidoSelected, setPartidoSelected] = useState('')
    const [autorSelected, setAutorSelected] = useState('')
    const [nomeSelected, setNomeSelected] = useState('')
    const [pesquisa, setPesquisa] = useState()
    const [disableTemaSelect, setDisableTemaSelect] = useState(false);
    const [disablePartidoSelect, setDisablePartidoSelect] = useState(false);
    const [disableAuthorInput, setDisableAuthorInput] = useState(false);
    const { resultadosDeps } = useResultadosDeps()
    const { tipos } = useResultadosDeps()
    const [ordena, setOrdena] = useState(true)

    const handleSearchClick = () => {
        setSelectedTipo(descubraSelect)
        setTemaSelected(selectedTema)
        setPartidoSelected(selectedPartido)
        setAutorSelected(authorInput)
        setNomeSelected(nameInput)

        setPesquisa(true)

        setNameInput('')
        setDescubraSelect('')
        setSelectedPartido('')
        setAuthorInput('')
        setSelectedTema('')
    };


    const [partidos, setPartidos] = useState([])
    const [temas, setTemas] = useState([])

    useEffect(() => {
        if (descubraSelect === "Proposições") {
            setDisableTemaSelect(false);
            setDisablePartidoSelect(false);
            setDisableAuthorInput(false);
        } else if (descubraSelect === "Eventos") {
            setDisableTemaSelect(false);
            setDisablePartidoSelect(false);
            setDisableAuthorInput(true);
        } else if (descubraSelect === "Frentes") {
            setDisableTemaSelect(true);
            setDisablePartidoSelect(true);
            setDisableAuthorInput(true);
        } else {
            setDisableTemaSelect(false);
            setDisablePartidoSelect(false);
            setDisableAuthorInput(false);
        }
    }, [descubraSelect]);

    useEffect(() => {
        const Database = () => {
            if (descubraSelect === "Eventos") {
                axios
                    .get(
                        "https://dadosabertos.camara.leg.br/api/v2/referencias/eventos/codSituacaoEvento"
                    )
                    .then((response) => {
                        setPartidos(response.data.dados);
                    })
                    .catch((error) => {
                        console.log("error");
                    });
            } else {
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
            }
        };

        const DatabaseTemas = () => {
            if (descubraSelect === "Proposições") {
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
            } else if (descubraSelect === "Eventos") {
                axios
                    .get(
                        "https://dadosabertos.camara.leg.br/api/v2/referencias/tiposEvento"
                    )
                    .then((response) => {
                        setTemas(response.data.dados);
                    })
                    .catch((error) => {
                        console.log("error");
                    });
            }
        };

        Database();
        DatabaseTemas();
    }, [descubraSelect]);

    useEffect(()=>{
        if(pesquisa === false){
            setOrdena(false)
        }
    }, [setOrdena, pesquisa])

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
                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' value={selectedTema} onChange={(e) => setSelectedTema(e.target.value)} placeholder='Classificação' disabled={disableTemaSelect}>
                            {temas.map((tema, index) => (
                                <option key={index} value={tema.cod}>
                                    {tema.nome}
                                </option>
                            ))}
                        </Select>
                    </ContainerInput>

                    <ContainerInput>
                        <InputAutor
                            placeholder="Autor"
                            value={authorInput}
                            onChange={(e) => setAuthorInput(e.target.value)}
                            disabled={disableAuthorInput} />

                        <Select bg="white" w="45vw" h="5vh" borderRadius="28.6px" value={selectedPartido}
                            onChange={(e) => setSelectedPartido(e.target.value)}
                            placeholder={descubraSelect === "Eventos" ? "Situação" : "Partidos"}
                            maxH="50px"
                            overflowY=""
                            disabled={disablePartidoSelect}
                        >
                            {descubraSelect === "Eventos" ? (
                                partidos.map((partido, index) => (
                                    <option key={index} value={partido.cod}>
                                        {partido.nome}
                                    </option>
                                ))
                            ) : (
                                partidos.map((partido, index) => (
                                    <option key={index} value={partido.sigla}>
                                        {partido.sigla}
                                    </option>
                                ))
                            )}
                        </Select>
                    </ContainerInput>

                    <ContainerInput>
                        <InputNome placeholder={descubraSelect === "Proposições" ? "Nome (ex: PL 512/2023)" : "Nome"} value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                        <DivPesquisa>
                            <SearchButton onClick={handleSearchClick}>
                                <Img1 src={Search} />
                            </SearchButton>
                        </DivPesquisa>
                    </ContainerInput>
                </ContainerFilter>
                <ContainerResultados>
                    <Ordenar ordena={ordena} ordenar={setOrdem} ordem={ordem} />
                    {pesquisa ? (
                        <ResultadosDeps loading={true} ordenar={ordem} tipo={selectedTipo} tema={temaSelected} partido={partidoSelected} autor={autorSelected} nome={nomeSelected} />
                    ) : (
                        resultadosDeps.length ?
                            <>
                                <Titulo>
                                    {resultadosDeps.length}
                                    {tipos === 'Proposições' ? ' Atualizações Encontradas'
                                        : tipos === "Eventos"
                                            ? ' Evento(s) Recente(s)'
                                            : " Frentes Atuais"}
                                </Titulo>
                                {resultadosDeps}
                            </>
                            : <Carregando loading={false} />
                    )}
                </ContainerResultados>
                <Menu barra='1' />
            </Container>
        </>
    )
}

export default AgoraDeps