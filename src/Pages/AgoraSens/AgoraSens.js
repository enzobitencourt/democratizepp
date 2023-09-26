import HeaderEspaco from "../../components/HeadersEspacos/HeaderEspaco"
import Menu from "../../components/Menu/Menu"
import { ContainerFilter, Container, ContainerInput, DivPesquisa, Img1, InputNome, SearchButton, InputAutor, ContainerResultados, } from "./styled"
import { Select } from '@chakra-ui/react'
import Search from "../../Assets/IconSearch.svg"
import Ordenar from "../../components/Ordenar/Ordenar"
import { useState, useEffect } from "react"
import axios from "axios"
import ResultadosSens from "./ResultadosSens/ResultadosSens"
import Carregando from "../../components/Carregando/Carregando"

function AgoraSens() {
    const [selectedTema, setSelectedTema] = useState("");
    const [selectedPartido, setSelectedPartido] = useState("");
    const [authorInput, setAuthorInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [descubraSelect, setDescubraSelect] = useState('')
    const [ordem, setOrdem] = useState('')
    const [partidos, setPartidos] = useState([])
    const [temas, setTemas] = useState([])
    const [selectedTipo, setSelectedTipo] = useState('')
    const [temaSelected, setTemaSelected] = useState('')
    const [partidoSelected, setPartidoSelected] = useState('')
    const [autorSelected, setAutorSelected] = useState('')
    const [nomeSelected, setNomeSelected] = useState('')
    const [pesquisa, setPesquisa] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSearchClick = () => {
        setSelectedTipo(descubraSelect)
        setTemaSelected(selectedTema)
        setPartidoSelected(selectedPartido)
        setAutorSelected(authorInput)
        setNomeSelected(nameInput)

        setLoading(true)
        setPesquisa(true)

        setNameInput('')
        setDescubraSelect('')
        setSelectedPartido('')
        setAuthorInput('')
        setSelectedTema('')
    };

    const Database = () => {
        axios
            .get(
                'https://legis.senado.leg.br/dadosabertos/senador/partidos'
            )
            .then((response) => {
                setPartidos(response.data.ListaPartidos.Partidos.Partido);
            })
            .catch((error) => {
                console.log("error");
            });
    };

    const DatabaseTemas = () => {
        axios
            .get(
                "https://legis.senado.leg.br/dadosabertos/materia/classes"
            )
            .then((response) => {
                setTemas(response.data.ListaClassificacoesMateria.ArvoreClassificacao.Classes.Classe);
            })
            .catch((error) => {
                console.log("error");
            });
    };

    useEffect(() => {
        Database();
        DatabaseTemas();
    }, []);


    return (
        <>
            <Container>
                <HeaderEspaco titulo='Senado Federal' subtitulo='Agora no Senado' />
                <ContainerFilter>
                    <ContainerInput>
                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' value={descubraSelect} onChange={(e) => setDescubraSelect(e.target.value)} placeholder='Descubra'>
                            <option value='Projetos/Matérias'>Projetos/Matérias</option>
                            <option value='Comissões'>Comissões</option>
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

                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' value={selectedPartido} onChange={(e) => setSelectedPartido(e.target.value)} placeholder='Partido'>
                            <>
                                {partidos
                                    .filter(partido => !partido.DataExtincao)
                                    .map((partido, index) => (
                                        <option key={index} value={partido.Sigla}>
                                            {partido.Sigla}
                                        </option>
                                    ))}
                            </>
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
                    {pesquisa ? (
                        <ResultadosSens setLoading={setLoading()} ordenar={ordem} loading={loading} tipo={selectedTipo} tema={temaSelected} partido={partidoSelected} autor={autorSelected} nome={nomeSelected} />
                    ) : (
                        <Carregando loading={false}/>
                    )}
                </ContainerResultados>
                <Menu barra='1' />
            </Container>
        </>
    )
}

export default AgoraSens