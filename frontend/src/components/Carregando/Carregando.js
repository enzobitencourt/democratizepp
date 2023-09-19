import { Container, Conteudo, ImgCarregando, Texto, Texto1 } from "./styled"
import carregando from '../../Assets/carregandofundo.gif'

function Carregando(props) {
    const loading = props.loading
    
    return (
        <>
            <Container>
                <Conteudo>
                    {loading === true ? (
                        <>
                            <ImgCarregando src={carregando} />
                            <Texto1>Carregando...</Texto1>

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