import Object from "../../Cards/ObjectCarousel/Object"
import Menu from "../../components/Menu/Menu"
import { Barra, Container, GeneralContent, Resumo, Subtitulo, Titulo, Titulos } from "./styled"
import imagem from '../../Assets/projeto.png'

function Projeto() {
    return (
        <>
            <Container>
                <GeneralContent>
                    <Titulos>
                        <Titulo>Trabalho de Pesquisa</Titulo>
                        <Subtitulo><b>Democratize</b>: ferramenta digital para fomento à (in)formação política e cidadã</Subtitulo>
                        <Barra />
                    </Titulos>

                    <Resumo>
                        <b>Resumo: </b> 
                        Esta aplicação é resultado de uma longa pesquisa que busca entender a influência
                        anti-democrática das mídias digitais no voto e no comportamento do cidadão brasileiro.
                        A pesquisa surgiu como trabalho final do curso técnico de Informática para Internet integrado
                        ao Ensino Médio promovido pelo Senac São Leopoldo. Através do processo teórico, foi possível concluir
                        que a atual sistematização das principais mídias digitais prejudica o bom funcionamento do processo democrático, uma
                        vez que utiliza de algoritmos que reconhecem o interesse inicial de um eleitor/cidadão e apenas apresenta conteúdos do seu
                        interesse, afetando o princípio democrático da liberdade política do indivíduo. Dessa forma, idealizou-se
                        uma plataforma sem propensões ou tensões digitais que influenciem negativamente nos valores democráticos
                        de cada cidadão. Abaixo, apresenta-se o trabalho teórico desta pesquisa para os interessados, com toda a formulação de pesquisa e teoria.
                    </Resumo>
                </GeneralContent>
                <Object link="https://drive.google.com/file/d/171qFNydQt4QoJPE93h8PLc8rl6LOdzbp/view?usp=sharing" imagem={imagem} texto="Acesse a pesquisa completa em PDF" />
                <Menu barra='3' />
            </Container>
        </>
    )
}

export default Projeto