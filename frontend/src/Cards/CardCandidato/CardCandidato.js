import Like from "../../components/Like/Like";
import { Botao, Coligacao, Gray, ImgPolitico, Infos, Nome, Numero, Partido } from "./styled"

function CardCandidato(props) {
    const handleObjectClick = () => {
        window.open(props.url, '_blank');
    };
    return (
        <>
            <Botao>
                <ImgPolitico imagem={props.img}>
                    <Like url={props.url} favoritos={props.favoritos} id={props.id} cargo="Candidato à Presidência" imagem={props.img} nome={props.nome} />
                </ImgPolitico>
                <Infos onClick={handleObjectClick}>
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