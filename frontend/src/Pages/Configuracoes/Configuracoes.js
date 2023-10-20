import Menu from "../../components/Menu/Menu"
import { Cidadao, Container, FotoLogin, Header, Nome, NomeContainer } from "./styled"
import Foto from "../../Assets/login.png"
import ConfigDrop from "../../components/ConfigDropDown/Dropdown"
import axios from "axios"
import { useEffect, useState } from "react"
import { baseUrl } from "../../services/api"

function Configuracoes() {
    const id = localStorage.getItem("id")
    const [user, setUser] = useState()
    const formData = {
        id: id
    }

    useEffect(() => {
        if (id) {
            axios.post(`${baseUrl}/find/findUser`, formData)
                .then(function (response) {
                    setUser(response.data.data)
                })
                .catch(function (error) {
                    alert(error.response.data.msg)
                });
        }
    })

    return (
        <>
            {user ? (
                <Container>
                    <Header>
                        <FotoLogin src={Foto} />
                        <NomeContainer>
                            <Nome>{user.nome}</Nome>
                            <Cidadao>Cidadã(o) Brasileiro(a)</Cidadao>
                        </NomeContainer>
                    </Header>
                    <ConfigDrop />
                    <Menu barra='4' />
                </Container>
            ) : (
                <></>
            )}
        </>
    )
}

export default Configuracoes