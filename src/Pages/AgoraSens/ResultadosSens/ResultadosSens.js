import { useEffect } from "react"
import CardConteudos from "../../../Cards/CardConteudos/CardConteudos"
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, useDisclosure } from '@chakra-ui/react'
import { useState } from "react"
import Carregando from "../../../components/Carregando/Carregando"
import { Conteudo, Container, Texto, Titulo } from "./styled"
import axios from "axios"

function ResultadosSens(props) {
    const tipo = props.tipo
    const tema = props.tema
    const partido = props.partido
    const nome = props.nome
    const autor = props.autor
    const ordem = props.ordenar
    const loading = props.loading
    const setLoading = props.setLoading
    const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: false })
    const [resultados, setResultados] = useState([])

    console.log(tipo)
    console.log(tema)
    console.log(partido)
    console.log(nome)
    console.log(autor)
    console.log(ordem)

    useEffect(() => {
        if (tipo === "Projetos/Matérias") {
            setResultados([])
            onClose()
            axios
                .get(
                    "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome"
                )
                .then((response) => {
                    const projetos = response.data.dados.map((projeto) => ({
                        id: projeto.id,
                        nome: projeto.nome,
                        partido: projeto.siglaPartido,
                        uf: projeto.siglaUf,
                        imagem: projeto.urlFoto,
                    }));

                    const filteredResultados = projetos.filter((projeto) => (
                        (!partido || partido === projeto.partido) &&
                        (!nome || projeto.nome.includes(nome))
                    ));

                    setResultados(filteredResultados);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log("Erro na API:", error);
                    setLoading(false);
                });
        } else if (tipo === "Comissões") {
            onClose()
        } else {
            onOpen()
        }
    }, [nome, onClose, onOpen, partido, setLoading, tipo])

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
                            <Titulo>{resultados.length} resultados</Titulo>
                            {resultados.map((resultado, index) => (
                                <CardConteudos 
                                key={index}
                                ir='votacoes' 
                                titulo='Projeto de Lei 175/2022' 
                                partido='Partido: PT/ES' />                   
                            ))}
                        </>
                    )
                )
            )}
        </>
    )
}

export default ResultadosSens