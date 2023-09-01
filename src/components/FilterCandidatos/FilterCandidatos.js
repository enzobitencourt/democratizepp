import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Modal,
    useDisclosure,
    Checkbox
} from '@chakra-ui/react'

import { Direita, Esquerda, Filters, Input, DivInput, Enviar } from './styled'
import { InfoIcon } from '@chakra-ui/icons'
import { useState } from 'react'

function FilterCandidatos() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const checkboxesData = [
        { label: 'Animais', checked: false },
        { label: 'Meio-ambiente', checked: false },
        { label: 'Educação', checked: false },
        { label: 'Reforma Agrária', checked: false },
        { label: 'Segurança', checked: false },
        { label: 'Saúde', checked: false },
        { label: 'Feminismo', checked: false },
        { label: 'Igualdade', checked: false },
        { label: 'Economia', checked: false },
        { label: 'Empreendedor', checked: false },
        { label: 'Salário', checked: false },
        { label: 'Previdência', checked: false },
    ];

    const [checkboxes, setCheckboxes] = useState(checkboxesData);

    const handleCheckboxChange = (index) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
        setCheckboxes(updatedCheckboxes);
    };

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
                        {checkboxes.slice(0, 6).map((checkbox, index) => (
                            <Checkbox
                                key={index}
                                colorScheme='green'
                                checked={checkbox.checked}
                                onChange={() => handleCheckboxChange(index)}
                            >
                                {checkbox.label}
                            </Checkbox>
                        ))}
                    </Direita>
                    <Esquerda>
                        {checkboxes.slice(6).map((checkbox, index) => (
                            <Checkbox
                                key={index + 6}
                                colorScheme='green'
                                checked={checkbox.checked}
                                onChange={() => handleCheckboxChange(index + 6)}
                            >
                                {checkbox.label}
                            </Checkbox>
                        ))}
                    </Esquerda>
                </Filters>
                <DivInput>
                    <Input placeholder='Digite palavras-chave' />
                    <Enviar>Enviar</Enviar>
                </DivInput>
            </ModalContent>
        </>
    )
}

export default FilterCandidatos