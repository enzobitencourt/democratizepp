import Menu from "../../components/Menu/Menu"
import { Container, ContainerFav, Titulo } from "./style"
import Header from "../../components/Header/Header"
import Noticias from "../../components/Noticias/Noticias"
import Favoritos from "../../components/Favoritos/Favoritos"
import CarouselFunction from "../../components/Carousel/Carousel"
import axios from "axios"

function Home() {


    const PostCard = ()=>{

        const apikey = '21a3935b653b57368c81d5828dcc3ce1';
        const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apikey}`;

        axios.get(url)
        
        // axios.get('https://gnews.io/api/v4/top-headlines?category=nation&lang=pt&country=br&max=10&apikey=21a3935b653b57368c81d5828dcc3ce1')

        .then(response =>{
            console.log(response)
        })
        .catch(error => console.log('error'))
    }

    

    return (
        <>
            <Container>
                <Header />
                <CarouselFunction/>
                <ContainerFav>
                    <Titulo>Favoritos</Titulo>
                    <Favoritos />
                </ContainerFav>
                <Noticias />
                <Menu barra='2' />
            </Container>
        </>
    )
}

export default Home