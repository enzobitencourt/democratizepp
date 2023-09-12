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

import { CheckIcon, CloseIcon, EditIcon, ViewIcon, ViewOffIcon} from "@chakra-ui/icons"
import FotoLogin from "../../components/FotoLogin/FotoLogin"
import { useState } from "react"

function Perfil() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('teste'); // Use um estado para armazenar a senha
    const [icon, setIcon] = useState(<ViewIcon />);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
        // Alterne o ícone do botão com base no estado showPassword
        setIcon(showPassword ? <ViewIcon /> : <ViewOffIcon />);
      };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
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
            <Container>
                <Header>
                    <VoltarBlack />
                    <InfPerfil>
                        <FotoLogin src={Foto} />
                        <div>
                            <Nome>Gisele Allencar</Nome>
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
                                defaultValue='Gisele Allencar'
                                fontSize='1.5x2'
                                gap='2vw'
                                isPreviewFocusable={false}
                            >
                                <EditablePreview />
                                {/* Here is the custom input */}
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
                                defaultValue='galencar@teste.com'
                                blur='2px'
                                fontSize='1.5x2'
                                gap='2vw'
                                isPreviewFocusable={false}
                            >
                                <EditablePreview />
                                {/* Here is the custom input */}
                                <Input h='auto' as={EditableInput} />
                                <EditableControls />
                            </Editable>
                        </InfEspecific>


                        {/* Seção de edição de senha */}
                        <InfEspecific>
                            <TipoInf>Senha</TipoInf>
                            <Editable
                                display='flex'
                                flexDirection='row'
                                alignItems='center'
                                textAlign='left'
                                width='70vw'
                                defaultValue={password} // Use o estado para defaultValue
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



                        <InfEspecific>
                            <TipoInf>Número de telefone</TipoInf>
                            <Editable
                                display='flex'
                                flexDirection='row'
                                alignItems='center'
                                textAlign='left'
                                type='password'
                                width='70vw'
                                defaultValue='(51) 99999-9999'
                                fontSize='1.5x2'
                                gap='2vw'
                                isPreviewFocusable={false}
                            >
                                <EditablePreview />
                                {/* Here is the custom input */}
                                <Input h='auto' type='tel' as={EditableInput} />
                                <EditableControls />
                            </Editable>
                        </InfEspecific>
                    </Informacoes>
                </EditDiv>
                <Menu barra="4" />
            </Container>
        </>
    )
}

export default Perfil