import React from 'react';
import { Imagem, Titulo, Texto } from "./styled";

function Object(props) {
  const handleObjectClick = () => {
    // Redirect the user to the specified URL in a new tab when clicked
    window.open(props.link, '_blank');
  };

  return (
    <a onClick={handleObjectClick}>
      <Imagem imagem={props.imagem}>
        <Titulo>
          <Texto>
            {props.texto}
          </Texto>
        </Titulo>
      </Imagem>
    </a>
  );
}

export default Object;
