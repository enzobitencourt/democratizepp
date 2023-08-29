import Menu from "../../components/Menu/Menu"
import VoltarBlack from "../../components/SimboloVoltarBlack/VoltarBlack"
import { Header, FotoLogin, DivComplemento, EditDiv, EditTexto, Container, InfPerfil, Nome, Cidadao, Informacoes } from "./styled"
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

import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons"

function Perfil() {
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
                        <Editable
                            display='flex'
                            flexDirection='row'
                            alignItems='center'
                            textAlign='left'
                            width='70vw'
                            defaultValue='Rasengan'
                            fontSize='1.5x2'
                            gap='2vw'
                            isPreviewFocusable={false}
                        >
                            <EditablePreview />
                            {/* Here is the custom input */}
                            <Input as={EditableInput} />
                            <EditableControls />
                        </Editable>
                    </Informacoes>
                </EditDiv>
                <Menu barra="4" />
            </Container>
        </>
    )
}

export default Perfil