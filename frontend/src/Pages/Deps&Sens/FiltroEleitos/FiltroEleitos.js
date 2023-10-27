import React, { useState, useEffect } from "react";
import CardEleito from "../../../Cards/CardEleito/CardEleito";
import axios from "axios";
import Carregando from "../../../components/Carregando/Carregando";
import { Container, Conteudo, Texto } from './styled';
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, useDisclosure } from '@chakra-ui/react'
import { Titulo } from "../styled";

function FiltroEleitos(props) {
    const { tipo, partido, nome, ufs } = props;
    const [representantes, setRepresentantes] = useState([]);
    const [loading, setLoading] = useState(props.loading)
    const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: false })

    useEffect(() => {
        if (tipo === "Deputado Federal") {
            setLoading(true)
            setRepresentantes([])
            onClose()
            axios
                .get(
                    "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome"
                )
                .then((response) => {
                    const deputados = response.data.dados.map((representante) => ({
                        id: representante.id,
                        nome: representante.nome,
                        partido: representante.siglaPartido,
                        uf: representante.siglaUf,
                        imagem: representante.urlFoto,
                        url: `https://www.camara.leg.br/deputados/${representante.id}`,
                    }));

                    const filteredRepresentantes = deputados.filter((representante) => (
                        (!ufs.length || ufs.includes(representante.uf)) &&
                        (!partido || partido === representante.partido) &&
                        (!nome || representante.nome.includes(nome))
                    ));

                    setRepresentantes(filteredRepresentantes);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log("Erro na API:", error);
                    setLoading(false);
                });
        } else if (tipo === "Senador") {
            setLoading(true)
            onClose()
            setRepresentantes([])
            axios
                .get("https://legis.senado.leg.br/dadosabertos/senador/lista/atual")
                .then((response) => {
                    const parlamentares = response.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar;
                    const deputados = parlamentares.map((parlamentar) => ({
                        id: parlamentar.IdentificacaoParlamentar.CodigoParlamentar,
                        nome: parlamentar.IdentificacaoParlamentar.NomeParlamentar,
                        partido: parlamentar.IdentificacaoParlamentar.SiglaPartidoParlamentar,
                        uf: parlamentar.IdentificacaoParlamentar.UfParlamentar,
                        imagem: parlamentar.IdentificacaoParlamentar.UrlFotoParlamentar,
                        url: parlamentar.IdentificacaoParlamentar.UrlPaginaParlamentar,
                    }));

                    const filteredRepresentantes = deputados.filter((representante) => (
                        (!ufs.length || ufs.includes(representante.uf)) &&
                        (!partido || partido === representante.partido) &&
                        (!nome || representante.nome.includes(nome))
                    ));

                    setRepresentantes(filteredRepresentantes);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log("Erro na API:", error);
                    setLoading(false);
                });
        } else {
            onOpen()
        }

    }, [setRepresentantes, nome, onClose, onOpen, partido, tipo, ufs]);


    return (
        <>
            {isVisible ? (
                <Alert borderRadius='20px' status='error'>
                    <AlertIcon />
                    <Box paddingRight='1vw'>
                        <AlertTitle>Erro!</AlertTitle>
                        <AlertDescription>
                            Efetue a pesquisa novamente e escolha uma opção de cargo para conhecer seus representantes...
                        </AlertDescription>
                    </Box>
                </Alert>
            ) : (
                loading ? (
                    <Carregando loading={loading} />
                ) : (
                    representantes.length === 0 ? (
                        <Container>
                            <Conteudo>
                                <Texto>Nenhum candidato encontrado. Pesquise novamente!</Texto>
                            </Conteudo>
                        </Container>
                    ) : (
                        <>
                            <Titulo>{representantes.length} {tipo === "Deputado Federal" ? "Deputado(s)" : "Senador(es)"}</Titulo>
                            {representantes.map((representante, index) => (
                                <CardEleito
                                    favoritos={props.favoritos}
                                    id={representante.id}
                                    nome={representante.nome}
                                    cargo={tipo}
                                    uf={representante.uf}
                                    partido={representante.partido}
                                    imagem={representante.imagem}
                                    key={index}
                                    url={representante.url}
                                />
                            ))}
                        </>
                    )
                )
            )}
        </>
    );

}

export default FiltroEleitos;
