import React, { useState } from 'react';
import like from "../../Assets/like.png";
import dislike from "../../Assets/dislike.png";
import { Botao, Img } from './styled';
import axios from 'axios';
import { baseUrl } from '../../services/api';
import { useToast } from '@chakra-ui/react';

function Like(props) {
  const { nome, imagem, cargo, url, favoritos } = props;
  const id = parseInt(props.id, 10);
  const idUser = localStorage.getItem("id");
  const toast = useToast();

  function isFavorite() {
    if (id && favoritos && favoritos.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

  const [liked, setLiked] = useState(isFavorite());

  function handleClick() {
    if (idUser) {
      setLiked((prevLiked) => !prevLiked);
      const formFavoritos = {
        nome: nome,
        imagem: imagem,
        cargo: cargo,
        idEleito: id,
        idUsuario: idUser,
        url: url
      }

      if (!liked) {
        axios.post(`${baseUrl}/favorites/favorito/create`, formFavoritos)
          .catch(function (error) {
            toast({
              position: 'bottom-left',
              title: 'Erro',
              description: "Não foi possível adicionar o favorito",
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          });
      } else {
        axios.delete(`${baseUrl}/favorites/favorito/delete/${id}`)
          .catch(function (error) {
            toast({
              position: 'bottom-left',
              title: 'Erro',
              description: "Não foi possível remover o favorito",
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          });
      }
    } else {
      toast({
        position: 'top-right',
        title: 'Não é possível favoritar',
        description: "Você não fez login",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }


  return (
    <Botao
      className={`botao-like ${liked ? 'liked' : ''}`}
      onClick={handleClick}
    >
      {liked ? <Img src={like} alt="like" /> : <Img src={dislike} alt="dislike" />}
    </Botao>
  );
}

export default Like;
