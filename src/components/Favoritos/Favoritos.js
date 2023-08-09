import CardFavoritos from "../../Cards/CardFavoritos/CardFavoritos"
import { ContainerFav} from "./styled"

function Favoritos(){
    return(
        <>
        <ContainerFav>
            <CardFavoritos/>
            <CardFavoritos/>
            <CardFavoritos/>
            <CardFavoritos/>
            <CardFavoritos/>
        </ContainerFav>
        </>
    )
}

export default Favoritos