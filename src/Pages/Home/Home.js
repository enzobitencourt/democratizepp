import Object from "../../Cards/ObjectCarousel/Object"
import { Container, ContainerFav, Titulo } from "./style"
import Header from "../../components/Header/Header"
import Noticias from "../../components/Noticias/Noticias"
import Favoritos from "../../components/Favoritos/Favoritos"

function Home() {
    return (
        <>
            <Container>
                <Header />
                <Object texto="Para Lira, problemas orçamentários impedem mais investimentos na defesa do meio ambiente" />
                <ContainerFav>
                    <Titulo>Favoritos</Titulo>
                    <Favoritos />
                </ContainerFav>
                <Noticias />
            </Container>
        </>
    )
}

export default Home