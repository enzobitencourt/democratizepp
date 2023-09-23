import { Abaixo, Acessar, Botao, Container, DivSenha, Fundo, Gradiente, Header, Input, InputSenha, LinksAlternativos, Main } from "./styled"
import Voltar from "../../components/SimboloVoltar/Voltar"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

function Login() {
    const navigate = useNavigate()

    const goToCadastro = () => {
        navigate('/cadastro')
    }

    const [showPassword, setShowPassword] = useState(false);
    const [icon, setIcon] = useState(<ViewIcon />);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
        // Alterne o ícone do botão com base no estado showPassword
        setIcon(showPassword ? <ViewIcon /> : <ViewOffIcon />);
      };

    return (
        <>
            <Fundo>
                <Gradiente>
                    <Header>
                        <Voltar />
                    </Header>
                    <Main>
                        <Container>
                            <Input type="email" id="user" placeholder="Email" />
                            <DivSenha>
                                <InputSenha
                                    type={showPassword ? 'text' : 'password'}
                                    id='password'
                                    placeholder='Senha'
                                />
                                <Botao onClick={handleShowPassword}>
                                    {icon}
                                </Botao>
                            </DivSenha>
                            <Acessar>Entrar</Acessar>
                            <Abaixo>
                                <LinksAlternativos>Esqueci a senha</LinksAlternativos>
                                <LinksAlternativos onClick={goToCadastro}>Não possui cadastro? <b>Cadastre-se</b></LinksAlternativos>
                            </Abaixo>
                        </Container>
                    </Main>
                </Gradiente>
            </Fundo>
        </>
    )
}

export default Login