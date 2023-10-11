import { Botao, Conteudo, Gray, ImgPolitico, Infos, Nome, Partido, Status } from "./styled"

function CardPoliticoConteudo(props){
    const handleClick = () => {
        window.open(props.url, '_blank');
      };

    return(
        <>
        <Botao onClick={handleClick}>
            <Conteudo>
                <ImgPolitico imagem={props.imagem}/>
                <Infos>
                    <Nome>{props.nome}</Nome>
                    <Partido><b>{props.texto} </b>{props.partido}</Partido>
                    <Status cor={props.cor}>{props.status}</Status>
                </Infos>
            </Conteudo>
            <Gray/>
        </Botao>
        </>
    )
}

export default CardPoliticoConteudo