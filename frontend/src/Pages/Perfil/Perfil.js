import Menu from "../../components/Menu/Menu";
import VoltarBlack from "../../components/SimboloVoltarBlack/VoltarBlack";
import { Header, DivComplemento, EditDiv, EditTexto, Container, InfPerfil, Nome, Cidadao, Informacoes, InfEspecific, TipoInf, Botao } from "./styled";
import {
    Editable,
    EditableInput,
    EditablePreview,
    Input,
    useEditableControls,
    ButtonGroup,
    Flex,
    IconButton,
    useToast,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EditIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import FotoLogin from "../../components/FotoLogin/FotoLogin";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../services/api";

function Perfil() {
    const [showPassword, setShowPassword] = useState(false);
    const [icon, setIcon] = useState(<ViewIcon />);
    const [senha, setSenha] = useState();
    const [email, setEmail] = useState();
    const [nome, setNome] = useState();
    const id = localStorage.getItem("id");
    const [user, setUser] = useState();
    const [selectedFile, setSelectedFile] = useState(null);
    const toast = useToast()

    useEffect(() => {
        if (id) {
            const formData = {
                id: id
            };

            axios.post(`${baseUrl}/find/findUser`, formData)
                .then(function (response) {
                    setUser(response.data.data);
                    setNome(response.data.data.nome);
                    setEmail(response.data.data.email);
                    setSenha(response.data.data.senha);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [id]);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
        setIcon(showPassword ? <ViewIcon /> : <ViewOffIcon />);
    };

    function EditableControls(props) {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls();

        return isEditing ? (
            <ButtonGroup justifyContent='center' size='sm'>
                <IconButton
                    icon={<CheckIcon />}
                    name={props.tipo}
                    value={props.value}
                    {...getSubmitButtonProps({
                        onClick: () => handleSave(props.tipo, props.value)
                    })}
                />
                <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='center'>
                <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
            </Flex>
        );
    }

    function ArrayBufferToBase64(arrayBuffer) {
        const uint8Array = new Uint8Array(arrayBuffer);
        const binaryString = uint8Array.reduce((data, byte) => data + String.fromCharCode(byte), '');
        return btoa(binaryString);
    }

    const handleSave = (name, value) => {
        const updateUser = {
            [name]: name === "imagem" ? ArrayBufferToBase64(value) : value
        }

        axios.put(`${baseUrl}/user/${id}`, updateUser)
            .then(function (response) {
                toast({
                    position: 'bottom-left',
                    title: 'Sucesso',
                    description: "Perfil alterado com sucesso",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
            })
            .catch(function (error) {
                toast({
                    position: 'bottom-left',
                    title: 'Erro',
                    description: `Perfil não pode ser alterado`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            });
    };


    return (
        <>
            {user ? (
                <Container>
                    <Header>
                        <VoltarBlack />
                        <InfPerfil>
                            <FotoLogin sfile={setSelectedFile} save={handleSave} file={selectedFile} user={user} />
                            <div>
                                <Nome>{nome}</Nome>
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
                                    defaultValue={nome}
                                    fontSize='1.5x2'
                                    gap='2vw'
                                    isPreviewFocusable={false}
                                >
                                    <EditablePreview />
                                    <Input h='auto'
                                        as={EditableInput}
                                        name="nome"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSave("nome", nome);
                                            }
                                        }} />
                                    <EditableControls value={nome} tipo="nome" />
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
                                    defaultValue={email}
                                    blur='2px'
                                    fontSize='1.5x2'
                                    gap='2vw'
                                    isPreviewFocusable={false}
                                >
                                    <EditablePreview />
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
                                    defaultValue="Sem visualização"
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
                                        name="senha"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSave("senha", senha);
                                            }
                                        }} />
                                    <Botao onClick={handleShowPassword}>
                                        {icon}
                                    </Botao>
                                    <EditableControls value={senha} tipo="senha" />
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
    );
}

export default Perfil;
