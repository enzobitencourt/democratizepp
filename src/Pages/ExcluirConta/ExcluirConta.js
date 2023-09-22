import { Acessar, Confirmacao, Container, Fundo, Gradiente, Header,  Main} from "./styled"
import Voltar from "../../components/SimboloVoltar/Voltar"
import { useNavigate } from "react-router-dom"

function ExcluirConta(){
    const navigate = useNavigate()

    const goToEntrada = ()=>{
        navigate('/entrada')
    }

    return(
        <>
        <Fundo>
            <Gradiente>
                <Header>
                    <Voltar/>
                </Header>
                <Main>
                    <Container>
                        <Confirmacao>Você tem certeza que deseja excluir sua conta?</Confirmacao>
                        <Acessar onClick={goToEntrada}>Excluir</Acessar>
                    </Container>
                </Main>
            </Gradiente>
        </Fundo>
        </>
    )
}

export default ExcluirConta