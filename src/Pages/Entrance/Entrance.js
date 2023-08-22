import { Acessar, Fundo, Gradiente, Logo } from "./styled"
import logo from "../../Assets/LogoInt.png"
import { useNavigate } from "react-router-dom"

function Entrada(){
    const navigate = useNavigate()

    const goToPrincipal = () =>{
        navigate('/principal')
    }

    return(
        <>
        <Fundo>
            <Gradiente>
                <Logo src={logo}/>
                <Acessar onClick={goToPrincipal}>Acessar</Acessar>
            </Gradiente>
        </Fundo>
        </>
    )
}

export default Entrada