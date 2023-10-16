import HeaderEspaco from "../../components/HeadersEspacos/HeaderEspaco"
import Menu from "../../components/Menu/Menu"
import { ContainerFilter, Container, ContainerInput, DivPesquisa, Img1, InputNome, SearchButton, ContainerResultados, } from "./styled"
import { Select } from '@chakra-ui/react'
import Search from "../../Assets/IconSearch.svg"
import Ordenar from "../../components/Ordenar/Ordenar"
import { useState, useEffect } from "react"
import axios from "axios"
import ResultadosSens from "./ResultadosSens/ResultadosSens"
import Carregando from "../../components/Carregando/Carregando"
import { useResultadosSens } from "../../Contexts/ResultadosSens/ResultadosSensContext"
import { Titulo } from "./ResultadosSens/styled"

function AgoraSens() {
    const [selectedTema, setSelectedTema] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [descubraSelect, setDescubraSelect] = useState('')
    const [ordem, setOrdem] = useState('')
    const [temas, setTemas] = useState([])
    const [selectedTipo, setSelectedTipo] = useState('')
    const [temaSelected, setTemaSelected] = useState('')
    const [nomeSelected, setNomeSelected] = useState('')
    const [pesquisa, setPesquisa] = useState()
    const [loading, setLoading] = useState(false)
    const { resultadosSens } = useResultadosSens()
    const {tipos} = useResultadosSens()
    const [ordena, setOrdena] = useState(true)
    const {pesquisado} = useResultadosSens()

    const handleSearchClick = () => {
        setSelectedTipo(descubraSelect)
        setTemaSelected(selectedTema)
        setNomeSelected(nameInput)

        setLoading(true)
        setPesquisa(true)

        setNameInput('')
        setDescubraSelect('')
        setSelectedTema('')
    };

    useEffect(() => {
        const Database = () => {
            if (descubraSelect === "Projetos/Matérias") {
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
            } else if (descubraSelect === "Comissões") {
                axios
                    .get(
                        'https://legis.senado.leg.br/dadosabertos/comissao/lista/tiposColegiado'
                    )
                    .then((response) => {
                        setTemas(response.data.ListaTiposColegiado.TiposColegiado.TipoColegiado);
                    })
                    .catch((error) => {
                        console.log("error");
                    });
            }
        };

        Database();
    }, [descubraSelect]);

    useEffect(()=>{
        if(pesquisado === true){
            setOrdena(false)
        }
    }, [setOrdena, pesquisa, pesquisado])

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

                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' value={selectedTema} onChange={(e) => setSelectedTema(e.target.value)} placeholder='Classificação'>

                            {descubraSelect === "Projetos/Matérias" ? (
                                <>
                                    {temas.map((tema, index) => (
                                        <option key={index} value={tema.nome}>
                                            {tema.nome}
                                        </option>
                                    ))}
                                </>
                            ) : descubraSelect === "Comissões" ? (
                                <>
                                    {temas.map((tipo, index) => (
                                        <option key={index} value={tipo.Sigla}>
                                            {tipo.Sigla}
                                        </option>
                                    ))}
                                </>
                            ) : (
                                <option value="Selecionar">Selecione algum descubra</option>
                            )}

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
                    <Ordenar ordena={ordena} ordenar={setOrdem} ordem={ordem} />
                    {pesquisa ? (
                        <ResultadosSens setLoading={setLoading} ordenar={ordem} loading={loading} tipo={selectedTipo} tema={temaSelected} nome={nomeSelected} />

                    ) : (
                        resultadosSens.length ?
                            <Titulo>
                                {resultadosSens.length} {tipos === 'Comissões' ? ' Colegiado(s) em Atividade' : ' Atualizações nos Últimos 30 Dias'}
                                {resultadosSens}
                            </Titulo>

                            : <Carregando loading={false} />
                    )}
                </ContainerResultados>
                <Menu barra='1' />
            </Container>
        </>
    )
}

export default AgoraSens