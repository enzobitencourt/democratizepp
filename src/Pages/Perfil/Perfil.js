import Menu from "../../components/Menu/Menu"
import VoltarBlack from "../../components/SimboloVoltarBlack/VoltarBlack"
import { Header, FotoLogin, DivComplemento, EditDiv, EditTexto, Container, InfPerfil, Nome, Cidadao } from "./styled"
import Foto from "../../Assets/FotoLogin.png"

function Perfil() {
    return (
        <>
            <Container>
                <Header>
                    <VoltarBlack />
                    <InfPerfil>
                        <FotoLogin src={Foto} />
                        <div>
                            <Nome>Gisele Allencar</Nome>
                            <Cidadao>Cidadã(o) Brasileiro(a)</Cidadao>
                        </div>
                    </InfPerfil>
                    <DivComplemento />
                </Header>
                <EditDiv>
                    <EditTexto>Editar perfil</EditTexto>
                </EditDiv>
                <Menu barra="4" />
            </Container>
        </>
    )
}

export default Perfil