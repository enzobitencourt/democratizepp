import { Container, Conteudo, ImgCarregando, Texto } from "./styled"
import carregando from '../../Assets/carregandofundo.gif'

function Carregando(loading) {
    return (
        <>
            <Container>
                <Conteudo>
                    {loading === true ? (
                        <>
                            <ImgCarregando src={carregando} />
                            <Texto>Carregando...</Texto>
                        </>
                    ) : (
                        <Texto>Não houve pesquisa efetuada até o momento.</Texto>
                    )}
                </Conteudo>
            </Container>
        </>
    )
}

export default Carregando