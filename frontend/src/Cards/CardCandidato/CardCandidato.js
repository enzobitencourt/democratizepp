import { Botao, Coligacao, Gray, ImgPolitico, Infos, Nome, Numero, Partido } from "./styled"

function CardCandidato(props) {
    const handleObjectClick = () => {
        window.open(props.url, '_blank');
    };
    return (
        <>
            <Botao onClick={handleObjectClick}>
                <ImgPolitico imagem={props.img} />
                <Infos>
                    <Nome>{props.nome}</Nome>
                    <Partido><b>Partido: </b>{props.partido}</Partido>
                    <Coligacao><b>Coligação: </b> {props.coligacao}</Coligacao>
                    <Numero><b>Número: </b>{props.numero}</Numero>
                </Infos>
                <Gray />
            </Botao>
        </>
    )
}

export default CardCandidato