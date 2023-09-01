import { useNavigate } from "react-router-dom"
import { Container, Nome, TituloContainer, Texto, PerfilContainer, Perfil } from "./styled"

function Header(){
    const navigate = useNavigate()

    const goToOnde = ()=>{
        navigate('/login')
    }
    return(
        <>
        <Container>
            <TituloContainer>
                <Texto>Olá,</Texto>
                <Nome>Cidadão</Nome>
            </TituloContainer>
            <PerfilContainer>
                <Perfil onClick={goToOnde}/>
            </PerfilContainer>
        </Container>
        </>
    )
}

export default Header