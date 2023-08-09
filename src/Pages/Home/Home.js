import Menu from "../../components/Menu/Menu"
import Object from "../../Cards/ObjectCarousel/Object"
import { Container, ContainerFav, Titulo } from "./style"
import Header from "../../components/Header/Header"
import Noticias from "../../components/Noticias/Noticias"
import Favoritos from "../../components/Favoritos/Favoritos"

function Home(){
    return(
        <>
        <Container>
        <Header/>
        <Object/>
        <ContainerFav>
            <Titulo>Favoritos</Titulo>
            <Favoritos/>
        </ContainerFav>
        <Noticias/>
        <Menu/>
        </Container>
        </>
    )
}

export default Home