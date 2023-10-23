import CardPoliticoConteudo from "../../../Cards/CardPoliticoConteudo/CardPoliticoConteudo";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Conteudo, Texto, Titulo } from "./styled";
import Carregando from "../../../components/Carregando/Carregando";
import { baseUrl } from "../../../services/api";

function ResultadoPartic(props) {
    const tipo = props.tipo;
    const id = props.id;
    const [nome, setNome] = useState(props.nome);
    const [ufs, setUfs] = useState(props.ufs);
    const [resultados, setResultados] = useState([]);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favoritos, setFavoritos] = useState()

    const Favoritos = () => {
        if (id) {
            axios
                .get(`${baseUrl}/favorites/find`)
                .then((response) => {
                    setFavoritos(response.data.data)
                })
                .catch((error) => {
                    console.log("errinho");
                });
        }
    }

    useEffect(() => {
        Favoritos()
    })

    useEffect(() => {
        setLoading(true);

        if (tipo === 'Comissões') {
            axios
                .get(`https://legis.senado.leg.br/dadosabertos/composicao/comissao/${id}`)
                .then((response) => {
                    if (response.data.UltimaComposicaoComissaoSf.ComposicaoComissao.Membros.Membro) {
                        const participantes = response.data.UltimaComposicaoComissaoSf.ComposicaoComissao.Membros.Membro;

                        const filteredResultados = participantes.filter((deputado) => (
                            (!nome || deputado.NomeMembro.includes(nome))
                        ));
                        setResultados(filteredResultados);
                    } else {
                        setResultados([]);
                    }
                })
                .catch((error) => {
                    console.log('Erro na API:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else if (tipo === "Frentes") {
            axios
                .get(`https://dadosabertos.camara.leg.br/api/v2/frentes/${id}/membros`)
                .then((response) => {
                    const deputados = response.data.dados;
                    const filteredResultados = deputados.filter((deputado) => (
                        (!nome || deputado.nome.includes(nome)) &&
                        (!ufs.length || ufs.includes(deputado.siglaUf))
                    ));
                    setResultados(filteredResultados);
                })
                .catch((error) => {
                    console.log('Erro na API:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else if (tipo === "Eventos") {
            axios
                .get(`https://dadosabertos.camara.leg.br/api/v2/eventos/${id}/deputados`)
                .then((response) => {
                    const deputados = response.data.dados;
                    const filteredResultados = deputados.filter((deputado) => (
                        (!nome || deputado.nome.includes(nome)) &&
                        (!ufs.length || ufs.includes(deputado.siglaUf))
                    ));
                    setResultados(filteredResultados);
                })
                .catch((error) => {
                    console.log('Erro na API:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [tipo, id, nome, ufs]);

    useEffect(() => {
        setNome(props.nome);
        setUfs(props.ufs);
    }, [props.nome, props.ufs]);

    useEffect(() => {
        if (resultados) {
            setCards(resultados.map((resultado, index) => (
                <CardPoliticoConteudo
                    key={index}

                    id={tipo === "Comissões" && resultado.NomeCasaMembro === "Senado" ?
                        `${resultado.CodigoParlamentar}`
                        : tipo === "Comissões" && resultado.NomeCasaMembro === "Câmara" ?
                            `${resultado.CodigoDeputadoNaCamara}` :
                            `${resultado.id}`}

                    url={tipo === "Comissões" && resultado.NomeCasaMembro === "Senado" ?
                        `https://www25.senado.leg.br/web/senadores/senador/-/perfil/${resultado.CodigoParlamentar}`
                        : tipo === "Comissões" && resultado.NomeCasaMembro === "Câmara" ?
                            `https://www.camara.leg.br/deputados/${resultado.CodigoDeputadoNaCamara}` :
                            `https://www.camara.leg.br/deputados/${resultado.id}`}

                    nome={tipo === "Comissões" ? `${resultado.NomeMembro}` : `${resultado.nome}`}

                    cor='black'

                    texto={tipo === "Comissões" ? "Casa Membro: " : "Partido: "}

                    partido={tipo === "Comissões" ? `${resultado.NomeCasaMembro}` : `${resultado.siglaPartido}/${resultado.siglaUf}`}

                    imagem={tipo === "Comissões" && resultado.NomeCasaMembro === "Senado" ?
                        `https://www.senado.leg.br/senadores/img/fotos-oficiais/senador${resultado.CodigoParlamentar}.jpg`
                        : tipo === "Comissões" && resultado.NomeCasaMembro === "Câmara" ?
                            `https://www.camara.leg.br/internet/deputado/bandep/${resultado.CodigoDeputadoNaCamara}.jpg` :
                            `${resultado.urlFoto}`}

                    cargo={tipo === "Comissões" && resultado.NomeCasaMembro === "Senado" ?
                        `Senador`
                        : tipo === "Comissões" && resultado.NomeCasaMembro === "Câmara" ?
                            `Deputado Federal` :
                            `Deputado Federal`}

                    status={tipo === "Frentes" ? `${resultado.titulo}` : `Membro`}

                    favoritos={favoritos}
                />
            )))
        }
    }, [resultados, tipo]);

    return (
        <>
            {loading === true ? (
                <Carregando loading={true} />
            ) : cards && cards.length > 0 ? (
                <>
                    <Titulo>{cards.length} Participante(s)</Titulo>
                    {cards}
                </>
            ) : (
                <Container>
                    <Conteudo>
                        <Texto>Nenhum participante encontrado</Texto>
                    </Conteudo>
                </Container>
            )}
        </>
    )
}

export default ResultadoPartic;
