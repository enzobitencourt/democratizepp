import { Botao, Coligacao, Conteudo, Gray, ImgPolitico, Infos, Nome, Numero, Partido } from "./styled"

function CardCandidato(props) {
    return (
        <>
            <Botao>
                <Conteudo>
                    <ImgPolitico src={props.img} />
                    <Infos>
                        <Nome>{props.nome}</Nome>
                        <Partido><b>Partido: </b>{props.partido}</Partido>
                        <Coligacao><b>Coligação: </b> {props.coligacao}</Coligacao>
                        <Numero><b>Número: </b>{props.numero}</Numero>
                    </Infos>
                </Conteudo>
                <Gray />
            </Botao>
        </>
    )
}

export default CardCandidato