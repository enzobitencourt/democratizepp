import { Botao, Conteudo, Gray, Infos, Partido, Titulo } from "./styled"
import { useNavigate } from "react-router-dom"

function CardConteudos(props) {
    const navigate = useNavigate()

    const goToFrente = ()=>{
        navigate('/frentes')
    }

    return (
        <>
            <Botao onClick={goToFrente}>
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