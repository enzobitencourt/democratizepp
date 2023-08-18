import { Abaixo, Acessar, Container, Fundo, Gradiente, Header, Input, LinksAlternativos, Main } from "./styled"
import Voltar from "../../components/SimboloVoltar/Voltar"
import { useNavigate } from "react-router-dom"

function Login(){
    const navigate = useNavigate()

    const goToCadastro = () =>{
        navigate('/cadastro')
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
                        <Input type="text" id="user" placeholder="Usuário"/>
                        <Input type="password" id="password" placeholder="Senha"/>
                        <Acessar>Entrar</Acessar>
                        <Abaixo>
                            <LinksAlternativos>Esqueci a senha</LinksAlternativos>
                            <LinksAlternativos onClick={goToCadastro}>Não possui cadastro? Cadastre-se</LinksAlternativos>
                        </Abaixo>
                    </Container>
                </Main>
            </Gradiente>
        </Fundo>
        </>
    )
}

export default Login