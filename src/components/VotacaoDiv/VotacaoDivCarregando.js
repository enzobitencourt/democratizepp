import { VotacaoDiv, Votacao, TiposdeVotDiv, TiposdeVot, ImgCarregando } from "./styled"
import carregando from '../../Assets/carregandofundo.gif'

function VotacaoDivCarregando(props) {
    return (
        <>
            <VotacaoDiv>
                <Votacao>Última Votação</Votacao>
                <TiposdeVotDiv>
                    <TiposdeVot>
                        <ImgCarregando src={carregando} />
                    </TiposdeVot>
                </TiposdeVotDiv>
            </VotacaoDiv>
        </>
    )
}

export default VotacaoDivCarregando