import Menu from "../../components/Menu/Menu"
import { Container, ContainerFav, Titulo } from "./style"
import Header from "../../components/Header/Header"
import Noticias from "../../components/Noticias/Noticias"
import Favoritos from "../../components/Favoritos/Favoritos"
import Carousel from "../../components/Carousel/Carousel"

function Home() {
    return (
        <>
            <Container>
                <Header />
                <Carousel/>
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