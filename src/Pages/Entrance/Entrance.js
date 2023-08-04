import { Acessar, Fundo, Gradiente, Logo } from "./style"
import logo from "../../Assets/LogoInt.png"

function Entrada(){
    return(
        <>
        <Fundo>
            <Gradiente>
                <Logo src={logo}/>
                <Acessar>Acessar</Acessar>
            </Gradiente>
        </Fundo>
        </>
    )
}

export default Entrada