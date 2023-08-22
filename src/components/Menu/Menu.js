import { HomeImage, MenuContainer, NormalIcon } from "./StyledMenu";
import home from "../../Assets/CircleMenu.png"
import vote from "../../Assets/VoteMenu.svg"
import deps from "../../Assets/DepMenu.svg"
import project from "../../Assets/ProjectMenu.svg"
import settings from "../../Assets/SettingMenu.svg"
import { Tabs, TabList, Tab, TabIndicator, TabPanels, TabPanel } from '@chakra-ui/react'
import PageVoto from "../../Pages/Voto/Voto";
import Home from "../../Pages/Home/Home";

function Menu() {
    return (
        <>
            <Tabs variant="unstyled" position="relative">
                <MenuContainer>
                    <TabList>
                        <Tab h='7vh'>
                            <NormalIcon src={vote} />
                        </Tab>

                        <Tab h='7vh'>
                            <NormalIcon src={deps} />
                        </Tab>

                        <Tab h='7vh'>
                            <HomeImage src={home} />
                        </Tab>

                        <Tab h='7vh'>
                            <NormalIcon src={project} />
                        </Tab>

                        <Tab h='7vh'>
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
                        <p>oi</p>
                    </TabPanel>
                    <TabPanel>
                        <Home/>
                    </TabPanel>
                    <TabPanel>
                        <p>oi</p>
                    </TabPanel>
                    <TabPanel>
                        <p>oi</p>
                    </TabPanel>
                    <TabPanel>
                        <p>oi</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default Menu