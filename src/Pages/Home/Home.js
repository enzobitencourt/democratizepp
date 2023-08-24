import Menu from "../../components/Menu/Menu"
import { Container, ContainerFav, Titulo } from "./style"
import Header from "../../components/Header/Header"
import Noticias from "../../components/Noticias/Noticias"
import Favoritos from "../../components/Favoritos/Favoritos"
import CarouselFunction from "../../components/Carousel/Carousel"

function Home() {

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