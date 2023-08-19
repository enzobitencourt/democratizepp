import { useNavigate } from "react-router-dom"
import VoltSimbol from "../../Assets/SimboloVoltBlack.svg"
import {Volt, SimboloVolt} from "./styled"

function VoltarBlack() {
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

export default VoltarBlack