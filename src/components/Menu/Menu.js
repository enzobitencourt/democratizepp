import { HomeImage, MenuContainer, NormalIcon } from "./StyledMenu";
import home from "../../Assets/CircleMenu.png"
import vote from "../../Assets/VoteMenu.svg"
import deps from "../../Assets/DepMenu.svg"
import project from "../../Assets/ProjectMenu.svg"
import settings from "../../Assets/SettingMenu.svg"
import { Tabs, TabList, Tab, TabIndicator, TabPanels, TabPanel } from '@chakra-ui/react'
import PageVoto from "../../Pages/Voto/Voto";
import Home from "../../Pages/Home/Home";
import PrincipalDeps from "../../Pages/Deps&Sens/principal";
import Projeto from "../../Pages/Projeto/Projeto";
import Configuracoes from "../../Pages/Configuracoes/Configuracoes";

function Menu() {
    return (
        <>
            <Tabs w="100vw" variant="unstyled" position="relative" defaultIndex={2}>
                <MenuContainer>
                    <TabList justifyContent='space-between' w='100vw'>
                        <Tab h='7vh' w='auto'>
                            <NormalIcon src={vote} />
                        </Tab>

                        <Tab h='7vh' w='auto'>
                            <NormalIcon src={deps} />
                        </Tab>

                        <Tab h='7vh' w='auto'>
                            <HomeImage src={home} />
                        </Tab>

                        <Tab h='7vh' w='auto'>
                            <NormalIcon src={project} />
                        </Tab>

                        <Tab h='7vh' w='auto'>
                            <NormalIcon src={settings} />
                        </Tab>
                    </TabList>

                    <TabIndicator
                        mt="6vh"
                        height="2px"
                        bg="#EBEBEB"
                        borderRadius="2px"
                    />
                </MenuContainer>
                <TabPanels>
                    <TabPanel>
                        <PageVoto />
                    </TabPanel>

                    <TabPanel>
                        <PrincipalDeps/>
                    </TabPanel>

                    <TabPanel>
                        <Home/>
                    </TabPanel>

                    <TabPanel>
                        <Projeto/>
                    </TabPanel>

                    <TabPanel>
                        <Configuracoes/>
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </>
    )
}

export default Menu