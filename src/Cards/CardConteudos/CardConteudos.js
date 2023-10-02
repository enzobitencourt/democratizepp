import { Link, useNavigate} from "react-router-dom"
import { Botao, Conteudo, Gray, Infos, Partido, Titulo } from "./styled"

function CardConteudos(props) {
    const navigate = useNavigate()
    const id = props.id


    return (
        <>
            <Link to={`/materia/${id}`}>
                <Botao>
                    <Conteudo>
                        <Infos>
                            <Titulo>{props.titulo}</Titulo>
                            <Partido>{props.partido}</Partido>
                        </Infos>
                        <Gray />
                    </Conteudo>
                </Botao>
            </Link>
        </>
    )
}

export default CardConteudos