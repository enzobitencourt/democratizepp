import CardPoliticoConteudo from "../../Cards/CardPoliticoConteudo/CardPoliticoConteudo"
import HeadersConteud from "../../components/HeadersConteud/HeadersConteud"
import InputComponent from "../../components/InputComponent/InputComponent"
import Menu from "../../components/Menu/Menu"
import { Container, DivConteudo, Infos, LinkAutor, Participantes, Pesquisa, TextInfos } from "./styled"
import dep from "../../Assets/foto_dep_fav.jpeg"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useTipo } from "../../Contexts/TipoContext"

function FrenteComs() {
    const [keyword, setKeyword] = useState([])
    const [nome, setNome] = useState('')
    const params = useParams()
    const { tipo } = useTipo()
    
    console.log(params)
    console.log(tipo)

    const keywords = (checkboxes) => {
        setKeyword(checkboxes)
        console.log('Keywords:', checkboxes)
        console.log(keyword)
    }

    const nomeCandidato = (nomes) => {
        setNome(nomes)
        console.log('Nome do candidato:', nomes)
        console.log(nome)
    }

    return (
        <>
            <Container>
                <HeadersConteud
                    titulo="Frente Parlamentar em defesa dos direitos da mulher"
                    subtitulo="Agora na Câmara" />

                <DivConteudo>
                    <Infos>
                        <TextInfos><b>Criação: </b> 18/03/2019</TextInfos>
                        <TextInfos><b>Partido: </b> PP</TextInfos>
                        <TextInfos><b>Autor: </b> <LinkAutor>Margarete Coelho (PI)</LinkAutor> </TextInfos>
                    </Infos>
                </DivConteudo>
                <Pesquisa>
                    <Participantes>Quem participa dessa frente?</Participantes>
                    <InputComponent submitKeywords={keywords} submitNome={nomeCandidato} />
                    <CardPoliticoConteudo nome='Afonso Motta' cor='black' imagem={dep} status='Membro' />
                </Pesquisa>
                <Menu barra='1' />
            </Container>
        </>
    )
}

export default FrenteComs