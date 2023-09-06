import Menu from "../../components/Menu/Menu"
import { Container, ContainerFav, Titulo } from "./style"
import Header from "../../components/Header/Header"
import Noticias from "../../components/Noticias/Noticias"
import Favoritos from "../../components/Favoritos/Favoritos"
import CarouselFunction from "../../components/Carousel/Carousel"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Home() {
    const [news, setNews] = useState([])

    const Database = ()=>{
        axios.get('https://gnews.io/api/v4/top-headlines?category=nation&lang=pt&country=br&max=10&apikey=21a3935b653b57368c81d5828dcc3ce1')

        .then(response =>{
            setNews(response.data.articles)
        })
        .catch(error => console.log('error'))
    }

    useEffect(()=>{
        Database()
    },[])

    

    return (
        <>
            <Container>
                <Header />
                <CarouselFunction noticias={news}/>
                <ContainerFav>
                    <Titulo>Favoritos</Titulo>
                    <Favoritos />
                </ContainerFav>
                <Noticias noticias={news}/>
                <Menu barra='2' />
            </Container>
        </>
    )
}

export default Home