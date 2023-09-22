import { useNavigate } from "react-router-dom"
import { Botao, Conteudo, Gray, Infos, Partido, Titulo } from "./styled"

function CardConteudos(props) {
    const navigate = useNavigate()

    const goToConteudo= ()=>{
        navigate(`/${props.ir}`)
    }

    return (
        <>
            <Botao onClick={goToConteudo}>
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