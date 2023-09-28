import { useEffect, useState } from "react"
import CardConteudos from "../../../Cards/CardConteudos/CardConteudos"
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, useDisclosure } from '@chakra-ui/react'
import Carregando from "../../../components/Carregando/Carregando"
import { Container, Conteudo, Texto, Titulo } from "./styled"
import axios from "axios"

function ResultadosDeps(props) {
    const tipo = props.tipo
    const tema = props.tema
    const partido = props.partido
    const nome = props.nome
    const autor = props.autor
    const ordem = props.ordenar
    const [resultados, setResultados] = useState([])
    const [loading, setLoading] = useState(props.loading)
    const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: false })

    console.log(tipo)
    console.log(tema)
    console.log(partido)
    console.log(nome)
    console.log(autor)
    console.log(ordem)

    useEffect(() => {
        if (tipo === "Proposições") {
            setLoading(true)
            onClose()

            let url = "https://dadosabertos.camara.leg.br/api/v2/proposicoes?"

            if (autor) {
                url += `&autor=${autor}`
            }

            if (tema) {
                url += `&codTema=${tema}`
            }

            if (partido) {
                url += `siglaPartidoAutor=${partido}`
            }

            url += `&ordem=ASC&ordenarPor=id`

            axios
                .get(
                    url
                )
                .then((response) => {
                    const projetos = response.data.dados

                    if (ordem === "ordem alfabetica") {
                        // Ordenar por nome em ordem alfabética crescente
                        projetos.sort((a, b) => a.siglaTipo.localeCompare(b.siglaTipo));
                    } else if (ordem === "mais recente") {
                        projetos.sort((a, b) => b.ano - a.ano);
                    } else if (ordem === "mais antigo") {
                        projetos.sort((a, b) => a.ano - b.ano);
                    }

                    setResultados(projetos);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log("Erro na API:", error);
                    setLoading(false);
                });
        } else if (tipo === "Eventos") {
            setLoading(true)
            onClose()

            let url = "https://dadosabertos.camara.leg.br/api/v2/eventos?"


            if (tema) {
                url += `&codTipoEvento=${tema}`
            }

            url += `&ordem=ASC&ordenarPor=id`

            axios
                .get(
                    url
                )
                .then((response) => {
                    const projetos = response.data.dados
                    console.log(projetos)
                    if (ordem === "ordem alfabetica") {
                        // Ordenar por nome em ordem alfabética crescente
                        projetos.sort((a, b) => a.siglaTipo.localeCompare(b.siglaTipo));
                    } else if (ordem === "mais recente") {
                        projetos.sort((a, b) => b.ano - a.ano);
                    } else if (ordem === "mais antigo") {
                        projetos.sort((a, b) => a.ano - b.ano);
                    }

                    setResultados(projetos);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log("Erro na API:", error);
                    setLoading(false);
                });
        } else if (tipo === "Frentes") {
            setLoading(true)
            onClose()
        } else {
            onOpen()
        }
    }, [tipo, onClose, ordem, nome, tema, onOpen, autor, partido])

    return (
        <>
            {isVisible ? (
                <Alert borderRadius='20px' status='error'>
                    <AlertIcon />
                    <Box paddingRight='1vw'>
                        <AlertTitle>Erro!</AlertTitle>
                        <AlertDescription>
                            Efetue a pesquisa novamente e escolha uma opção válida no campo "Descubra" dos filtros acima...
                        </AlertDescription>
                    </Box>
                </Alert>
            ) : (
                loading ? (
                    <Carregando loading={loading} />
                ) : (
                    resultados.length === 0 ? (
                        <Container>
                            <Conteudo>
                                <Texto>Nenhum candidato encontrado. Pesquise novamente!</Texto>
                            </Conteudo>
                        </Container>
                    ) : (
                        <>
                            <Titulo>
                                {resultados.length}
                                {tipo === 'Proposições' ? ' Atualizações nos Últimos 30 Dias' : ' Atualizações nos Últimos 30 Dias'}
                            </Titulo>
                            {resultados.map((resultado, index) => (
                                <CardConteudos
                                    key={index}
                                    ir='votacoes'
                                    titulo={`${resultado.siglaTipo} ${resultado.numero}/${resultado.ano} `}
                                    partido={`Ano de criação: ${resultado.ano}`} />
                            ))}
                        </>
                    )
                )
            )}
        </>
    )
}

export default ResultadosDeps