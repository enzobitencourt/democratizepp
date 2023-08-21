import { HomeImage, MenuContainer, NormalIcon } from "./StyledMenu";
import home from "../../Assets/CircleMenu.png"
import vote from "../../Assets/VoteMenu.svg"
import deps from "../../Assets/DepMenu.svg"
import project from "../../Assets/ProjectMenu.svg"
import settings from "../../Assets/SettingMenu.svg"
import { useNavigate } from "react-router-dom";
import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react'

function Menu() {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/home')
    }

    const goToConfig = () => {
        navigate('/config')
    }

    const goToProjeto = () => {
        navigate('/projeto')
    }

    const goToDepsSens = () => {
        navigate('/agoraembrasilia')
    }

    const goToEleicoes = () => {
        navigate('/eleicoes')
    }

    return (
        <>
            <MenuContainer>
                <Tabs variant="unstyled" position="relative">
                    <TabList>
                        <Tab h='7vh' onClick={goToEleicoes}>
                            <NormalIcon src={vote} />
                        </Tab>

                        <Tab h='7vh' onClick={goToDepsSens}>
                            <NormalIcon src={deps} />
                        </Tab>

                        <Tab onClick={goToHome} h='7vh'>
                            <HomeImage src={home} />
                        </Tab>

                        <Tab h='7vh' onClick={goToProjeto} >
                            <NormalIcon src={project} />
                        </Tab>

                        <Tab h='7vh' onClick={goToConfig}>
                            <NormalIcon src={settings} />
                        </Tab>
                    </TabList>

                    <TabIndicator
                        mt="-6px"
                        height="2px"
                        bg="#EBEBEB"
                        borderRadius="2px"
                    />
                </Tabs>
            </MenuContainer>
        </>
    )
}

export default Menu