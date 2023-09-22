import CardNoticias from "../../Cards/CardNoticias/CardNoticias"
import { ContainerNotGeral, Titulo } from "./styled"

function Noticias(props) {

    const news = props.noticias
    const limitedNews = news.slice(0, 5);

    return (
        <>
            <ContainerNotGeral>
                <Titulo>Notícias</Titulo>
                {limitedNews.map((article, index) => (
                    <CardNoticias
                     key={index}
                     titulo={article.title}
                     img={article.image}
                     local={article.source.name}
                     url={article.url}/>
                ))}
            </ContainerNotGeral>
        </>
    )
}

export default Noticias