import React from "react";
import Menu from "../../components/Menu/Menu";
import { Container, ContainerFav, Titulo } from "./style";
import Header from "../../components/Header/Header";
import Noticias from "../../components/Noticias/Noticias";
import Favoritos from "../../components/Favoritos/Favoritos";
import CarouselFunction from "../../components/Carousel/Carousel";
import CustomCarouselCarregando from "../../components/CarouselCarregando/CarouselCarregando";
import NoticiasCarregando from "../../components/NoticiasCarregando/NoticiasCarregando";

function Home(props) {
  const loading = props.loading
  const news = props.database

  return (
    <>
      <Container>
        <Header />

        {loading ? (
          <CustomCarouselCarregando />
        ) : (
          <CarouselFunction noticias={news} />
        )}

        <ContainerFav>
          <Titulo>Favoritos</Titulo>
          <Favoritos />
        </ContainerFav>
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
