import React, { useEffect, useState } from "react";
import CardConteudos from "../../../Cards/CardConteudos/CardConteudos";
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, useDisclosure } from '@chakra-ui/react';
import Carregando from "../../../components/Carregando/Carregando";
import { Container, Conteudo, Texto, Titulo } from "./styled";
import axios from "axios";

function ResultadosDeps(props) {
    const tipo = props.tipo;
    const tema = props.tema;
    const partido = props.partido;
    const nome = props.nome;
    const autor = props.autor;
    const ordem = props.ordenar;
    const [resultados, setResultados] = useState([]);
    const [loading, setLoading] = useState(props.loading);
    const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });

    function construirNome(projeto) {
        return `${projeto.siglaTipo} ${projeto.numero}/${projeto.ano}`;
    }

    const formatData = (dataN) => {
        const data = new Date(dataN);
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear().toString().slice(-2); // Pegar os últimos 2 dígitos do ano
        return `${dia}/${mes}/${ano}`;
    }

    useEffect(() => {
        if (tipo === "Proposições") {
            setLoading(true);
            setResultados([])
            onClose();

            let url = "https://dadosabertos.camara.leg.br/api/v2/proposicoes?";

            if (autor) {
                url += `&autor=${autor}`;
            }

            if (tema) {
                url += `&codTema=${tema}`;
            }

            if (partido) {
                url += `siglaPartidoAutor=${partido}`;
            }

            url += `&ordem=ASC&ordenarPor=id`;

            axios
                .get(url)
                .then((response) => {
                    let projetos = response.data.dados;

                    if (nome) {
                        const nomeLowerCase = nome.toLowerCase();
                        projetos = projetos.filter((projeto) => {
                            const nomeProjeto = construirNome(projeto);
                            return nomeProjeto.toLowerCase().includes(nomeLowerCase);
                        });
                    }

                    if (ordem === "ordem alfabética") {
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
            setLoading(true);
            setResultados([])
            onClose();

            let url = "https://dadosabertos.camara.leg.br/api/v2/eventos?";

            if (tema) {
                url += `&codTipoEvento=${tema}`;
            }

            if (partido) {
                url += `&codSituacao=${partido}`;
            }

            url += `&ordem=ASC&ordenarPor=id`;

            axios
                .get(url)
                .then((response) => {
                    let projetos = response.data.dados;

                    if (nome) {
                        const nomeLowerCase = nome.toLowerCase();
                        projetos = projetos.filter((projeto) => {
                            return (
                                projeto.orgaos[0] &&
                                projeto.orgaos[0].nomePublicacao &&
                                projeto.orgaos[0].nomePublicacao.toLowerCase().includes(nomeLowerCase)
                            );
                        });
                    }

                    if (ordem === "ordem alfabética") {
                        projetos.sort((a, b) => {
                            const nomeA = a.orgaos[0]?.nomePublicacao || "";
                            const nomeB = b.orgaos[0]?.nomePublicacao || "";
                            return nomeA.localeCompare(nomeB);
                        });
                    } else if (ordem === "mais recente") {
                        projetos.sort((a, b) =>
                            new Date(b.dataHoraInicio) - new Date(a.dataHoraInicio)
                        );
                    } else if (ordem === "mais antigo") {
                        projetos.sort((a, b) =>
                            new Date(a.dataHoraInicio) - new Date(b.dataHoraInicio)
                        );
                    }

                    setResultados(projetos);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log("Erro na API:", error);
                    setLoading(false);
                });
        } else if (tipo === "Frentes") {
            setLoading(true);
            setResultados([])
            onClose();

            axios
                .get(
                    "https://dadosabertos.camara.leg.br/api/v2/frentes?idLegislatura=57"
                )
                .then((response) => {
                    let frentes = response.data.dados;

                    if (nome) {
                        const nomeLowerCase = nome.toLowerCase();
                        frentes = frentes.filter((frente) => {
                            return (
                                frente.titulo.toLowerCase().includes(nomeLowerCase)
                            );
                        });
                    }

                    if (ordem === "ordem alfabética") {
                        frentes.sort((a, b) => a.titulo.localeCompare(b.titulo));
                    } else if (ordem === "mais recente") {
                        frentes.sort((a, b) => b.idLegislatura - a.idLegislatura);
                    } else if (ordem === "mais antigo") {
                        frentes.sort((a, b) => a.idLegislatura - b.idLegislatura);
                    }

                    setResultados(frentes)
                    setLoading(false);
                })
                .catch((error) => {
                    console.log("error");
                });

        } else {
            onOpen();
        }
    }, [tipo, onClose, ordem, nome, tema, onOpen, autor, partido]);


    const resultadosRenderizados = resultados.map((resultado, index) => (
        <CardConteudos
            key={index}
            ir='votacoes'
            id={resultado.id}
            tipo={tipo}
            pagina={
                tipo === "Proposições"
                    ? `proposicao`
                    : tipo === "Eventos"
                        ? 'evento'
                        : 'frente'
            }
            titulo={
                tipo === "Proposições"
                    ? `${resultado.siglaTipo} ${resultado.numero}/${resultado.ano}`
                    : tipo === "Eventos" && resultado.orgaos && resultado.orgaos[0]
                        ? resultado.orgaos[0].nomePublicacao
                        : resultado.titulo
            }
            partido={
                tipo === "Proposições"
                    ? `Ano de criação: ${resultado.ano}`
                    : tipo === "Eventos"
                        ? resultado.dataHoraInicio && resultado.situacao
                            ? `${formatData(resultado.dataHoraInicio)} - ${resultado.situacao}`
                            : ""
                        : `ID Legislatura: ${resultado.idLegislatura}`
            }
        />
    ));

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
                                <Texto>Nenhum resultado encontrado. Pesquise novamente!</Texto>
                            </Conteudo>
                        </Container>
                    ) : (
                        <>
                            <Titulo>
                                {resultados.length}
                                {tipo === 'Proposições' ? ' Atualizações Encontradas'
                                    : tipo === "Eventos"
                                        ? ' Evento(s) Recente(s)'
                                        : " Frentes Atuais"}
                            </Titulo>
                            {resultadosRenderizados} 
                        </>
                    )
                )
            )}
        </>
    )
}

export default ResultadosDeps;
