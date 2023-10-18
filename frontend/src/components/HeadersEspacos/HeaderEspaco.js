import VoltarBlack from "../SimboloVoltarBlack/VoltarBlack"
import { Container, Subtitulo, TituloContainer, Titulo} from "./styled"

function HeaderEspaco(props){
    return(
        <>
        <Container>
            <TituloContainer>
                <Titulo>{props.titulo}</Titulo>
                <Subtitulo>{props.subtitulo}</Subtitulo>
            </TituloContainer>
            <VoltarBlack/>
        </Container>
        </>
    )
}

export default HeaderEspaco