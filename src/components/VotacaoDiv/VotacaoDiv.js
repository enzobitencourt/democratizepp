import { VotacaoDiv, Votacao, TiposdeVotDiv, TiposdeVot, Quant, StatusdeVot } from "./styled"

function VotacaoDivs() {
    return (
        <>
            <VotacaoDiv>
                <Votacao>Votação</Votacao>
                <TiposdeVotDiv>
                    <TiposdeVot>
                        <Quant>110</Quant>
                        <StatusdeVot>À favor</StatusdeVot>
                    </TiposdeVot>
                 
                    <TiposdeVot>
                        <Quant>215</Quant>
                        <StatusdeVot>Contra</StatusdeVot>
                    </TiposdeVot>
                 
                    <TiposdeVot>
                        <Quant>000</Quant>
                        <StatusdeVot>Abstenção</StatusdeVot>
                    </TiposdeVot>
                </TiposdeVotDiv>
            </VotacaoDiv>
        </>
    )
}

export default VotacaoDivs