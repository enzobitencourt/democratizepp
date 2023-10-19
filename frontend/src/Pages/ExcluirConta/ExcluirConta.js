import { Acessar, Confirmacao, Container, Fundo, Gradiente, Header,  Main} from "./styled"
import Voltar from "../../components/SimboloVoltar/Voltar"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { baseUrl } from "../../services/api"
import { useToast } from "@chakra-ui/react"

function ExcluirConta(){
    const toast = useToast()
    const navigate = useNavigate()

    const id = localStorage.getItem("id")
    const formData = {
        id: id
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`${baseUrl}/user/${formData.id}`, formData)
            .then(function (response) {
                localStorage.removeItem('id')
                localStorage.removeItem('token')
                toast({
                    position: 'top-left',
                    title: 'Sucesso',
                    description: "Conta excluída",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                navigate('/entrada')
            })
            .catch(function (error) {
                console.log(error)
            });
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
                        <Confirmacao>Você tem certeza que deseja excluir sua conta?</Confirmacao>
                        <Acessar onClick={handleSubmit}>Excluir</Acessar>
                    </Container>
                </Main>
            </Gradiente>
        </Fundo>
        </>
    )
}

export default ExcluirConta