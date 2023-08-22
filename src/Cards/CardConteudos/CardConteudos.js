import { Botao, Conteudo, Gray, Infos, Partido, Titulo } from "./styled"
import { useNavigate } from "react-router-dom"

function CardConteudos(props) {
    const navigate = useNavigate()

    const goToVotacoes = ()=>{
        navigate('/votacoes')
    }

    return (
        <>
            <Botao onClick={goToVotacoes}>
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