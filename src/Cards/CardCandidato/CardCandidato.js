import { Botao, Coligacao, Conteudo, Gray, ImgPolitico, Infos, Nome, Numero, Partido } from "./styled"
import imgEleito from "../../Assets/FotoCandidato.jpg"

function CardCandidato() {
    return (
        <>
            <Botao>
                <Conteudo>
                    <ImgPolitico src={imgEleito} />
                    <Infos>
                        <Nome>Simone Tebet</Nome>
                        <Partido><b>Partido: </b>PDT-RS</Partido>
                        <Coligacao><b>Coligação: </b> Brasil Para Todos</Coligacao>
                        <Numero><b>Número: </b>15</Numero>
                    </Infos>
                </Conteudo>
                <Gray />
            </Botao>
        </>
    )
}

export default CardCandidato