import Menu from "../../components/Menu/Menu"
import VoltarBlack from "../../components/SimboloVoltarBlack/VoltarBlack"
import { Header, DivComplemento, EditDiv, EditTexto, Container, InfPerfil, Nome, Cidadao, Informacoes, InfEspecific, TipoInf, Botao } from "./styled"
import Foto from "../../Assets/FotoLogin.png"
import {
    Editable,
    EditableInput,
    EditablePreview,
    Input,
    useEditableControls,
    ButtonGroup,
    Flex,
    IconButton,
} from '@chakra-ui/react'

import { CheckIcon, CloseIcon, EditIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import FotoLogin from "../../components/FotoLogin/FotoLogin"
import { useState, useEffect } from "react"
import axios from "axios"
import { baseUrl } from "../../services/api"

function Perfil() {
    const [showPassword, setShowPassword] = useState(false);
    const [icon, setIcon] = useState(<ViewIcon />);
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
                    console.log(error)
                });
        }
    })

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
        setIcon(showPassword ? <ViewIcon /> : <ViewOffIcon />);
    };

    const handlePasswordChange = (e) => {
        console.log("senha editada")
    };

    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <ButtonGroup justifyContent='center' size='sm'>
                <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
                <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='center'>
                <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
            </Flex>
        )
    }

    return (
        <>
            {user ? (
                <Container>
                    <Header>
                        <VoltarBlack />
                        <InfPerfil>
                            <FotoLogin src={Foto} />
                            <div>
                                <Nome>{user.nome}</Nome>
                                <Cidadao>Cidadã(o) Brasileiro(a)</Cidadao>
                            </div>
                        </InfPerfil>
                        <DivComplemento />
                    </Header>
                    <EditDiv>
                        <EditTexto>Editar perfil</EditTexto>
                        <Informacoes>
                            <InfEspecific>
                                <TipoInf>Nome de usuário</TipoInf>
                                <Editable
                                    display='flex'
                                    flexDirection='row'
                                    alignItems='center'
                                    textAlign='left'
                                    width='70vw'
                                    defaultValue={user.nome}
                                    fontSize='1.5x2'
                                    gap='2vw'
                                    isPreviewFocusable={false}
                                >
                                    <EditablePreview />
                                    <Input h='auto' as={EditableInput} />
                                    <EditableControls />
                                </Editable>
                            </InfEspecific>

                            <InfEspecific>
                                <TipoInf>Email</TipoInf>
                                <Editable
                                    display='flex'
                                    flexDirection='row'
                                    alignItems='center'
                                    textAlign='left'
                                    width='70vw'
                                    defaultValue={user.email}
                                    blur='2px'
                                    fontSize='1.5x2'
                                    gap='2vw'
                                    isPreviewFocusable={false}
                                >
                                    <EditablePreview />
                                    <Input h='auto' as={EditableInput} />
                                    <EditableControls />
                                </Editable>
                            </InfEspecific>

                            <InfEspecific>
                                <TipoInf>Senha</TipoInf>
                                <Editable
                                    display='flex'
                                    flexDirection='row'
                                    alignItems='center'
                                    textAlign='left'
                                    width='70vw'
                                    defaultValue={user.senha}
                                    fontSize='1.5x2'
                                    gap='2vw'
                                    isPreviewFocusable={false}
                                >
                                    <EditablePreview
                                        style={{ filter: showPassword ? 'none' : 'blur(5px)' }}
                                    />
                                    <Input
                                        h='auto'
                                        type={showPassword ? 'text' : 'password'}
                                        as={EditableInput}
                                        value='password'
                                        onChange={handlePasswordChange}
                                    />
                                    <Botao onClick={handleShowPassword}>
                                        {icon}
                                    </Botao>
                                    <EditableControls />
                                </Editable>
                            </InfEspecific>
                        </Informacoes>
                    </EditDiv>
                    <Menu barra="4" />
                </Container>
            ) : (
                <></>
            )}
        </>
    )
}

export default Perfil