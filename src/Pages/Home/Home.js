import Menu from "../../components/Menu/Menu"
import Object from "../../Cards/ObjectCarousel/Object"
import { Container } from "./style"
import Header from "../../components/Header/Header"

function Home(){
    return(
        <>
        <Container>
        <Header/>
        <Object/>
        <Menu/>
        </Container>
        </>
    )
}

export default Home