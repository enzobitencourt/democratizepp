import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeadersConteud from "../../components/HeadersConteud/HeadersConteud";
import InputComponent from "../../components/InputComponent/InputComponent";
import Menu from "../../components/Menu/Menu";
import { Container, ContainerResultados, DivConteudo, Infos, Linkar, Participantes, Pesquisa, TextInfos } from "./styled";
import { useParams } from "react-router-dom";
import { useTipo } from "../../Contexts/TipoContext/TipoContext";
import ResultadoPartic from './ResultadoPartic/ResultadoPartic';

function FrenteComs() {
    const [keyword, setKeyword] = useState([]);
    const [nome, setNome] = useState('');
    const params = useParams();
    const { tipo } = useTipo();
    const [resultado, setResultado] = useState();
    const [espaco, setEspaco] = useState()

    function formatarData(data) {
        const dataObj = new Date(data);

        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); // Os meses são baseados em zero
        const ano = dataObj.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }

    function formatarDataHora2(dataHoraAPI) {
        const dataHoraObjeto = new Date(dataHoraAPI);
        const dataHoraFormatada = dataHoraObjeto.toLocaleDateString('pt-BR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        });

        return dataHoraFormatada;
    }

    useEffect(() => {
        if (tipo === 'Comissões') {
            setEspaco('Agora no Senado')
            axios.get('https://legis.senado.leg.br/dadosabertos/comissao/lista/colegiados')
                .then((response) => {
                    const colegiadosData = response.data.ListaColegiados.Colegiados.Colegiado;
                    const colegiadoFiltrado = colegiadosData.find((colegio) => colegio.Codigo === params.id);

                    if (colegiadoFiltrado) {
                        if (colegiadoFiltrado.SiglaCasa === 'SF') {
                            colegiadoFiltrado.SiglaCasa = 'Senado Federal';
                        } else if (colegiadoFiltrado.SiglaCasa === 'CN') {
                            colegiadoFiltrado.SiglaCasa = 'Congresso Nacional';
                        } else if (colegiadoFiltrado.SiglaCasa === 'CD') {
                            colegiadoFiltrado.SiglaCasa = 'Câmara dos Deputados';
                        }

                        const colegiadoData = {
                            id: colegiadoFiltrado.Codigo,
                            nome: colegiadoFiltrado.Nome,
                            finalidade: colegiadoFiltrado.Finalidade,
                            data: formatarData(colegiadoFiltrado.DataInicio),
                            casa: colegiadoFiltrado.SiglaCasa,
                            classificacao: colegiadoFiltrado.SiglaTipoColegiado,
                            descricaoTipo: colegiadoFiltrado.DescricaoTipoColegiado,
                        };

                        setResultado(colegiadoData);

                    } else {
                        setResultado(null);
                    }
                })
                .catch((error) => {
                    console.log('Erro na API:', error);
                });
        } else if (tipo === "Frentes") {
            setEspaco("Agora na Câmara");
            axios
                .get(`https://dadosabertos.camara.leg.br/api/v2/frentes/${params.id}`)
                .then((response) => {
                    const frente = response.data.dados;
                    setResultado(frente);
                })
                .catch((error) => {
                    console.log('Erro na API:', error);
                });
        } else if (tipo === "Eventos") {
            setEspaco("Agora na Câmara");
            axios
                .get(`https://dadosabertos.camara.leg.br/api/v2/eventos/${params.id}`)
                .then((response) => {
                    const evento = response.data.dados;
                    setResultado(evento);
                })
                .catch((error) => {
                    console.log('Erro na API:', error);
                });
        }
    }, [tipo, params.id, resultado]);

    const keywords = (checkboxes) => {
        setKeyword(checkboxes);
    };

    const nomeCandidato = (nomes) => {
        setNome(nomes);
    };


    return (
        <>
            {resultado ? (
                <Container>
                    {tipo === "Comissões" ? (
                        <HeadersConteud
                            titulo={resultado.nome}
                            subtitulo={espaco}
                            situacao="Tramitando" />
                    ) : tipo === "Frentes" ? (
                        <HeadersConteud
                            titulo={resultado.titulo}
                            subtitulo={espaco}
                            situacao="Tramitando" />
                    ) : (
                        <HeadersConteud
                            titulo={resultado.orgaos[0].nome}
                            subtitulo={espaco}
                            situacao={resultado.situacao} />
                    )}

                    <DivConteudo>
                        <Infos>
                            {tipo === 'Comissões' ? (
                                <>
                                    <TextInfos><b>Criação: </b> {resultado.data}</TextInfos>
                                    <TextInfos><b>Tipo: </b> {resultado.descricaoTipo} </TextInfos>
                                    <TextInfos><b>Casa: </b> {resultado.casa} </TextInfos>
                                    <TextInfos><b>Finalidade: </b> {resultado.finalidade} </TextInfos>
                                </>
                            ) : tipo === 'Frentes' ? (
                                <>
                                    <TextInfos><b>Autor: </b> <Linkar target="_blank" rel="noreferrer" href={`https://www.camara.leg.br/deputados/${resultado.coordenador.id}`}>{resultado.coordenador.nome}</Linkar></TextInfos>
                                    <TextInfos><b>Partido: </b> {resultado.coordenador.siglaPartido} - {resultado.coordenador.siglaUf} </TextInfos>
                                    <TextInfos><b>Email: </b> {resultado.email} </TextInfos>
                                    <TextInfos><b>Situação: </b> {resultado.situacao} </TextInfos>
                                </>
                            ) : (
                                <>
                                    <TextInfos><b>Data: </b> {formatarDataHora2(resultado.dataHoraInicio)}</TextInfos>
                                    <TextInfos><b>Tipo: </b> {resultado.descricaoTipo} - {resultado.orgaos[0].tipoOrgao}</TextInfos>
                                    <TextInfos><b>Descrição: </b> {resultado.descricao}</TextInfos>
                                </>
                            )}
                        </Infos>
                    </DivConteudo>
                    <Pesquisa>
                        <Participantes>
                            {tipo === "Frentes" ? 
                            "Quem participa dessa frente?" 
                            : tipo === "Comissões" ?
                            "Quem participa dessa comissão?"
                            : "Quem participa desse evento?"
                            }
                        </Participantes>
                        <InputComponent tipo={tipo} submitKeywords={keywords} submitNome={nomeCandidato} />
                    </Pesquisa>
                    <ContainerResultados>
                        <ResultadoPartic tipo={tipo} id={params.id} nome={nome} ufs={keyword} />
                    </ContainerResultados>
                    <Menu barra='1' />
                </Container>
            ) :
                (<>
                </>
                )}
        </>
    )
}

export default FrenteComs;
