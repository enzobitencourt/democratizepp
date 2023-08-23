import VoltarBlack from "../SimboloVoltarBlack/VoltarBlack"
import { Container, Subtitulo, TituloContainer, Titulo, BigContainer, Situacao } from "./styled"

function HeadersConteud(props) {
    return (
        <>
            <BigContainer>
                <Container>
                    <VoltarBlack />
                    <TituloContainer>
                        <Titulo>{props.titulo}</Titulo>
                        <Subtitulo>{props.subtitulo}</Subtitulo>
                    </TituloContainer>
                </Container>
                <Situacao>Tramitando</Situacao>
            </BigContainer>
        </>
    )
}

export default HeadersConteud