import CardFavoritos from "../../Cards/CardFavoritos/CardFavoritos"
import { ContainerFav, Container, Conteudo, Texto } from "./styled"
import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../../services/api";

function Favoritos(props) {
    const id = localStorage.getItem("id")
    const [favoritos, setFavoritos] = useState([]);
    const [favorites, setFavorites] = useState([])

    const eleitosFavoritos = () => {
      axios
        .get(`${baseUrl}/favorites/list/${id}`)
        .then((response) => {
          setFavorites(response.data.data)
        })
        .catch((error) => {
          console.log(error)
        });
    }

    const getFavoritos = () => {
        if (id) {
            axios
                .get(`${baseUrl}/favorites/find`)
                .then((response) => {
                    setFavoritos(response.data.data);
                })
                .catch((error) => {
                    console.log("errinho");
                });
        }
    }

    useEffect(() => {
        eleitosFavoritos()
        getFavoritos();
    })

    return (
        <ContainerFav>
            {favorites.length ? (
                <>
                    {favorites.map((favorite) => (
                        <CardFavoritos nome={favorite.nome}
                            favoritos={favoritos}
                            cargo={favorite.cargo}
                            url={favorite.url}
                            imagem={favorite.imagem}
                            id={favorite.idEleito}
                            key={favorite.id} />
                    ))}
                </>
            ) : (
                <Container>
                    <Conteudo>
                        <Texto>Você não possui nenhum político favoritado!</Texto>
                    </Conteudo>
                </Container>
            )}

        </ContainerFav>
    );
}

export default Favoritos;
