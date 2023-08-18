import { useNavigate } from "react-router-dom"
import VoltSimbol from "../../Assets/SimboloVoltEntrada.png"
import {Volt, SimboloVolt} from "./styled"

function Voltar() {
    const navigate = useNavigate()

    const goBack =()=>{
        navigate(-1)
    }

    return (
        <>
            <Volt>
                <SimboloVolt onClick={goBack} src={VoltSimbol} />
            </Volt>
        </>
    )
}

export default Voltar