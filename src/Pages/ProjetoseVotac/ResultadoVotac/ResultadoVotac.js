import { useState } from "react"
import VotacaoDivs from "../../../components/VotacaoDiv/VotacaoDiv"
import { Select } from "@chakra-ui/react"
import { ContainerInput, Resultados, Participantes, Pesquisa, Container1, Conteudo, Texto } from "../styled"
import InputComponent from "../../../components/InputComponent/InputComponent"
import axios from "axios"
import { useEffect } from "react"
import Votos from "./Votos"
import VotacaoDivCarregando from "../../../components/VotacaoDiv/VotacaoDivCarregando"

function ResultadoVotac(props) {
    const tipo = props.tipo
    const id = props.id
    const [voto, setVoto] = useState(true)
    const [keyword, setKeyword] = useState([])
    const [nome, setNome] = useState('')
    const [partidos, setPartidos] = useState()
    const [votoValue, setVotoValue] = useState()
    const [partidoValue, setPartidoValue] = useState()
    const [votoSelected, setVotoSelected] = useState()
    const [partidoSelected, setPartidoSelected] = useState()
    const [resultado, setResultado] = useState(false)
    const [descricao, setDescricao] = useState()
    const [partido, setPartido] = useState()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [idVotacao, setIdVotacao] = useState()
    const [votos, setVotos] = useState()

    function formatarData(dataString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dataString).toLocaleDateString('pt-BR', options);
    }

    const Database = (url, tipo) => {
        axios
            .get(
                url
            )
            .then((response) => {
                if (tipo === "Proposições") {
                    setPartidos(response.data.dados);
                } else if (tipo === "Projetos/Matérias") {
                    setPartidos(response.data.ListaPartidos.Partidos.Partido);
                }

            })
            .catch((error) => {
                console.log("error");
            });
    };

    useEffect(() => {
        if (tipo === "Proposições") {
            const url = 'https://dadosabertos.camara.leg.br/api/v2/partidos?ordem=ASC&ordenarPor=sigla'
            Database(url, tipo)
        } else if (tipo === "Projetos/Matérias") {
            const url = 'https://legis.senado.leg.br/dadosabertos/senador/partidos'
            Database(url, tipo)
        }
    }, [tipo])

    useEffect(() => {
        if (tipo === "Proposições") {
            axios
                .get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}/votacoes?ordem=DESC&ordenarPor=dataHoraRegistro`)
                .then((response) => {
                    setResultado(true)
                    setIdVotacao(response.data.dados[0].id)
                    setData(`${formatarData(response.data.dados[0].data)}`)
                    setDescricao(response.data.dados[0].descricao)
                    
                    setLoading(false)
                })
                .catch((error) => {
                    setResultado(false)
                    setDescricao("Nenhuma votação encontrada")
                    setLoading(false)
                })
        } else if(tipo === "Projetos/Matérias"){
            axios
                .get(`https://legis.senado.leg.br/dadosabertos/materia/votacoes/${id}`)
                .then((response) => {
                    setResultado(true)
                    const dados = response.data.VotacaoMateria.Materia.Votacoes.Votacao[0]
                    setDescricao(`${dados.DescricaoResultado}: ${dados.DescricaoVotacao}`)
                    setData(`${formatarData(dados.SessaoPlenaria.DataSessao)}`)
                    setVotos(dados.Votos.VotoParlamentar)

                    setLoading(false)
                })
                .catch((error) => {
                    setResultado(false)
                    setDescricao("Nenhuma votação encontrada")
                    setLoading(false)
                })
        }
    }, [id, tipo])

    const keywords = (checkboxes, voto, partido) => {
        setKeyword(checkboxes)
        setVotoSelected(voto)
        setPartidoSelected(partido)
        setVotoValue('')
        setPartidoValue('')
        setVoto()
        setPartido()
    }

    const nomeCandidato = (nomes) => {
        setNome(nomes)
    }

    return (
        <>
            {loading === true ?
                <VotacaoDivCarregando />
                : <VotacaoDivs data={data} descricao={descricao} />}
            <Pesquisa>
                <Participantes>Descubra o voto do seu representante</Participantes>
                <ContainerInput>
                    <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' placeholder='Voto' onChange={(e) => setVoto(e.target.value)} value={votoValue}>
                        <option value='Sim'>Sim</option>
                        <option value='Não'>Não</option>
                        <option value='Abstenção'>Abstenção</option>
                    </Select>

                    <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' placeholder='Partido' onChange={(e) => setPartido(e.target.value)} value={partidoValue}>
                        {partidos && tipo === "Proposições" ?
                            (
                                <>
                                    {partidos.map((partido, index) => (
                                        <option key={index} value={partido.sigla}>
                                            {partido.sigla}
                                        </option>
                                    ))}
                                </>
                            ) : partidos && tipo === "Projeto/Matéria" ? (
                                <>
                                    {partidos
                                        .filter(partido => !partido.DataExtincao)
                                        .map((partido, index) => (
                                            <option key={index} value={partido.Sigla}>
                                                {partido.Sigla}
                                            </option>
                                        ))}
                                </>
                            )
                                : <option value="Selecionar">Selecione algum cargo</option>}
                    </Select>
                </ContainerInput>
                <InputComponent voto={voto} partido={partido} submitKeywords={keywords} submitNome={nomeCandidato} />
            </Pesquisa>
            {loading === true ?
                <Resultados />
                : resultado ?
                    <Resultados>
                        <Votos votos={votos} tipo={tipo} id={idVotacao} voto={votoSelected} partido={partidoSelected} ufs={keyword} nome={nome} />
                    </Resultados>
                    :
                    <Container1>
                        <Conteudo>
                            <Texto>Nenhuma votação encontrada</Texto>
                        </Conteudo>
                    </Container1>
            }
        </>
    )
}

export default ResultadoVotac