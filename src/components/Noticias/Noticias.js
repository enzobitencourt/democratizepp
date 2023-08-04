import CardNoticias from "../../Cards/CardNoticias/CardNoticias"
import { ContainerNotGeral, Titulo } from "./styled"

function Noticias(){
    return(
        <>
        <ContainerNotGeral>
            <Titulo>Notícias</Titulo>
            <CardNoticias/>
            <CardNoticias/>
            <CardNoticias/>
            <CardNoticias/>
            <CardNoticias/>
        </ContainerNotGeral>
        </>
    )
}

export default Noticias