import { useEffect, useState } from "react";
import CardConteudos from "../../../Cards/CardConteudos/CardConteudos";
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, useDisclosure } from '@chakra-ui/react';
import Carregando from "../../../components/Carregando/Carregando";
import { Conteudo, Container, Texto, Titulo } from "./styled";
import axios from "axios";

function ResultadosSens(props) {
    const tipo = props.tipo;
    const tema = props.tema;
    const partido = props.partido;
    const nome = props.nome;
    const autor = props.autor;
    const ordem = props.ordenar;
    const loading = props.loading;
    const setLoading = props.setLoading;
    const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        if (tipo === "Projetos/Matérias") {
            setLoading(true); // Define como true enquanto busca os dados
            onClose();
            axios
                .get(
                    "https://legis.senado.leg.br/dadosabertos/materia/atualizadas?numdias=30"
                )
                .then((response) => {
                    const projetos = response.data.ListaMateriasAtualizadas.Materias.Materia.map((materia) => {
                        const projeto = {
                            id: materia.IdentificacaoMateria.CodigoMateria,
                            nome: materia.IdentificacaoMateria.DescricaoIdentificacaoMateria,
                            ano: materia.IdentificacaoMateria.AnoMateria,
                            casa: materia.IdentificacaoMateria.SiglaCasaIdentificacaoMateria,
                        };

                        if (materia.Classificacoes && materia.Classificacoes.Classificacao && materia.Classificacoes.Classificacao[0]) {
                            projeto.classificacao = materia.Classificacoes.Classificacao[0].DescricaoClasseHierarquica;
                        }

                        if (materia.AtualizacoesRecentes) {
                            const data = new Date(materia.AtualizacoesRecentes.Atualizacao[0].DataUltimaAtualizacao)

                            const dia = data.getDate();
                            const mes = data.getMonth() + 1;
                            const ano = data.getFullYear();

                            projeto.atualizacao = `${dia}/${mes}/${ano}`
                        }

                        return projeto;
                    });

                    const filteredResultados = projetos.filter((projeto) => (
                        (!nome || projeto.nome.includes(nome)) &&
                        (!tema || (projeto.classificacao && projeto.classificacao.includes(tema))) &&
                        (projeto.casa === "SF")
                    ));


                    if (ordem === "ordem alfabetica") {
                        // Ordenar por nome em ordem alfabética crescente
                        filteredResultados.sort((a, b) => a.nome.localeCompare(b.nome));
                    } else if (ordem === "mais recente") {
                        filteredResultados.sort((a, b) => {
                            const dataA = new Date(a.atualizacao.split('/').reverse().join('/'));
                            const dataB = new Date(b.atualizacao.split('/').reverse().join('/'));
                            return dataB - dataA;
                        });
                    } else if (ordem === "mais antigo") {
                        filteredResultados.sort((a, b) => {
                            const parseDate = (dateStr) => {
                                const [day, month, year] = dateStr.split('/').map(Number);
                                return new Date(year, month - 1, day);
                            };

                            const dataA = parseDate(a.atualizacao);
                            const dataB = parseDate(b.atualizacao);

                            if (dataA < dataB) {
                                return -1;
                            } else if (dataA > dataB) {
                                return 1;
                            } else {
                                return 0;
                            }
                        });
                    }

                    setResultados(filteredResultados);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log("Erro na API:", error);
                    setLoading(false);
                });
        } else if (tipo === "Comissões") {
            onClose();
        } else {
            onOpen();
        }
    }, [nome, onClose, onOpen, partido, setLoading, tipo, tema, ordem]);

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
                                    titulo={resultado.nome}
                                    partido={`Data de Atualização: ${resultado.atualizacao}`} />
                            ))}
                        </>
                    )
                )
            )}
        </>
    )
}

export default ResultadosSens;
