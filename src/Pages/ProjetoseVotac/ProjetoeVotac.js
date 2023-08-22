import CardPoliticoConteudo from "../../Cards/CardPoliticoConteudo/CardPoliticoConteudo"
import HeadersConteud from "../../components/HeadersConteud/HeadersConteud"
import InputComponent from "../../components/InputComponent/InputComponent"
import Menu from "../../components/Menu/Menu"
import VotacaoDivs from "../../components/VotacaoDiv/VotacaoDiv"
import { Container, DivConteudo, Infos, Participantes, Pesquisa, Situacao, TextInfos } from "./styled"

function ProjetoeVotac() {
    return (
        <>
            <Container>
                <HeadersConteud
                    titulo="PEC 2/2022"
                    subtitulo="Agora no Senado" />

                <DivConteudo>
                    <Situacao>Tramitando</Situacao>
                    <Infos>
                        <TextInfos>Descrição: Altera o art. 144 da Constituição Federal para instituir 
                        garantias para os policiais civis, penais e militares, os bombeiros militares e suas famílias. </TextInfos>
                        <TextInfos>Autores: Fernando Collor (PROS/AL), Zequinha Marinho (PSC/PA)</TextInfos>
                    </Infos>
                </DivConteudo>
                <VotacaoDivs/>
                <Pesquisa>
                    <Participantes>Descubra o voto do seu representante</Participantes>
                    <InputComponent />
                    <CardPoliticoConteudo/>
                </Pesquisa>
                <Menu />
            </Container>
        </>
    )
}

export default ProjetoeVotac