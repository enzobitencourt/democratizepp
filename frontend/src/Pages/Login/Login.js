import { Abaixo, Acessar, Botao, Container, DivSenha, Fundo, Gradiente, Header, Input, InputSenha, LinksAlternativos, Main } from "./styled"
import Voltar from "../../components/SimboloVoltar/Voltar"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { baseUrl } from "../../services/api"
import axios from "axios"
import { useToast } from "@chakra-ui/react"

function Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        senha: ""
    });
    const toast = useToast()

    const goToCadastro = () => {
        navigate('/cadastro')
    }

    const goToHome = () => {
        navigate('/home')
    }

    const [showPassword, setShowPassword] = useState(false);
    const [icon, setIcon] = useState(<ViewIcon />);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
        setIcon(showPassword ? <ViewIcon /> : <ViewOffIcon />);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${baseUrl}/auth/login`, formData)
            .then(function (response) {
                console.log(response)
                localStorage.setItem('id', response.data.data[0].id)
                localStorage.setItem('token', response.data.token)
                toast({
                    position: 'top-left',
                    title: 'Sucesso',
                    description: "Conta logada",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                goToHome()
            })
            .catch(function (error) {
                console.log(error)
                toast({
                    position: 'bottom-left',
                    title: 'Erro',
                    description: `${error.response.data.message}`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            });

        setFormData({
            email: "",
            senha: "",
        })
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
                                type="email"
                                id="user"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required />
                            <DivSenha>
                                <InputSenha
                                    type={showPassword ? 'text' : 'password'}
                                    id='password'
                                    name="senha"
                                    placeholder='Senha'
                                    value={formData.senha}
                                    onChange={handleChange}
                                    required

                                />
                                <Botao onClick={handleShowPassword}>
                                    {icon}
                                </Botao>
                            </DivSenha>
                            <Acessar type="submit">Entrar</Acessar>
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