import { Botao, Cargo, Conteudo, Gray, ImgPolitico, Infos, Nome, Partido } from "./styled"
import imgEleito from "../../Assets/foto_dep_fav.jpeg"

function CardEleito(){
    return(
        <>
        <Botao>
            <Conteudo>
                <ImgPolitico src={imgEleito}/>
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