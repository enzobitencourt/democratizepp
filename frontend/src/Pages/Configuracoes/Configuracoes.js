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

    function conversor(byteArray) {
        const uint8Array = new Uint8Array(byteArray);

        let base64String = '';
        for (let i = 0; i < uint8Array.length; i++) {
            base64String += String.fromCharCode(uint8Array[i]);
        }

        return base64String;

    }
    

    return (
        <>
            {user ? (
                <Container>
                    <Header>
                        <FotoLogin src={user.imagem ? `data:image/jpeg;base64,${conversor(user.imagem.data)}` : Foto} />
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