import { Link } from "react-router-dom"
import { Botao, Conteudo, Gray, Infos, Partido, Titulo } from "./styled"
import { useTipo } from "../../Contexts/TipoContext"

function CardConteudos(props) {
    const id = props.id
    const tipo = props.tipo
    const pagina = props.pagina
    const { setTipo } = useTipo(); // Use o contexto

    const handleClick = () => {
        setTipo(tipo);
    };

    return (
        <>
            <Link to={`/${pagina}/${id}`}>
                <Botao onClick={handleClick}>
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