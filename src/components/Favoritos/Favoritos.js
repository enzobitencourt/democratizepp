import CardFavoritos from "../../Cards/CardFavoritos/CardFavoritos"
import { Container, ContainerFav, Titulo } from "./styled"

function Favoritos(){
    return(
        <>
        <Container>
            <Titulo>Favoritos</Titulo>
            <ContainerFav>
                <CardFavoritos/>
                <CardFavoritos/>
                <CardFavoritos/>
            </ContainerFav>
        </Container>
        </>
    )
}

export default Favoritos