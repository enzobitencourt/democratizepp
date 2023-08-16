import { Container, Subtitulo, TituloContainer, Titulo} from "./styled"

function Headers(props){
    return(
        <>
        <Container>
            <TituloContainer>
                <Titulo>{props.titulo}</Titulo>
                <Subtitulo>{props.subtitulo}</Subtitulo>
            </TituloContainer>
        </Container>
        </>
    )
}

export default Headers