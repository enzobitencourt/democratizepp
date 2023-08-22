import Object from "../../Cards/ObjectCarousel/Object"
import { Barra, Container, GeneralContent, Resumo, Subtitulo, Titulo, Titulos } from "./styled"

function Projeto() {
    return (
        <>
            <Container>
                <GeneralContent>
                    <Titulos>
                        <Titulo>Projeto de Pesquisa</Titulo>
                        <Subtitulo>Identificação cidadã de candidatos à presidência do Brasil</Subtitulo>
                    </Titulos>
                    <Barra />
                    <Resumo>
                        <b>Resumo:</b> Inicialmente, será trabalhado um viés teórico aprofundado do tema,
                        buscando entender o conceito de política no mundo contemporâneo, a identificação
                        cidadã perante este cenário e, por fim, uma melhor compreensão de todo o contexto
                        midiático caótico em que se encontra as discussões políticas, todas esses quesitos
                        abordados de forma clara e impessoal, buscando em pesquisas bibliográficas todo o
                        aprofundamento necessário para o embasamento dos conceitos trazidos pelo pesquisador.
                    </Resumo>
                    <Object texto="Acesse a pesquisa completa em PDF" />
                </GeneralContent>
            </Container>
        </>
    )
}

export default Projeto