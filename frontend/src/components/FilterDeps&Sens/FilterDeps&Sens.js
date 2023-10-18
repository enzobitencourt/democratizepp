import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Checkbox
} from '@chakra-ui/react';

import { Direita, Enviar, Filters } from './styled';

function FilterDepsSens(props) {
  const checkboxesData = [
    { label: 'AC', checked: false },
    { label: 'AL', checked: false },
    { label: 'AP', checked: false },
    { label: 'AM', checked: false },
    { label: 'BA', checked: false },
    { label: 'CE', checked: false },
    { label: 'DF', checked: false },
    { label: 'ES', checked: false },
    { label: 'GO', checked: false },
    { label: 'MA', checked: false },
    { label: 'MT', checked: false },
    { label: 'MS', checked: false },
    { label: 'MG', checked: false },
    { label: 'PA', checked: false },
    { label: 'PB', checked: false },
    { label: 'PR', checked: false },
    { label: 'PE', checked: false },
    { label: 'PI', checked: false },
    { label: 'RJ', checked: false },
    { label: 'RN', checked: false },
    { label: 'RS', checked: false },
    { label: 'RO', checked: false },
    { label: 'RR', checked: false },
    { label: 'SC', checked: false },
    { label: 'SP', checked: false },
    { label: 'SE', checked: false },
    { label: 'TO', checked: false },
  ];

  const [checkboxes, setCheckboxes] = useState(checkboxesData);

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

  const handleKeywordsSubmit = () => {
    const selectedCheckboxesLabels = getCheckedCheckboxes();
    if (selectedCheckboxesLabels.length > 0) {
      props.onSubmitKeywords(selectedCheckboxesLabels); // Pass both data to the parent component
    }
  };

  return (
    <>
      <ModalOverlay />
      <ModalContent alignSelf="last baseline" display="flex" padding="0.5vh 1vh 2vh 1vh" w="83vw" borderRadius="28.4px" background="#FFF" gap="1.5vh" alignItems="center">
        <ModalHeader fontSize="18px" gap="2vw" display="flex" flexDirection="row" alignItems="center">
          <p>Filtre por Estado do Brasil</p>
        </ModalHeader>
        <Filters>
          <Direita>
            {checkboxes.slice(0, 7).map((checkbox, index) => (
              <Checkbox
                key={index}
                colorScheme="teal"
                checked={checkbox.checked}
                onChange={() => handleCheckboxChange(index)}
              >
                {checkbox.label}
              </Checkbox>
            ))}
          </Direita>
          <Direita>
            {checkboxes.slice(7, 14).map((checkbox, index) => (
              <Checkbox
                key={index}
                colorScheme="teal"
                checked={checkbox.checked}
                onChange={() => handleCheckboxChange(index + 7)}
              >
                {checkbox.label}
              </Checkbox>
            ))}
          </Direita>
          <Direita>
            {checkboxes.slice(14, 21).map((checkbox, index) => (
              <Checkbox
                key={index}
                colorScheme="teal"
                checked={checkbox.checked}
                onChange={() => handleCheckboxChange(index + 14)}
              >
                {checkbox.label}
              </Checkbox>
            ))}
          </Direita>
          <Direita>
            {checkboxes.slice(21, 27).map((checkbox, index) => (
              <Checkbox
                key={index}
                colorScheme="teal"
                checked={checkbox.checked}
                onChange={() => handleCheckboxChange(index + 21)}
              >
                {checkbox.label}
              </Checkbox>
            ))}
            <Enviar onClick={handleKeywordsSubmit}>Enviar</Enviar>
          </Direita>
        </Filters>
      </ModalContent>
    </>
  );
}

export default FilterDepsSens;
