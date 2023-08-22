import CardPoliticoConteudo from "../../Cards/CardPoliticoConteudo/CardPoliticoConteudo"
import HeadersConteud from "../../components/HeadersConteud/HeadersConteud"
import InputComponent from "../../components/InputComponent/InputComponent"
import Menu from "../../components/Menu/Menu"
import { Container, DivConteudo, Infos, LinkAutor, Participantes, Pesquisa, Situacao, TextInfos } from "./styled"

function FrenteComs() {
    return (
        <>
            <Container>
                <HeadersConteud
                    titulo="Frente Parlamentar em defesa dos direitos da mulher"
                    subtitulo="Agora na Câmara" />

                <DivConteudo>
                    <Situacao>Tramitando</Situacao>
                    <Infos>
                        <TextInfos><b>Criação: </b> 18/03/2019</TextInfos>
                        <TextInfos><b>Partido: </b> PP</TextInfos>
                        <TextInfos><b>Autor: </b> <LinkAutor>Margarete Coelho (PI)</LinkAutor> </TextInfos>
                    </Infos>
                </DivConteudo>
                <Pesquisa>
                    <Participantes>Quem participa dessa frente?</Participantes>
                    <InputComponent />
                    <CardPoliticoConteudo/>
                </Pesquisa>
                <Menu />
            </Container>
        </>
    )
}

export default FrenteComs