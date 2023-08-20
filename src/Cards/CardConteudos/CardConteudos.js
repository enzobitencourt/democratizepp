import { Botao, Conteudo, Gray, Infos, Partido, Titulo } from "./styled"

function CardConteudos(props) {
    return (
        <>
            <Botao>
                <Conteudo>
                    <Infos>
                        <Titulo>{props.titulo}</Titulo>
                        <Partido>{props.partido}</Partido>
                    </Infos>
                </Conteudo>
                <Gray />
            </Botao>
        </>
    )
}

export default CardConteudos