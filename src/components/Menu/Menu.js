import { BotaoNavegacao, HomeImage, MenuContainer, NormalIcon } from "./StyledMenu";
import home from "../../Assets/CircleMenu.png"
import vote from "../../Assets/VoteMenu.svg"
import deps from "../../Assets/DepMenu.svg"
import project from "../../Assets/ProjectMenu.svg"
import settings from "../../Assets/SettingMenu.svg"
import { useNavigate } from "react-router-dom";

function Menu(){
    const navigate = useNavigate()

    const goToHome = () =>{
        navigate('/home')
    }

    const goToConfig = ()=>{
        navigate('/config')
    }

    const goToProjeto = ()=>{
        navigate('/projeto')
    }

    const goToDepsSens = ()=>{
        navigate('/agoraembrasilia')
    }

    const goToEleicoes =()=>{
        navigate('/eleicoes')
    }

    return(
        <>
        <MenuContainer>
            <BotaoNavegacao onClick={goToEleicoes}>
                <NormalIcon src={vote}/>
            </BotaoNavegacao>
            <BotaoNavegacao onClick={goToDepsSens}>
                <NormalIcon src={deps}/>
            </BotaoNavegacao>
            
            <HomeImage onClick={goToHome} src={home}/>
            
            <BotaoNavegacao>
                <NormalIcon onClick={goToProjeto} src={project}/>
            </BotaoNavegacao>
            <BotaoNavegacao>
                <NormalIcon onClick={goToConfig} src={settings}/>
            </BotaoNavegacao>
        </MenuContainer>
        </>
    )
}

export default Menu