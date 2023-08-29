import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'
import Favoritos from '../Favoritos/Favoritos'
import Estrelas from '../EstrelasAvaliacao/EstrelasAvaliacao'
import { useNavigate } from 'react-router-dom'

function ConfigDrop() {
    const navigate = useNavigate()

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
                        <AccordionButton _hover={{ bg: 'rgba(255, 255, 255, 0.54)' }} h="6vh" border="1px solid #000" bg="rgba(255, 255, 255, 0.54)" color="#9D9D9D">
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
                        <AccordionButton _hover={{ bg: 'rgba(255, 255, 255, 0.54)' }} onClick={goToEntrada} h="6vh" border="1px solid #000" bg="rgba(255, 255, 255, 0.54)" color="#9D9D9D">
                            <Box as="span" flex='1' color="red" textAlign='left'>
                                Sair
                            </Box>
                        </AccordionButton>
                    </h2>
                </AccordionItem>

            </Accordion>
        </>
    )
}

export default ConfigDrop