import CardPoliticoConteudo from "../../../Cards/CardPoliticoConteudo/CardPoliticoConteudo"
import axios from "axios"
import { useEffect, useState } from "react"
import Carregando from "../../../components/Carregando/Carregando"
import { Container1, Conteudo, Texto, Titulo } from "../styled"
import { baseUrl } from "../../../services/api"

function Votos(props) {
    const id = props.id
    const idUser = localStorage.getItem("id")
    const voto = props.voto
    const partido = props.partido
    const nome = props.nome
    const ufs = props.ufs
    const tipo = props.tipo
    const [votos, setVotos] = useState([])
    const [loading, setLoading] = useState()
    const [favoritos, setFavoritos] = useState()

    const Favoritos = () => {
        if (idUser) {
            axios
                .get(`${baseUrl}/favorites/find/${idUser}`)
                .then((response) => {
                    setFavoritos(response.data.data)
                })
                .catch((error) => {
                    console.log("Erro ao pegar favoritos");
                });
        }
    }

    useEffect(()=>{
        Favoritos()
    })

    useEffect(() => {
        setLoading(true)
        if (tipo === 'Projetos/Matérias') {
            const filteredResultados = props.votos.filter((dado) => (
                (!nome || dado.IdentificacaoParlamentar.NomeCompletoParlamentar.includes(nome)) &&
                (!ufs.length || ufs.includes(dado.IdentificacaoParlamentar.UfParlamentar)) &&
                (!voto || dado.SiglaVoto.includes(voto)) &&
                (!partido || dado.IdentificacaoParlamentar.SiglaPartidoParlamentar.includes(partido))
            ));

            setVotos(filteredResultados)
            setLoading(false)
        } else if (tipo === "Proposições") {
            axios
                .get(`https://dadosabertos.camara.leg.br/api/v2/votacoes/${id}/votos`)
                .then((response) => {
                    const conteudo = response.data.dados

                    const filteredResultados = conteudo.filter((dado) => (
                        (!nome || dado.deputado_.nome.includes(nome)) &&
                        (!ufs.length || ufs.includes(dado.deputado_.siglaUf)) &&
                        (!voto || dado.tipoVoto.includes(voto)) &&
                        (!partido || dado.deputado_.siglaPartido.includes(partido))
                    ));

                    setVotos(filteredResultados)
                    setLoading(false)
                })
                .catch((error) => {
                    console.log('Erro na API:', error);
                });
        }
    }, [tipo, id, nome, ufs, partido, voto, props.votos]);

    return (
        <>
            {loading ?
                <Carregando loading={true} />
                : (
                    <>
                        {votos.length ? (
                            <>
                                <Titulo>{votos.length} Voto(s)</Titulo>
                                {tipo === "Proposições" ? (
                                    <>
                                        {votos.map((voto, index) => (
                                            <CardPoliticoConteudo
                                                url={`https://www.camara.leg.br/deputados/${voto.deputado_.id}`}
                                                nome={voto.deputado_.nome}
                                                id={voto.deputado_id}
                                                cargo="Deputado Federal"
                                                key={index}
                                                favoritos={favoritos}
                                                texto="Partido"
                                                partido={`${voto.deputado_.siglaPartido} - ${voto.deputado_.siglaUf}`}
                                                cor={voto.tipoVoto === "Sim" ? 'green' : 'red'}
                                                imagem={voto.deputado_.urlFoto}
                                                status={voto.tipoVoto} />
                                        ))}
                                    </>) : (
                                    <>
                                        {votos.map((voto, index) => (
                                            <CardPoliticoConteudo
                                                cargo="Senador"
                                                id={voto.IdentificacaoParlamentar.CodigoParlamentar}
                                                url={voto.IdentificacaoParlamentar.UrlPaginaParlamentar}
                                                nome={voto.IdentificacaoParlamentar.NomeCompletoParlamentar}
                                                key={index}
                                                favoritos={favoritos}
                                                texto="Partido"
                                                partido={`${voto.IdentificacaoParlamentar.SiglaPartidoParlamentar} - ${voto.IdentificacaoParlamentar.UfParlamentar}`}
                                                cor={voto.SiglaVoto === "Sim" ? 'green' : 'red'}
                                                imagem={voto.IdentificacaoParlamentar.UrlFotoParlamentar}
                                                status={voto.SiglaVoto} />
                                        ))}
                                    </>
                                )}

                            </>
                        ) : (
                            <Container1>
                                <Conteudo>
                                    <Texto>Nenhum voto encontrado</Texto>
                                </Conteudo>
                            </Container1>
                        )}
                    </>
                )}

        </>
    )
}

export default Votos