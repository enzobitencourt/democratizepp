import { Acessar, Fundo, Gradiente, Logo } from "./styled"
import logo from "../../Assets/LogoInt.png"
import { useNavigate } from "react-router-dom"

function Entrada(){
    const navigate = useNavigate()

    const goToHome = () =>{
        navigate('/home')
    }

    return(
        <>
        <Fundo>
            <Gradiente>
                <Logo src={logo}/>
                <Acessar onClick={goToHome}>Acessar</Acessar>
            </Gradiente>
        </Fundo>
        </>
    )
}

export default Entrada