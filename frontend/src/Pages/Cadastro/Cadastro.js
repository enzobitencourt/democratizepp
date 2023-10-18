import { Acessar, Container, DivSenhas, DivSenha, Botao, InputSenha, Fundo, Gradiente, Header, Input, Main } from "./styled"
import Voltar from "../../components/SimboloVoltar/Voltar"
import { useState } from "react"
import { useToast } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { baseUrl } from "../../services/api"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import fotoLogin from "../../Assets/FotoLogin.png"  

function Cadastro() {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [icon, setIcon] = useState(<ViewIcon />);
    const [iconConfirm, setIconConfirm] = useState(<ViewIcon />);
    const toast = useToast()
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmSenha: ""
    });

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
        setIcon(showPassword ? <ViewIcon /> : <ViewOffIcon />);
    };

    const goToLogin = () => {
        navigate('/login');
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
        setIconConfirm(showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.senha !== formData.confirmSenha) {
            alert("Senhas não coincidem")
        } else {
            const formDataToSubmit = {
                nome: formData.nome,
                email: formData.email,
                senha: formData.senha,
                imagem: fotoLogin
            }

            axios.post(`${baseUrl}/user/create`, formDataToSubmit)
                .then(function (response) {
                    toast({
                        position: 'bottom-left',
                        title: 'Sucesso',
                        description: "Conta criada com sucesso.",
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    });
                    goToLogin()
                })
                .catch(function (error) {
                    toast({
                        position: 'bottom-left',
                        title: 'Erro',
                        description: `${error.response.data.message}`,
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    });
                });

                setFormData({
                    nome: "",
                    email: "",
                    senha: "",
                    confirmSenha: ""
                });
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <>
            <Fundo>
                <Gradiente>
                    <Header>
                        <Voltar />
                    </Header>
                    <Main>
                        <Container onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                id="user"
                                placeholder="Nome de usuário"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required />

                            <Input
                                type="email"
                                id="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required />

                            <DivSenhas>
                                <DivSenha>
                                    <InputSenha
                                        type={showPassword ? 'text' : 'password'}
                                        id='password'
                                        placeholder='Senha'
                                        name="senha"
                                        value={formData.senha}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Botao onClick={handleShowPassword}>
                                        {icon}
                                    </Botao>
                                </DivSenha>
                                <DivSenha>
                                    <InputSenha
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id='confirmPassword'
                                        placeholder='Confirmar'
                                        name="confirmSenha"
                                        value={formData.confirmSenha}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Botao onClick={handleShowConfirmPassword}>
                                        {iconConfirm}
                                    </Botao>
                                </DivSenha>
                            </DivSenhas>
                            <Acessar type='submit'>Cadastrar-se</Acessar>
                        </Container>
                    </Main>
                </Gradiente>
            </Fundo>
        </>
    )
}

export default Cadastro
