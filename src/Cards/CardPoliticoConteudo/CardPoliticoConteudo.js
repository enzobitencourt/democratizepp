import { Botao, Conteudo, Gray, ImgPolitico, Infos, Nome, Partido, Status } from "./styled"

function CardPoliticoConteudo(props){
    return(
        <>
        <Botao>
            <Conteudo>
                <ImgPolitico imagem={props.imagem}/>
                <Infos>
                    <Nome>Afonso Motta</Nome>
                    <Partido><b>Partido: </b>PDT-RS</Partido>
                    <Status cor={props.cor}>{props.status}</Status>
                </Infos>
            </Conteudo>
            <Gray/>
        </Botao>
        </>
    )
}

export default CardPoliticoConteudo