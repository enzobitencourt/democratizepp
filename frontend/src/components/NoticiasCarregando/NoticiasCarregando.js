import CardNoticias from "../../Cards/CardNoticias/CardNoticias"
import { ContainerNotGeral, Titulo } from "./styled"
import carregando from "../../Assets/carregando.gif"

function NoticiasCarregando() {
    return (
        <>
            <ContainerNotGeral>
                <Titulo>Notícias</Titulo>
                    <CardNoticias
                     titulo='Carregando...'
                     img={carregando}/>
            </ContainerNotGeral>
        </>
    )
}

export default NoticiasCarregando