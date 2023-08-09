import Menu from "../../components/Menu/Menu"
import { Cidadao, Container, FotoLogin, Header, Nome, NomeContainer } from "./styled"
import Foto from "../../Assets/FotoLogin.png"
import ConfigDrop from "../../components/ConfigDropDown/Dropdown"

function Configuracoes(){
    return(
        <>
        <Container>
            <Header>
                <FotoLogin src={Foto}/>
                <NomeContainer>
                    <Nome>Gisele Allencar</Nome>
                    <Cidadao>Cidadã(o) Brasileiro(a)</Cidadao>
                </NomeContainer>
            </Header>
            <Menu/>
        </Container>
        </>
    )
}

export default Configuracoes