import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Button
} from '@chakra-ui/react'

import Favoritos from '../Favoritos/Favoritos'
import Estrelas from '../EstrelasAvaliacao/EstrelasAvaliacao'
import { useNavigate } from 'react-router-dom'

function ConfigDrop() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const navigate = useNavigate()

    const goToPerfil = () => {
        navigate('/perfil')
    }

    const goToEntrada = () => {
        navigate('/entrada')
    }

    return (
        <>
            <Accordion
                defaultIndex={[0]}
                allowMultiple
            >
                <AccordionItem>
                    <h2>
                        <AccordionButton onClick={goToPerfil} _hover={{ bg: 'rgba(255, 255, 255, 0.54)' }} h="6vh" border="1px solid #000" bg="rgba(255, 255, 255, 0.54)" color="#9D9D9D">
                            <Box as="span" flex='1' textAlign='left'>
                                Editar Perfil
                            </Box>
                        </AccordionButton>
                    </h2>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton _hover={{ bg: 'rgba(255, 255, 255, 0.54)' }} h="6vh" border="1px solid #000" bg="rgba(255, 255, 255, 0.54)" color="#9D9D9D">
                            <Box as="span" flex='1' textAlign='left'>
                                Portais de Notícia
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton _hover={{ bg: 'rgba(255, 255, 255, 0.54)' }} h="6vh" border="1px solid #000" bg="rgba(255, 255, 255, 0.54)" color="#9D9D9D">
                            <Box as="span" flex='1' textAlign='left'>
                                Dar nota ao projeto
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Estrelas />
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton _hover={{ bg: 'rgba(255, 255, 255, 0.54)' }} h="6vh" border="1px solid #000" bg="rgba(255, 255, 255, 0.54)" color="#9D9D9D">
                            <Box as="span" flex='1' textAlign='left'>
                                Favoritos
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel w='100vw' h='auto' padding='0' display='flex' justifyContent='center' whiteSpace='normal' pb={4}>
                        <Favoritos />
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem marginBottom='13vh'>
                    <h2>
                        <AccordionButton _hover={{ bg: 'rgba(255, 255, 255, 0.54)' }} onClick={onOpen} h="6vh" border="1px solid #000" bg="rgba(255, 255, 255, 0.54)" color="#9D9D9D">
                            <Box as="span" flex='1' color="red" textAlign='left'>
                                Sair
                            </Box>
                        </AccordionButton>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent alignSelf='center' w='75vw' alignItems='center' display='flex'>
                                <ModalHeader width='100%' textAlign='center'>Você tem certeza que deseja sair?</ModalHeader>
                                <ModalFooter gap='2vw' justifyContent='center' w='70vw'>
                                    <Button variant='ghost' border='1px solid black' onClick={onClose}>
                                        Cancelar
                                    </Button>
                                    <Button backgroundColor='#1B676B' mr={3} color='#EBEBEB' onClick={goToEntrada}>Sair</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </h2>
                </AccordionItem>

            </Accordion>
        </>
    )
}

export default ConfigDrop