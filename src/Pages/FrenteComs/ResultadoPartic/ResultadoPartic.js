import CardPoliticoConteudo from "../../../Cards/CardPoliticoConteudo/CardPoliticoConteudo"
import dep from "../../../Assets/foto_dep_fav.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Conteudo, Texto, Titulo } from "./styled";
import Carregando from "../../../components/Carregando/Carregando";

function ResultadoPartic(props) {
    const tipo = props.tipo
    const id = props.id
    const nome = props.nome
    const ufs = props.ufs
    const [resultados, setResultados] = useState()
    const [cards, setCards] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (tipo === 'Comissões') {
            axios
                .get(`https://legis.senado.leg.br/dadosabertos/composicao/comissao/${id}`)
                .then((response) => {
                    if (response.data.UltimaComposicaoComissaoSf.ComposicaoComissao.Membros.Membro) {
                        const participantes = response.data.UltimaComposicaoComissaoSf.ComposicaoComissao.Membros.Membro;
                        setResultados(participantes);
                    } else {
                        setResultados([]);
                    }
                })
                .catch((error) => {
                    console.log('Erro na API:', error);
                });
        } else if (tipo === "Frentes") {
            axios
                .get(`https://dadosabertos.camara.leg.br/api/v2/frentes/${id}/membros`)
                .then((response) => {
                    const deputados = response.data.dados;
                    setResultados(deputados);
                })
                .catch((error) => {
                    console.log('Erro na API:', error);
                });
        } else if (tipo === "Eventos") {
            axios
                .get(`https://dadosabertos.camara.leg.br/api/v2/eventos/${id}/deputados`)
                .then((response) => {
                    const deputados = response.data.dados;
                    setResultados(deputados);
                })
                .catch((error) => {
                    console.log('Erro na API:', error);
                });
        }

        if (resultados) {
            setCards(resultados.map((resultado, index) => (
                <CardPoliticoConteudo
                    key={index}
                    url={tipo === "Comissões" ? "Afonso Motta" : `https://www.camara.leg.br/deputados/${resultado.id}`}
                    nome={tipo === "Comissões" ? "Afonso Motta" : `${resultado.nome}`}
                    cor='black'
                    partido={tipo === "Comissões" ? "Afonso Motta" : `${resultado.siglaPartido}/${resultado.siglaUf}`}
                    imagem={tipo === "Comissões" ? { dep } : `${resultado.urlFoto}`}
                    status={tipo === "Frentes" ? `${resultado.titulo}` : `Membro`}
                />
            )))
        }

        setLoading(false)
    }, [tipo, id, setCards, cards, resultados]);

    return (
        <>
        {loading ? (
            <Carregando loading={loading} />
        ) :
            cards ? (
                <>
                    <Titulo>{cards.length} Participantes</Titulo>
                    {cards}
                </>
            ) : (
                <Container>
                    <Conteudo>
                        <Texto>Nenhum resultado encontrado. Pesquise novamente!</Texto>
                    </Conteudo>
                </Container>
            )}
        </>
    )
}

export default ResultadoPartic