import { Container, Nome, TituloContainer, Texto, PerfilContainer, Perfil } from "./styled"

function Header(){
    return(
        <>
        <Container>
            <TituloContainer>
                <Texto>Olá,</Texto>
                <Nome>Cidadão</Nome>
            </TituloContainer>
            <PerfilContainer>
                <Perfil/>
            </PerfilContainer>
        </Container>
        </>
    )
}

export default Header