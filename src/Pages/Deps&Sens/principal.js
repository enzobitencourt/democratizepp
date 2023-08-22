import CardEleito from "../../Cards/CardEleito/CardEleito"
import Object from "../../Cards/ObjectCarousel/Object"
import Headers from "../../components/Headers/Headers"
import { Area, Container, ContainerEnd, ContainerInput, ContainerMid, Deps, Esfumado, Espacos, Resultados, Sens, Titulo } from "./styled"
import { Select } from '@chakra-ui/react'
import InputComponent from "../../components/InputComponent/InputComponent"
import { useNavigate } from "react-router-dom"

function PrincipalDeps() {
    const navigate = useNavigate()

    const goToSens = ()=>{
        navigate('/agoranosenado')
    }

    const goToDeps =()=>{
        navigate('/agoranacamara')
    }

    return (
        <>
            <Container>
                <Headers titulo="Câmara e Senado" subtitulo="Espaços de Poder" />
                <Object />
                <ContainerMid>
                    <Titulo>Escolha a instituição desejada</Titulo>
                    <Espacos>
                        <Deps onClick={goToDeps}>
                            <Esfumado>
                                <Area>Câmara dos Deputados</Area>
                            </Esfumado>
                        </Deps>
                        <Sens onClick={goToSens}>
                            <Esfumado>
                                <Area>Senado Federal</Area>
                            </Esfumado>
                        </Sens>
                    </Espacos>
                </ContainerMid>
                <ContainerEnd>
                    <Titulo>Conheça os representantes</Titulo>
                    <ContainerInput>
                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' placeholder='Tipo'>
                            <option value='option1'>Deputado Federal</option>
                            <option value='option2'>Senador</option>
                        </Select>

                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' placeholder='Partido'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </ContainerInput>
                    <InputComponent/>
                </ContainerEnd>
                <Resultados>
                    <CardEleito/>
                    <CardEleito/>
                </Resultados>
            </Container>
        </>
    )
}

export default PrincipalDeps