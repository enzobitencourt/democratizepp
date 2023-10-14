import HeadersConteud from "../../components/HeadersConteud/HeadersConteud"
import Menu from "../../components/Menu/Menu"
import { Container, DivConteudo, Infos, TextInfos } from "./styled"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import ResultadoVotac from "./ResultadoVotac/ResultadoVotac"

function ProjetoeVotac() {
    const params = useParams()
    const tipoCaminho = params.tipo
    const [tipo, setTipo] = useState()
    const [resultado, setResultado] = useState()
    const [espaco, setEspaco] = useState()
    const [autores, setAutores] = useState([]);
    const [atualizacao, setAtualizacao] = useState()

    useEffect(()=>{
        if(tipoCaminho === "proposicao"){
            setTipo("Proposições")
        } else {
            setTipo("Projetos/Matérias")
        } 
    }, [setTipo, tipoCaminho])

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
                            situacao={resultado.DecisaoEDestino ? resultado.DecisaoEDestino.Decisao.Descricao : "Tramitando" } />
                    ) : (
                        <HeadersConteud
                            titulo={`${resultado.siglaTipo} - ${resultado.numero}/${resultado.ano}`}
                            subtitulo={espaco}
                            situacao={resultado.statusProposicao.descricaoSituacao ? resultado.statusProposicao.descricaoSituacao : "Tramitando"}/>
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
                    <ResultadoVotac tipo={tipo} id={params.id}/>
                    <Menu barra='1' />
                </Container>
            ) : (
                <></>
            )}
        </>
    )
}

export default ProjetoeVotac