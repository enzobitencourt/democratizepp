import CardPoliticoConteudo from "../../../Cards/CardPoliticoConteudo/CardPoliticoConteudo"
import senador from "../../../Assets/senador.jpg"

function Votos(props) {
    const id = props.id
    const voto = props.voto
    const partido = props.partido
    const nome = props.nome
    const ufs = props.ufs

    return (
        <>
            <CardPoliticoConteudo nome='Soraia Thronike' cor='green' imagem={senador} status='À favor' />
        </>
    )
}

export default Votos