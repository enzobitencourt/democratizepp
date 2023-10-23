import { useState, useEffect } from 'react';
import like from "../../Assets/like.png"
import dislike from "../../Assets/dislike.png"
import { Botao, Img } from './styled';
import axios from 'axios';
import { baseUrl } from '../../services/api';
import { useToast } from '@chakra-ui/react';

function Like(props) {
  const isFavorite = () => {
    if (idUser && id && favoritos && favoritos.includes(id)) {
      return true
    } else{
      return false
    }
  }

  const nome = props.nome
  const imagem = props.imagem
  const cargo = props.cargo
  const id = props.id
  const favoritos = props.favoritos
  const idUser = localStorage.getItem("id")
  const toast = useToast()
  const [liked, setLiked] = useState(isFavorite());

  function handleClick() {
    setLiked(!liked);
    if (idUser) {
      const formFavoritos = {
        nome: nome,
        imagem: imagem,
        cargo: cargo,
        idEleito: id,
        idUsuario: idUser
      }

      if (!liked === true) {
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
      } else if (!liked === false) {
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
        position: 'bottom-left',
        title: 'Erro',
        description: "Você não fez login",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    if (liked) {
      const timer = setTimeout(() => {
        setLiked(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [liked, setLiked]);

  return (
    <Botao
      className={`botao-like ${liked ? 'liked' : ''}`}
      onClick={handleClick}
    >
      {liked ? <Img src={like} /> : <Img src={dislike} />}
    </Botao>
  );
}

export default Like