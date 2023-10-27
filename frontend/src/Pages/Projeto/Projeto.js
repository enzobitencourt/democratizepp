import Object from "../../Cards/ObjectCarousel/Object"
import Menu from "../../components/Menu/Menu"
import { Barra, Container, GeneralContent, Resumo, Subtitulo, Titulo, Titulos } from "./styled"
import imagem from '../../Assets/projeto.png'

function Projeto() {
    return (
        <>
            <Container>
                <GeneralContent>
                    <Titulos>
                        <Titulo>Projeto de Pesquisa</Titulo>
                        <Subtitulo><b>Democratize</b>: ferramenta digital para fomento a (in)formação política e cidadã</Subtitulo>
                        <Barra />
                    </Titulos>

                    <Resumo>
                        <b>Resumo:</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Resumo>
                </GeneralContent>
                <Object link="https://drive.google.com/file/d/171qFNydQt4QoJPE93h8PLc8rl6LOdzbp/view?usp=sharing" imagem={imagem} texto="Acesse a pesquisa completa em PDF" />
                <Menu barra='3' />
            </Container>
        </>
    )
}

export default Projeto