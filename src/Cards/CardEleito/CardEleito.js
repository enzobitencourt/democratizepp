import { Botao, Cargo, Conteudo, Gray, ImgPolitico, Infos, Nome, Partido } from "./styled"
import Like from "../../components/Like/Like"

function CardEleito(props){
    const handleClick = () => {
        // Redirect the user to the specified URL in a new tab when clicked
        window.open(props.url, '_blank');
      };

    return(
        <>
        <Botao>
            <Conteudo>
                <ImgPolitico imagem={props.imagem}>
                    <Like like={false}/>
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