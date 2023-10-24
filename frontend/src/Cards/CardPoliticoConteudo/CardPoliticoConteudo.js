import { Botao, Conteudo, Gray, ImgPolitico, Infos, Nome, Partido, Status } from "./styled"
import Like from "../../components/Like/Like"

function CardPoliticoConteudo(props) {
    const handleClick = () => {
        window.open(props.url, '_blank');
    };

    return (
        <>
            <Botao>
                <Conteudo>
                    <ImgPolitico imagem={props.imagem}>
                        <Like url={props.url} favoritos={props.favoritos} id={props.id} cargo={props.cargo} nome={props.nome} imagem={props.imagem} like={false} />
                    </ImgPolitico>
                    <Infos onClick={handleClick}>
                        <Nome>{props.nome}</Nome>
                        <Partido><b>{props.texto} </b>{props.partido}</Partido>
                        <Status cor={props.cor}>{props.status}</Status>
                    </Infos>
                </Conteudo>
                <Gray />
            </Botao>
        </>
    )
}

export default CardPoliticoConteudo