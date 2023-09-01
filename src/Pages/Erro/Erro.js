import { Confirmacao, Container, Fundo, Gradiente, Header,  Main, Mensagem} from "./styled"
import Voltar from "../../components/SimboloVoltar/Voltar"

function Erro(){
    return(
        <>
        <Fundo>
            <Gradiente>
                <Header>
                    <Voltar/>
                </Header>
                <Main>
                    <Container>
                        <Confirmacao>Erro de acesso</Confirmacao>
                        <Mensagem>Essa página não existe, <br/> volte à plataforma!</Mensagem>
                    </Container>
                </Main>
            </Gradiente>
        </Fundo>
        </>
    )
}

export default Erro