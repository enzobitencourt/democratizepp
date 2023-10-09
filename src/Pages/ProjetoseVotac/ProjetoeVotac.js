import CardPoliticoConteudo from "../../Cards/CardPoliticoConteudo/CardPoliticoConteudo"
import HeadersConteud from "../../components/HeadersConteud/HeadersConteud"
import InputComponent from "../../components/InputComponent/InputComponent"
import Menu from "../../components/Menu/Menu"
import VotacaoDivs from "../../components/VotacaoDiv/VotacaoDiv"
import { Container, DivConteudo, Infos, Participantes, Pesquisa, TextInfos, ContainerInput, Resultados } from "./styled"
import senador from "../../Assets/senador.jpg"
import { Select } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useTipo } from "../../Contexts/TipoContext"

function ProjetoeVotac() {
    const [keyword, setKeyword] = useState([])
    const [nome, setNome] = useState('')
    const params = useParams()
    const { tipo } = useTipo();
    const [resultado, setResultado] = useState()
    const [espaco, setEspaco] = useState()
    const [autores, setAutores] = useState([]);
    const [atualizacao, setAtualizacao] = useState()


    const keywords = (checkboxes) => {
        setKeyword(checkboxes)
        console.log('Keywords:', checkboxes)
        console.log(keyword)
    }

    const nomeCandidato = (nomes) => {
        setNome(nomes)
        console.log('Nome do candidato:', nomes)
        console.log(nome)
    }

    function converterData(dataString) {
        const data = new Date(dataString);
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear().toString().slice(-2);
        const hora = data.getHours().toString().padStart(2, '0');
        const minutos = data.getMinutes().toString().padStart(2, '0');
        const segundos = data.getSeconds().toString().padStart(2, '0');
      
        return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
      }

      function converterData2(dataString) {
        const data = new Date(dataString);
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear();
      
        return `${dia}/${mes}/${ano}`;
      }
      

    useEffect(() => {
        if (tipo === 'Projetos/Matérias') {
            setEspaco('Agora no Senado')
            axios.get(`https://legis.senado.leg.br/dadosabertos/materia/${params.id}`)
                .then((response) => {
                    axios.get(`https://legis.senado.leg.br/dadosabertos/materia/atualizacoes/${params.id}?v=5`)
                    .then((response) =>{
                        const informacao = response.data.AtualizacaoMateria.Materia.AtualizacoesRecentes.Atualizacao[0].InformacaoAtualizada
                        const data = converterData(response.data.AtualizacaoMateria.Materia.AtualizacoesRecentes.Atualizacao[0].DataUltimaAtualizacao)
                        setAtualizacao(`${informacao} - ${data}`);
                    })
                    .catch((error) =>{
                        console.log('Erro ao localizar autor:', error)
                    })
                    setResultado(response.data.DetalheMateria.Materia)
                })
                .catch((error) => {
                    console.log('Erro na API:', error);
                });
        } else if (tipo === "Proposições") {
            setEspaco("Agora na Câmara");
            axios
                .get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes/${params.id}`)
                .then((response) => {
                    const proposicao = response.data.dados;
                    axios.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes/${params.id}/autores`)
                    .then((response) =>{
                        const autor = response.data.dados[0].nome
                        setAutores(autor);
                    })
                    .catch((error) =>{
                        console.log('Erro ao localizar autor:', error)
                    })

                    setResultado(proposicao);
                })
                .catch((error) => {
                    console.log('Erro na API:', error);
                });
        } 
    }, [tipo, params.id, resultado]);

    return (
        <>
            {resultado ? (
                <Container>
                    {tipo === "Projetos/Matérias" ? (
                        <HeadersConteud
                            titulo={resultado.IdentificacaoMateria.DescricaoIdentificacaoMateria}
                            subtitulo={espaco}
                            situacao={resultado.DecisaoEDestino.Decisao.Descricao} />
                    ) : (
                        <HeadersConteud
                            titulo={`${resultado.siglaTipo} - ${resultado.numero}/${resultado.ano}`}
                            subtitulo={espaco}
                            situacao={resultado.statusProposicao.descricaoSituacao}/>
                    )}
                    <DivConteudo>
                        <Infos>
                        {tipo === 'Projetos/Matérias' ? (
                                <>
                                    <TextInfos><b>Criação: </b> {converterData2(resultado.DadosBasicosMateria.DataApresentacao)}</TextInfos>
                                    <TextInfos><b>Atualicação: </b> {atualizacao} </TextInfos>
                                    <TextInfos><b>Apelido: </b> {resultado.DadosBasicosMateria.ApelidoMateria} </TextInfos>
                                    <TextInfos><b>Ementa: </b> {resultado.DadosBasicosMateria.EmentaMateria}  </TextInfos>
                                </>
                            ) : (
                                <>
                                    <TextInfos><b>Tipo: </b> {resultado.descricaoTipo} </TextInfos>
                                    <TextInfos><b>Autor(es): </b> {autores}</TextInfos>
                                    <TextInfos><b>Ementa: </b> {resultado.ementa} </TextInfos>
                                    <TextInfos><b>Palavras-chave: </b> {resultado.keywords}  </TextInfos>
                                </>
                            )}
                        </Infos>
                    </DivConteudo>
                    <VotacaoDivs />
                    <Pesquisa>
                        <Participantes>Descubra o voto do seu representante</Participantes>
                        <ContainerInput>
                            <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' placeholder='Voto'>
                                <option value='option1'>À favor</option>
                                <option value='option2'>Contra</option>
                                <option value='option3'>Nulo</option>
                            </Select>

                            <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' placeholder='Partido'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </ContainerInput>
                        <InputComponent submitKeywords={keywords} submitNome={nomeCandidato} />
                    </Pesquisa>
                    <Resultados>
                        <CardPoliticoConteudo nome='Soraia Thronike' cor='green' imagem={senador} status='À favor' />
                    </Resultados>
                    <Menu barra='1' />
                </Container>
            ) : (
                <></>
            )}
        </>
    )
}

export default ProjetoeVotac