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
                    <Nome>Afonso Motta</Nome>
                    <Cargo>Deputado Federal</Cargo>
                    <Partido><b>Partido: </b>PDT-RS</Partido>
                </Infos>
            </Conteudo>
            <Gray/>
        </Botao>
        </>
    )
}

export default CardEleito