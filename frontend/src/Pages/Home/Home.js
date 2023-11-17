import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import { Container, ContainerFav, Titulo } from "./style";
import Header from "../../components/Header/Header";
import Noticias from "../../components/Noticias/Noticias";
import Favoritos from "../../components/Favoritos/Favoritos";
import CarouselFunction from "../../components/Carousel/Carousel";
import CustomCarouselCarregando from "../../components/CarouselCarregando/CarouselCarregando";
import NoticiasCarregando from "../../components/NoticiasCarregando/NoticiasCarregando";
import { useEffect } from "react";
import axios from "axios"
import { baseUrl } from "../../services/api";

function Home(props) {
  const loading = props.loading
  const news = props.database
  const [user, setUser] = useState()
  const id = localStorage.getItem("id")
  const formData = {
    id: id
  }


  useEffect(() => {
    if (id) {
      axios.post(`${baseUrl}/find/findUser`, formData)
        .then(function (response) {
          setUser(response.data.data)
        })
        .catch(function (error) {});
    }
  })

  return (
    <>
      <Container>
        <Header user={user} />

        {loading ? (
          <CustomCarouselCarregando />
        ) : (
          <CarouselFunction noticias={news} />
        )}

        {id ? (
          <ContainerFav>
            <Titulo>Favoritos</Titulo>
            <Favoritos/>
          </ContainerFav>
        ) : (
          <></>
        )}

        {loading ? (
          <NoticiasCarregando />
        ) : (
          <Noticias noticias={news} />
        )}
        <Menu barra="2" />
      </Container>
    </>
  );
}

export default Home;
