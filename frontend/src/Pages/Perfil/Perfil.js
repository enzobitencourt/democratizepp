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

    const [formUser, setFormUser] = useState({
        nome: "",
        email: "",
        senha: "",
        imagem: ""
    });

    useEffect(() => {
        if (id) {
            const formData = {
                id: id
            };

            axios.post(`${baseUrl}/find/findUser`, formData)
                .then(function (response) {
                    setUser(response.data.data);
                    setFormUser({
                        nome: response.data.data.nome,
                        email: response.data.data.email,
                        senha: response.data.data.senha,
                        imagem: response.data.data.imagem,
                    });
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormUser({
            ...formUser,
            [name]: value
        });
    };

    const handleSave = () => {
        const updatedFormData = {
            id: id,
            nome: formUser.nome,
            email: formUser.email,
            senha: formUser.senha,
        };

        console.log(updatedFormData);
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
                    {...getSubmitButtonProps({ onClick: handleSave })}
                />
                <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='center'>
                <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
            </Flex>
        );
    }

    return (
        <>
            {user ? (
                <Container>
                    <Header>
                        <VoltarBlack />
                        <InfPerfil>
                            <FotoLogin sfile={setSelectedFile} file={selectedFile} user={user} />
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
                                    defaultValue={nome}
                                    fontSize='1.5x2'
                                    gap='2vw'
                                    isPreviewFocusable={false}
                                >
                                    <EditablePreview />
                                    <Input h='auto'
                                        as={EditableInput}
                                        name="nome"
                                        value={formUser.nome}
                                        onChange={handleChange}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSave();
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
                                    <Input h='auto'
                                        as={EditableInput}
                                        name="email"
                                        value={formUser.email}
                                        onChange={handleChange}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSave();
                                            }
                                        }} />
                                    <EditableControls value={email} tipo="email" />
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
                                    defaultValue={senha}
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
                                        value={formUser.senha}
                                        onChange={handleChange}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSave();
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
