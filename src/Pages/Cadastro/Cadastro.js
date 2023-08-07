import { Acessar, Container, DivSenhas, Fundo, Gradiente, Header, Input,  Input2,  Main, SimboloVolt, Volt } from "./styled"
import VoltSimbol from "../../Assets/SimboloVoltEntrada.png"

function Cadastro(){
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
                        <Input type="email" id="password" placeholder="Email"/>
                        <Input type="tel" id="password" placeholder="Telefone"/>
                        <DivSenhas>
                            <Input2 type="password" id="password" placeholder="Senha"/>
                            <Input2 type="password" id="password" placeholder="Confirmar Senha"/>
                        </DivSenhas>
                        <Acessar>Cadastrar-se</Acessar>
                    </Container>
                </Main>
            </Gradiente>
        </Fundo>
        </>
    )
}

export default Cadastro