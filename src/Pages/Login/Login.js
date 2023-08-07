import { Abaixo, Acessar, Container, Fundo, Gradiente, Header, Input, LinksAlternativos, Main, SimboloVolt, Volt } from "./styled"
import VoltSimbol from "../../Assets/SimboloVoltEntrada.png"

function Login(){
    return(
        <>
        <Fundo>
            <Gradiente>
                <Header>
                    <Volt>
                        <SimboloVolt src={VoltSimbol}/>
                    </Volt>
                </Header>
                <Main>
                    <Container>
                        <Input type="text" id="user" placeholder="Usuário"/>
                        <Input type="password" id="password" placeholder="Senha"/>
                        <Acessar>Entrar</Acessar>
                        <Abaixo>
                            <LinksAlternativos>Esqueci a senha</LinksAlternativos>
                            <LinksAlternativos>Não possui cadastro? Cadastre-se</LinksAlternativos>
                        </Abaixo>
                    </Container>
                </Main>
            </Gradiente>
        </Fundo>
        </>
    )
}

export default Login