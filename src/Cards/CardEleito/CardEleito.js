import { Botao, Cargo, Conteudo, Gray, ImgPolitico, Infos, Nome, Partido } from "./styled"
import Like from "../../components/Like/Like"

function CardEleito(props){
    return(
        <>
        <Botao>
            <Conteudo>
                <ImgPolitico imagem={props.imagem}>
                    <Like/>
                </ImgPolitico>
                <Infos>
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