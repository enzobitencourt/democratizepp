import { Botao, Cargo, Conteudo, Gray, ImgPolitico, Infos, Nome, Partido } from "./styled"
import Like from "../../components/Like/Like"

function CardEleito(props){
    const handleClick = () => {
        window.open(props.url, '_blank');
      };

    return(
        <>
        <Botao>
            <Conteudo>
                <ImgPolitico imagem={props.imagem}>
                    <Like url={props.url} favoritos={props.favoritos} id={props.id} cargo={props.cargo} imagem={props.imagem} nome={props.nome}/>
                </ImgPolitico>
                <Infos onClick={handleClick}>
                    <Nome>{props.nome}</Nome>
                    <Cargo>{props.cargo}</Cargo>
                    <Partido><b>Partido: </b>{props.partido}-{props.uf}</Partido>
                </Infos>
            </Conteudo>
            <Gray/>
        </Botao>
        </>
    )
}

export default CardEleito