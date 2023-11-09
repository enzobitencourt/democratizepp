import React, { useEffect, useState } from "react";
import Headers from "../../components/Headers/Headers";
import Menu from "../../components/Menu/Menu";
import { Area, Container, ContainerEnd, ContainerInput, InputNome, DivPesquisa, FilterButton, Img, SearchButton, Img1, Esfumado, Espacos, Resultados, Sens, Titulo, ContainerMid, Deps } from "./styled";
import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Filter from "../../Assets/IconFilter.svg";
import Search from "../../Assets/IconSearch.svg";
import { Modal, useDisclosure } from "@chakra-ui/react";
import CustomCarouselDep from "../../components/CarouselDep/CarouselDep";
import FilterDepsSens from "../../components/FilterDeps&Sens/FilterDeps&Sens";
import axios from "axios";
import FiltroEleitos from "./FiltroEleitos/FiltroEleitos";
import { useResultadosDeps } from "../../Contexts/ResultadosDeps/ResultadosDepsContext";
import { useResultadosSens } from "../../Contexts/ResultadosSens/ResultadosSensContext";
import { baseUrl } from "../../services/api";

function PrincipalDeps() {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { setResultadosDeps } = useResultadosDeps()
    const { setResultadosSens } = useResultadosSens()
    const { setPesquisado } = useResultadosSens()
    const { setPesquisado1 } = useResultadosDeps()
    const id = localStorage.getItem("id")
    const [favoritos, setFavoritos] = useState([])

    const goToDeps = () => {
        navigate("/agoranacamara");
        setResultadosDeps([])
        setPesquisado1(false)
    };

    const goToSens = () => {
        navigate("/agoranosenado");
        setResultadosSens([])
        setPesquisado(false)
    };

    const [partidos, setPartidos] = useState([])


    const Favoritos = () => {
        if (id) {
            axios
                .get(`${baseUrl}/favorites/find/${id}`)
                .then((response) => {
                    setFavoritos(response.data.data)
                })
                .catch((error) => {
                    console.log("errinho");
                });
        }
    }

    useEffect(()=>{
        Favoritos()
    })

    const Database = (url, tipo) => {
        axios
            .get(
                url
            )
            .then((response) => {
                if (tipo === "Deputado Federal") {
                    setPartidos(response.data.dados);
                } else if (tipo === "Senador") {
                    setPartidos(response.data.ListaPartidos.Partidos.Partido);
                }

            })
            .catch((error) => {
                console.log("error");
            });
    };

    const selectEleito = (e) => {
        if (e.target.value === "Deputado Federal") {
            const url = 'https://dadosabertos.camara.leg.br/api/v2/partidos?ordem=ASC&ordenarPor=sigla'
            Database(url, e.target.value)
            setTipoSelect(e.target.value)
        } else if (e.target.value === "Senador") {
            const url = 'https://legis.senado.leg.br/dadosabertos/senador/partidos'
            Database(url, e.target.value)
            setTipoSelect(e.target.value)
        }
    }

    const handleKeywordsSubmit = (checkboxes) => {
        const selectedKeywords = checkboxes;
        onClose();
        setKeywords(selectedKeywords)
    };

    const [tipoSelect, setTipoSelect] = useState("");
    const [partidoSelect, setPartidoSelect] = useState("");
    const [nome, setNome] = useState("");
    const [keywords, setKeywords] = useState([])

    const [tipoEnviar, setTipoEnviar] = useState("");
    const [partidoEnviar, setPartidoEnviar] = useState("");
    const [nomeEnviar, setNomeEnviar] = useState("");
    const [ufsEnviar, setUfsEnviar] = useState([])

    const [pesquisa, setPesquisa] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSearchClick = () => {
        setTipoEnviar(tipoSelect)
        setPartidoEnviar(partidoSelect)
        setNomeEnviar(nome)
        setUfsEnviar(keywords)

        setLoading(true)
        setPesquisa(true)

        setKeywords([])
        setNome("");
    };

    return (
        <>
            <Container>
                <Headers titulo="Câmara e Senado" subtitulo="Espaços de Poder" />
                <CustomCarouselDep />
                <ContainerMid>
                    <Titulo>Escolha a instituição desejada</Titulo>
                    <Espacos>
                        <Deps onClick={goToDeps}>
                            <Esfumado>
                                <Area>Câmara dos Deputados</Area>
                            </Esfumado>
                        </Deps>
                        <Sens onClick={goToSens}>
                            <Esfumado>
                                <Area>Senado Federal</Area>
                            </Esfumado>
                        </Sens>
                    </Espacos>
                </ContainerMid>
                <ContainerEnd>
                    <Titulo>Conheça os representantes</Titulo>
                    <ContainerInput>
                        <Select
                            bg="white"
                            w="45vw"
                            h="5vh"
                            borderRadius="28.6px"
                            placeholder="Cargo"
                            onChange={(e) => selectEleito(e)}
                            value={tipoSelect}
                        >
                            <option value="Deputado Federal">Deputado Federal</option>
                            <option value="Senador">Senador</option>
                        </Select>

                        <Select
                            bg="white"
                            w="45vw"
                            h="5vh"
                            borderRadius="28.6px"
                            placeholder="Partido"
                            onChange={(e) => setPartidoSelect(e.target.value)}
                            value={partidoSelect}
                        >
                            {tipoSelect === "Deputado Federal" ? (
                                <>
                                    {partidos.map((partido, index) => (
                                        <option key={index} value={partido.sigla}>
                                            {partido.sigla}
                                        </option>
                                    ))}
                                </>
                            ) : tipoSelect === "Senador" ? (
                                <>
                                    {partidos
                                        .filter(partido => !partido.DataExtincao)
                                        .map((partido, index) => (
                                            <option key={index} value={partido.Sigla}>
                                                {partido.Sigla}
                                            </option>
                                        ))}
                                </>
                            ) : (
                                <option value="Selecionar">Selecione algum cargo</option>
                            )}
                        </Select>
                    </ContainerInput>
                    <ContainerInput>
                        <InputNome
                            placeholder="Nome"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                        />
                        <DivPesquisa>
                            <FilterButton onClick={onOpen}>
                                <Img src={Filter} />
                            </FilterButton>
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <FilterDepsSens onSubmitKeywords={handleKeywordsSubmit} />
                            </Modal>
                            <SearchButton onClick={handleSearchClick}>
                                <Img1 src={Search} />
                            </SearchButton>
                        </DivPesquisa>
                    </ContainerInput>
                </ContainerEnd>
                <Resultados>
                    {pesquisa ? (
                        <FiltroEleitos favoritos={favoritos} loading={loading} tipo={tipoEnviar} partido={partidoEnviar} nome={nomeEnviar} ufs={ufsEnviar} />
                    ) : (
                        <></>
                    )}
                </Resultados>
                <Menu barra="1" />
            </Container>
        </>
    );
}

export default PrincipalDeps;