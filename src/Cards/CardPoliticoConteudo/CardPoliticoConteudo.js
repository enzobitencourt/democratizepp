import { Botao, Conteudo, Gray, ImgPolitico, Infos, Nome, Partido, Status } from "./styled"
import imgEleito from "../../Assets/foto_dep_fav.jpeg"

function CardPoliticoConteudo(){
    return(
        <>
        <Botao>
            <Conteudo>
                <ImgPolitico src={imgEleito}/>
                <Infos>
                    <Nome>Afonso Motta</Nome>
                    <Partido><b>Partido: </b>PDT-RS</Partido>
                    <Status>Membro</Status>
                </Infos>
            </Conteudo>
            <Gray/>
        </Botao>
        </>
    )
}

export default CardPoliticoConteudo