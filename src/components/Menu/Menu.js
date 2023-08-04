import { BotaoNavegacao, HomeImage, MenuContainer, NormalIcon } from "./StyledMenu";
import home from "../../Assets/CircleMenu.png"
import vote from "../../Assets/VoteMenu.svg"
import deps from "../../Assets/DepMenu.svg"
import project from "../../Assets/ProjectMenu.svg"
import settings from "../../Assets/SettingMenu.svg"

function Menu(){
    return(
        <>
        <MenuContainer>
            <BotaoNavegacao>
                <NormalIcon src={vote}/>
            </BotaoNavegacao>
            <BotaoNavegacao>
                <NormalIcon src={deps}/>
            </BotaoNavegacao>
            
            <HomeImage src={home}/>
            
            <BotaoNavegacao>
                <NormalIcon src={project}/>
            </BotaoNavegacao>
            <BotaoNavegacao>
                <NormalIcon src={settings}/>
            </BotaoNavegacao>
        </MenuContainer>
        </>
    )
}

export default Menu