import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardPoliticoConteudo from "../../Cards/CardPoliticoConteudo/CardPoliticoConteudo";
import HeadersConteud from "../../components/HeadersConteud/HeadersConteud";
import InputComponent from "../../components/InputComponent/InputComponent";
import Menu from "../../components/Menu/Menu";
import { Container, DivConteudo, Infos, Participantes, Pesquisa, TextInfos } from "./styled";
import dep from "../../Assets/foto_dep_fav.jpeg";
import { useParams } from "react-router-dom";
import { useTipo } from "../../Contexts/TipoContext";

function FrenteComs() {
    const [keyword, setKeyword] = useState([]);
    const [nome, setNome] = useState('');
    const params = useParams();
    const { tipo } = useTipo();
    const [resultado, setResultado] = useState();
    const [espaco, setEspaco] = useState()

    console.log(params)
    console.log(tipo)

    function formatarData(data) {
        const dataObj = new Date(data);

        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); // Os meses são baseados em zero
        const ano = dataObj.getFullYear();

        return `${dia}/${mes}/${ano}`;
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
                    const frente = response.data;
                    setResultado(frente);
                    console.log(resultado)
                })
                .catch((error) => {
                    console.log('Erro na API:', error);
                });
        }
    }, [tipo, params.id, resultado]);

    const keywords = (checkboxes) => {
        setKeyword(checkboxes);
        console.log('Keywords:', checkboxes);
        console.log(keyword);
    };

    const nomeCandidato = (nomes) => {
        setNome(nomes);
        console.log('Nome do candidato:', nomes);
        console.log(nome);
    };


    return (
        <>
            {resultado ? (
                <Container>
                    <HeadersConteud
                        titulo={resultado.nome}
                        subtitulo={espaco} />

                    <DivConteudo>
                        <Infos>
                            <TextInfos><b>Criação: </b> {resultado.data}</TextInfos>
                            <TextInfos><b>Tipo: </b> {resultado.descricaoTipo} </TextInfos>
                            <TextInfos><b>Casa: </b> {resultado.casa} </TextInfos>
                            <TextInfos><b>Finalidade: </b> {resultado.finalidade} </TextInfos>
                        </Infos>
                    </DivConteudo>
                    <Pesquisa>
                        <Participantes>Quem participa dessa frente?</Participantes>
                        <InputComponent submitKeywords={keywords} submitNome={nomeCandidato} />
                        <CardPoliticoConteudo nome='Afonso Motta' cor='black' imagem={dep} status='Membro' />
                    </Pesquisa>
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
