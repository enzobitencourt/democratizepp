import React, { useState, useEffect } from "react";
import CardEleito from "../../../Cards/CardEleito/CardEleito";
import axios from "axios";
import Carregando from "../../../components/Carregando/Carregando";
import { Container, Conteudo, Texto } from './styled';

function FiltroEleitos(props) {
    const { tipo, partido, nome, ufs } = props;
    const [representantes, setRepresentantes] = useState([]);
    const [loading, setLoading] = useState(props.loading)

    useEffect(() => {
        if (tipo === "Deputado Federal") {
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
        }

    });


    return (
        <>
            {loading ? (
                <Carregando loading={loading} />
            ) : (
                representantes.length === 0 ? (
                    <Container>
                        <Conteudo>
                            <Texto>Nenhum candidato encontrado. Pesquise novamente!</Texto>
                        </Conteudo>
                    </Container>
                ) : (
                    representantes.map((representante, index) => (
                        <CardEleito
                            nome={representante.nome}
                            cargo={tipo}
                            uf={representante.uf}
                            partido={representante.partido}
                            imagem={representante.imagem}
                            key={index}
                        />
                    ))
                )
            )}
        </>
    );
}

export default FiltroEleitos;
