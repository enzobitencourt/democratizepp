import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Checkbox
} from '@chakra-ui/react'

import { Direita, Esquerda, Filters } from './styled'

function FilterCandidatos() {
    return (
        <>
            <ModalOverlay />
            <ModalContent padding='0.5vh 1vh 3vh 1vh' w='80vw' borderRadius='28.4px' background='#FFF' gap='1.5vh'>
                <ModalHeader>Filtre por palavras-chave</ModalHeader>
                <Filters>
                    <Direita>
                        <Checkbox colorScheme='green'>Checkbox</Checkbox>
                        <Checkbox colorScheme='green'>Checkbox</Checkbox>
                        <Checkbox colorScheme='green'>Checkbox</Checkbox>
                        <Checkbox colorScheme='green'>Checkbox</Checkbox>
                        <Checkbox colorScheme='green'>Checkbox</Checkbox>
                        <Checkbox colorScheme='green'>Checkbox</Checkbox>
                        <Checkbox colorScheme='green'>Checkbox</Checkbox>
                    </Direita>
                    <Esquerda>
                        <Checkbox colorScheme='green'>Checkbox</Checkbox>
                        <Checkbox colorScheme='green'>Checkbox</Checkbox>
                        <Checkbox colorScheme='green'>Checkbox</Checkbox>
                        <Checkbox colorScheme='green'>Checkbox</Checkbox>
                        <Checkbox colorScheme='green'>Checkbox</Checkbox>
                        <Checkbox colorScheme='green'>Checkbox</Checkbox>
                        <Checkbox colorScheme='green'>Checkbox</Checkbox>
                    </Esquerda>
                </Filters>
            </ModalContent>
        </>
    )
}

export default FilterCandidatos