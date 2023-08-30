import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Modal,
    useDisclosure,
    Checkbox
} from '@chakra-ui/react'

import { Direita, Esquerda, Filters, Input, DivInput, Enviar} from './styled'
import { InfoIcon } from '@chakra-ui/icons'

function FilterCandidatos() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <ModalOverlay />
            <ModalContent display='flex' padding='0.5vh 1vh 3vh 1vh' w='83vw' borderRadius='28.4px' background='#FFF' gap='1.5vh' alignItems='center'>
                <ModalHeader fontSize='18px' gap='2vw' display='flex' flexDirection='row' alignItems='center'>
                    <p>Filtre por palavras-chave</p>
                    <InfoIcon onClick={onOpen} color='#1B676B' />
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent w='50vw' padding='23px 0px 22px 7px' borderRadius='18.2px'>
                            Filtre os candidatos conforme palavras-chave nas suas propostas de mandato
                        </ModalContent>
                    </Modal>
                </ModalHeader>
                <Filters>
                    <Direita>
                        <Checkbox colorScheme='green'>Animais</Checkbox>
                        <Checkbox colorScheme='green'>Meio-ambiente</Checkbox>
                        <Checkbox colorScheme='green'>Educação</Checkbox>
                        <Checkbox colorScheme='green'>Reforma Agrária</Checkbox>
                        <Checkbox colorScheme='green'>Segurança</Checkbox>
                        <Checkbox colorScheme='green'>Saúde</Checkbox>
                    </Direita>
                    <Esquerda>
                        <Checkbox colorScheme='green'>Feminismo</Checkbox>
                        <Checkbox colorScheme='green'>Igualdade</Checkbox>
                        <Checkbox colorScheme='green'>Economia</Checkbox>
                        <Checkbox colorScheme='green'>Empreendedor</Checkbox>
                        <Checkbox colorScheme='green'>Salário</Checkbox>
                        <Checkbox colorScheme='green'>Previdência</Checkbox>
                    </Esquerda>
                </Filters>
                <DivInput>
                        <Input placeholder='Digite palavras-chave'/>
                        <Enviar>Enviar</Enviar>
                </DivInput>
            </ModalContent>
        </>
    )
}

export default FilterCandidatos