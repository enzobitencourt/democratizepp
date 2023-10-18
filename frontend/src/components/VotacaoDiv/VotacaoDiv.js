import { VotacaoDiv, Votacao, TiposdeVotDiv, TiposdeVot, Quant } from "./styled"

function VotacaoDivs(props) {
    return (
        <>
            <VotacaoDiv>
                <Votacao>Última Votação</Votacao>
                <TiposdeVotDiv>
                    <TiposdeVot>
                        <Quant><b>{props.data}</b> - {props.descricao}</Quant>
                    </TiposdeVot>
                </TiposdeVotDiv>
            </VotacaoDiv>
        </>
    )
}

export default VotacaoDivs