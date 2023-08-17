import CardEleito from "../../Cards/CardEleito/CardEleito"
import Object from "../../Cards/ObjectCarousel/Object"
import Headers from "../../components/Headers/Headers"
import Menu from "../../components/Menu/Menu"
import { Area, Container, ContainerEnd, ContainerInput, ContainerMid, Deps, Esfumado, Espacos, Sens, Titulo } from "./styled"
import { Select } from '@chakra-ui/react'

function PrincipalDeps() {
    return (
        <>
            <Container>
                <Headers titulo="Câmara e Senado" subtitulo="Espaços de Poder" />
                <Object />
                <ContainerMid>
                    <Titulo>Escolha a instituição desejada</Titulo>
                    <Espacos>
                        <Deps>
                            <Esfumado>
                                <Area>Câmara dos Deputados</Area>
                            </Esfumado>
                        </Deps>
                        <Sens>
                            <Esfumado>
                                <Area>Senado Federal</Area>
                            </Esfumado>
                        </Sens>
                    </Espacos>
                </ContainerMid>
                <ContainerEnd>
                    <Titulo>Conheça os representantes</Titulo>
                    <ContainerInput>
                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </ContainerInput>
                </ContainerEnd>
                <Menu />
            </Container>
        </>
    )
}

export default PrincipalDeps