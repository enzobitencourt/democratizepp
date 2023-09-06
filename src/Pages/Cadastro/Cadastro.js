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
                        <Input type="email" id="email" placeholder="Email"/>
                        <Input type="tel" id="telefone" placeholder="Telefone"/>
                        <DivSenhas>
                            <Input2 type="password" id="password" placeholder="Senha"/>
                            <Input2 type="password" id="confirmpassword" placeholder="Confirmar"/>
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