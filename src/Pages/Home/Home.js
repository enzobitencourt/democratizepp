import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import { Container, ContainerFav, Titulo } from "./style";
import Header from "../../components/Header/Header";
import Noticias from "../../components/Noticias/Noticias";
import Favoritos from "../../components/Favoritos/Favoritos";
import CarouselFunction from "../../components/Carousel/Carousel";
import axios from "axios";
import CustomCarouselCarregando from "../../components/CarouselCarregando/CarouselCarregando";
import NoticiasCarregando from "../../components/NoticiasCarregando/NoticiasCarregando";

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  const Database = () => {
    axios
      .get(
        "https://gnews.io/api/v4/top-headlines?category=nation&lang=pt&country=br&max=10&apikey=21a3935b653b57368c81d5828dcc3ce1"
      )
      .then((response) => {
        setNews(response.data.articles);
        setLoading(false); // Define o carregamento como concluído quando os dados são obtidos
      })
      .catch((error) => {
        console.log("error");
        setLoading(true); 
      });
  };

  useEffect(() => {
    Database();
  }, []);

  return (
    <>
      <Container>
        <Header />

        {loading ? (
          <CustomCarouselCarregando/>
        ) : (
          <CarouselFunction noticias={news}/>
        )}

        <ContainerFav>
          <Titulo>Favoritos</Titulo>
          <Favoritos />
        </ContainerFav>
        {loading ? (
          <NoticiasCarregando/>
        ) : (
          <Noticias noticias={news} />
        )}
        <Menu barra="2" />
      </Container>
    </>
  );
}

export default Home;
