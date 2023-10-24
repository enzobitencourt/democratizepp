import { CargoFav, Favorito, ContainerFavoritos, ImgFavs, Informacoes, NomeFav } from "./styled"
import Like from "../../components/Like/Like"

function CardFavoritos(props){
    const handleClick = () => {
        window.open(props.url, '_blank');
      };

    return(
        <>
        <ContainerFavoritos>
            <ImgFavs onClick={handleClick} imagem={props.imagem}/>
            <Informacoes>
                <CargoFav>{props.cargo}</CargoFav>
                <Favorito>
                    <NomeFav>{props.nome}</NomeFav>
                    <Like url={props.url} favoritos={props.favoritos} id={props.id} cargo={props.cargo} imagem={props.imagem} nome={props.nome}/>
                </Favorito>
            </Informacoes>
        </ContainerFavoritos>
        </>
    )
}

export default CardFavoritos