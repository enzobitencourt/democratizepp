import { CargoFav, Favorito, ContainerFavoritos, ImgFavs, Informacoes, NomeFav } from "./styled"
import ImgFav from "../../Assets/foto_dep_fav.jpeg"
import Like from "../../components/Like/Like"

function CardFavoritos(){
    return(
        <>
        <ContainerFavoritos>
            <ImgFavs src={ImgFav}/>
            <Informacoes>
                <CargoFav>Deputado Federal</CargoFav>
                <Favorito>
                    <NomeFav>Afonso Motta</NomeFav>
                    <Like/>
                </Favorito>
            </Informacoes>
        </ContainerFavoritos>
        </>
    )
}

export default CardFavoritos