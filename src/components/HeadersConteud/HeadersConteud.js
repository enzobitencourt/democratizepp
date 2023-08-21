import VoltarBlack from "../SimboloVoltarBlack/VoltarBlack"
import { Container, Subtitulo, TituloContainer, Titulo } from "./styled"

function HeadersConteud(props) {
    return (
        <>
            <Container>
                <VoltarBlack />
                <TituloContainer>
                    <Titulo>{props.titulo}</Titulo>
                    <Subtitulo>{props.subtitulo}</Subtitulo>
                </TituloContainer>
            </Container>
        </>
    )
}

export default HeadersConteud