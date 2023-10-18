import { Link } from "react-router-dom"
import { Botao, Conteudo, Gray, Infos, Partido, Titulo } from "./styled"
import { useEffect, useState } from "react"

function CardConteudos(props) {
    const id = props.id
    const tipo = props.tipo
    const pagina = props.pagina
    const [casa, setCasa] = useState()

    useEffect(()=>{
        if(tipo === "Comissões" || tipo==="Projetos/Matérias"){
            if(tipo === "Comissões"){
                setCasa("/descubra")
            } else{
                setCasa("")
            }
        } else{
            if(tipo === "Proposições"){
                setCasa("")
            } else{
                setCasa("/descubra")
            }
        }
    }, [setCasa, tipo])

    return (
        <>
            <Link to={`${casa}/${pagina}/${id}`}>
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