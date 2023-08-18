import { Acessar, Container, DivSenhas, Fundo, Gradiente, Header, Input,  Input2,  Main} from "./styled"
import Voltar from "../../components/SimboloVoltar/Voltar"

function Cadastro(){
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