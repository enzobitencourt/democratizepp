import { Acessar, Container, DivSenhas, DivSenha, Botao, InputSenha, Fundo, Gradiente, Header, Input, Main } from "./styled"
import Voltar from "../../components/SimboloVoltar/Voltar"
import { useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

function Cadastro() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [icon, setIcon] = useState(<ViewIcon />);
    const [iconConfirm, setIconConfirm] = useState(<ViewIcon />);
    
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
        // Alterne o ícone do botão com base no estado showPassword
        setIcon(showPassword ? <ViewIcon /> : <ViewOffIcon />);
    };

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
        // Alterne o ícone do botão com base no estado showPassword
        setIconConfirm(showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />);
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
                            <Input type="text" id="user" placeholder="Nome de usuário" />
                            <Input type="email" id="email" placeholder="Email" />
                            <DivSenhas>
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
                                <DivSenha>
                                    <InputSenha
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id='password'
                                        placeholder='Confirmar'
                                    />
                                    <Botao onClick={handleShowConfirmPassword}>
                                        {iconConfirm}
                                    </Botao>
                                </DivSenha>
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