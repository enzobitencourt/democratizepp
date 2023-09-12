import React, { useState } from 'react';
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Modal,
    useDisclosure,
    Checkbox,
    Tag,
    TagCloseButton,
} from '@chakra-ui/react';

import { Direita, Esquerda, Filters, Input, DivInput, Enviar, Enviar1, Selects, Titulo } from './styled';
import { InfoIcon } from '@chakra-ui/icons';


function FilterCandidatos(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const checkboxesData = [
        { label: 'Meio-ambiente', checked: false },
        { label: 'Educação', checked: false },
        { label: 'Reforma Agrária', checked: false },
        { label: 'Segurança', checked: false },
        { label: 'Saúde', checked: false },
        { label: 'Igualdade', checked: false },
        { label: 'Economia', checked: false },
        { label: 'Empreendedor', checked: false },
        { label: 'Salário', checked: false },
        { label: 'Previdência', checked: false }
    ];

    const [checkboxes, setCheckboxes] = useState(checkboxesData);
    const [inputValue, setInputValue] = useState(''); // State for the input value
    const [tags, setTags] = useState([]); // State for storing tags

    const handleCheckboxChange = (index) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
        setCheckboxes(updatedCheckboxes);
    };

    const getCheckedCheckboxes = () => {
        const checkedLabels = checkboxes
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.label);
        return checkedLabels;
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleTagSubmit = (e) => {
        if (inputValue.trim() !== '') {
            e.preventDefault()
            setTags([...tags, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleTagClick = (clickedTag) => {
        // Filter the tags array to remove the clicked tag
        const updatedTags = tags.filter((tag) => tag !== clickedTag);
        setTags(updatedTags);
    };


    const handleKeywordsSubmit = () => {
        const selectedCheckboxesLabels = getCheckedCheckboxes();
        if (tags.length > 0 || selectedCheckboxesLabels.length > 0) {
            props.onSubmitKeywords(tags, selectedCheckboxesLabels); // Pass both data to the parent component
        }
    };

    return (
        <>
            <ModalOverlay />
            <ModalContent display='flex' padding='0.5vh 1vh 3vh 1vh' w='83vw' borderRadius='28.4px' background='#FFF' gap='1.5vh' alignItems='center'>
                <ModalHeader fontSize='18px' gap='2vw' display='flex' flexDirection='row' alignItems='center'>
                    <Titulo>Filtre por palavras-chave</Titulo>
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
                        {checkboxes.slice(0, 5).map((checkbox, index) => (
                            <Checkbox
                                key={index}
                                colorScheme='teal'
                                checked={checkbox.checked}
                                onChange={() => handleCheckboxChange(index)}
                            >
                                {checkbox.label}
                            </Checkbox>
                        ))}
                    </Direita>
                    <Esquerda>
                        {checkboxes.slice(5).map((checkbox, index) => (
                            <Checkbox
                                key={index + 5}
                                colorScheme='teal'
                                checked={checkbox.checked}
                                onChange={() => handleCheckboxChange(index + 5)}
                            >
                                {checkbox.label}
                            </Checkbox>
                        ))}
                    </Esquerda>
                </Filters>
                <DivInput>
                    <Input
                        placeholder='Digite palavras-chave'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <Enviar onClick={handleTagSubmit}>Adicionar</Enviar>
                </DivInput>
                <Selects>
                    {getCheckedCheckboxes().map((label, index) => (
                        <Tag key={index} variant='solid' bg='none' color='#1B676B' border='2px solid #1B676B'>
                            {label}
                        </Tag>
                    ))}
                    {tags.map((tag, index) => (
                        <Tag key={index} variant='solid' bg='none' color='#1B676B' border='2px solid #1B676B'>
                            {tag}
                            <TagCloseButton
                                onClick={() => handleTagClick(tag)}
                                cursor='pointer' />
                        </Tag>
                    ))}
                </Selects>
                <Enviar1 onClick={handleKeywordsSubmit}>Enviar palavras-chave</Enviar1>
            </ModalContent>
        </>
    );
}

export default FilterCandidatos;
