import Menu from "../../components/Menu/Menu"
import Object from "../../Cards/ObjectCarousel/Object"
import { Container } from "./style"
import Header from "../../components/Header/Header"
import Noticias from "../../components/Noticias/Noticias"

function Home(){
    return(
        <>
        <Container>
        <Header/>
        <Object/>
        <Noticias/>
        <Menu/>
        </Container>
        </>
    )
}

export default Home