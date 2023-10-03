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
    const ordem = props.ordenar;
    const loading = props.loading;
    const setLoading = props.setLoading;
    const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        if (tipo === "Projetos/Matérias") {
            setLoading(true); 
            setResultados([])
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

                            projeto.data = `${dia}/${mes}/${ano}`
                        }

                        return projeto;
                    });

                    const filteredResultados = projetos.filter((projeto) => (
                        (!nome || projeto.nome.includes(nome)) &&
                        (!tema || (projeto.classificacao && projeto.classificacao.includes(tema))) &&
                        (projeto.casa === "SF")
                    ));

                    if (ordem === "ordem alfabetica") {
                        filteredResultados.sort((a, b) => a.nome.localeCompare(b.nome));
                    } else if (ordem === "mais recente") {
                        filteredResultados.sort((a, b) => {
                            const parseDate = (dateStr) => {
                                const [day, month, year] = dateStr.split('/').map(Number);
                                return new Date(year, month - 1, day);
                            };

                            const dataA = parseDate(a.data);
                            const dataB = parseDate(b.data);

                            return dataB - dataA;
                        });
                    } else if (ordem === "mais antigo") {
                        filteredResultados.sort((a, b) => {
                            const parseDate = (dateStr) => {
                                const [day, month, year] = dateStr.split('/').map(Number);
                                return new Date(year, month - 1, day);
                            };

                            const dataA = parseDate(a.data);
                            const dataB = parseDate(b.data);

                            return dataA - dataB;
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
            setLoading(true); 
            setResultados([])
            onClose();
            axios
                .get(
                    "https://legis.senado.leg.br/dadosabertos/comissao/lista/colegiados"
                )
                .then((response) => {
                    const colegiados = response.data.ListaColegiados.Colegiados.Colegiado.map((colegio) => {
                        const colegios = {
                            id: colegio.Codigo,
                            nome: colegio.Nome,
                            casa: colegio.SiglaCasa,
                            classificacao: colegio.SiglaTipoColegiado,
                        };

                        if (colegio.DataInicio) {
                            const dateComponents = colegio.DataInicio.split('-').map(Number);
                            const year = dateComponents[0];
                            const month = dateComponents[1];
                            const day = dateComponents[2];

                            const isTwoDigitYear = year >= 0 && year <= 99;

                            let fullYear;
                            if (isTwoDigitYear) {
                                const currentYear = new Date().getFullYear();
                                const currentYearLastTwoDigits = currentYear % 100;
                                if (year <= currentYearLastTwoDigits) {
                                    fullYear = currentYear - currentYearLastTwoDigits + year;
                                } else {
                                    fullYear = currentYear - currentYearLastTwoDigits - 100 + year;
                                }
                            } else {
                                fullYear = year;
                            }

                            const data = new Date(fullYear, month - 1, day); 

                            const dia = data.getDate();
                            const mes = data.getMonth() + 1;
                            const ano = data.getFullYear(); 

                            colegios.data = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano.toString()}`;
                        }
                        return colegios;
                    });

                    const filteredResultados = colegiados.filter((colegio) => (
                        (!nome || colegio.nome.includes(nome)) &&
                        (!tema || (colegio.classificacao && colegio.classificacao.includes(tema)))
                    ));

                    if (ordem === "ordem alfabética") {
                        // Ordenar por nome em ordem alfabética crescente
                        filteredResultados.sort((a, b) => a.nome.localeCompare(b.nome));
                    } else if (ordem === "mais recente") {
                        filteredResultados.sort((a, b) => {
                            const parseDate = (dateStr) => {
                                const [day, month, year] = dateStr.split('/').map(Number);
                                const fullYear = year < 50 ? 2000 + year : 1900 + year;
                                return new Date(fullYear, month - 1, day); // Subtract 1 from month because it's 0-based
                            };

                            const dataA = a.data ? parseDate(a.data) : null;
                            const dataB = b.data ? parseDate(b.data) : null;

                            if (dataA && dataB) {
                                return dataB - dataA;
                            } else if (dataA) {
                                return -1;
                            } else if (dataB) {
                                return 1;
                            } else {
                                return 0;
                            }
                        });
                    } else if (ordem === "mais antigo") {
                        filteredResultados.sort((a, b) => {
                            const parseDate = (dateStr) => {
                                const [day, month, year] = (dateStr || '0/0/0').split('/').map(Number);
                                return new Date(year, month - 1, day);
                            };

                            const dataA = parseDate(a.data);
                            const dataB = parseDate(b.data);

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
                                <Texto>Nenhum resultado encontrado. Pesquise novamente!</Texto>
                            </Conteudo>
                        </Container>
                    ) : (
                        <>
                            <Titulo>
                                {resultados.length}
                                {tipo === 'Comissões' ? ' Colegiado(s) em Atividade' : ' Atualizações nos Últimos 30 Dias'}
                            </Titulo>
                            {resultados.map((resultado, index) => (
                                <CardConteudos
                                    key={index}
                                    ir='votacoes'
                                    tipo={tipo}
                                    pagina={tipo === 'Comissões' ? `comissao` : `materia`} 
                                    id={resultado.id}
                                    titulo={resultado.nome}
                                    partido={tipo === 'Comissões' ? `Data de Início: ${resultado.data}` : `Data da Última Atualização: ${resultado.data}`} />
                            ))}
                        </>
                    )
                )
            )}
        </>
    )
}

export default ResultadosSens;
