import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Checkbox
} from '@chakra-ui/react'

import { Direita, Enviar, Filters} from './styled'

function FilterDepsSens(props) {
    return (
        <>
            <ModalOverlay />
            <ModalContent alignSelf='last baseline' display='flex' padding='0.5vh 1vh 2vh 1vh' w='83vw' borderRadius='28.4px' background='#FFF' gap='1.5vh' alignItems='center'>
                <ModalHeader fontSize='18px' gap='2vw' display='flex' flexDirection='row' alignItems='center'>
                    <p>Filtre por Estado do Brasil</p>
                </ModalHeader>
                <Filters>
                    <Direita>
                        <Checkbox colorScheme='green'>AC</Checkbox>
                        <Checkbox colorScheme='green'>AL</Checkbox>
                        <Checkbox colorScheme='green'>AP</Checkbox>
                        <Checkbox colorScheme='green'>AM</Checkbox>
                        <Checkbox colorScheme='green'>BA</Checkbox>
                        <Checkbox colorScheme='green'>CE</Checkbox>
                        <Checkbox colorScheme='green'>DF</Checkbox>
                    </Direita>
                    <Direita>
                        <Checkbox colorScheme='green'>ES</Checkbox>
                        <Checkbox colorScheme='green'>GO</Checkbox>
                        <Checkbox colorScheme='green'>MA</Checkbox>
                        <Checkbox colorScheme='green'>MT</Checkbox>
                        <Checkbox colorScheme='green'>MS</Checkbox>
                        <Checkbox colorScheme='green'>MG</Checkbox>
                        <Checkbox colorScheme='green'>PA</Checkbox>
                    </Direita>
                    <Direita>
                        <Checkbox colorScheme='green'>PB</Checkbox>
                        <Checkbox colorScheme='green'>PR</Checkbox>
                        <Checkbox colorScheme='green'>PE</Checkbox>
                        <Checkbox colorScheme='green'>PI</Checkbox>
                        <Checkbox colorScheme='green'>RJ</Checkbox>
                        <Checkbox colorScheme='green'>RN</Checkbox>
                        <Checkbox colorScheme='green'>RS</Checkbox>
                    </Direita>
                    <Direita>
                        <Checkbox colorScheme='green'>RO</Checkbox>
                        <Checkbox colorScheme='green'>RR</Checkbox>
                        <Checkbox colorScheme='green'>SC</Checkbox>
                        <Checkbox colorScheme='green'>SP</Checkbox>
                        <Checkbox colorScheme='green'>SE</Checkbox>
                        <Checkbox colorScheme='green'>TO</Checkbox>
                        <Enviar onClick={props.funcao}>Enviar</Enviar>
                    </Direita>
                </Filters>
            </ModalContent>
        </>
    )
}

export default FilterDepsSens