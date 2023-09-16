import CardEleito from "../../Cards/CardEleito/CardEleito"
import Headers from "../../components/Headers/Headers"
import Menu from "../../components/Menu/Menu"
import { Area, Container, ContainerEnd, ContainerInput, ContainerMid, Deps, Esfumado, Espacos, Resultados, Sens, Titulo } from "./styled"
import { Select } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import InputComponent from "../../components/InputComponent/InputComponent"
import CustomCarouselDep from "../../components/CarouselDep/CarouselDep"
import dep from "../../Assets/foto_dep_fav.jpeg"

function PrincipalDeps() {
    const navigate = useNavigate()

    const goToDeps = ()=>{
        navigate('/agoranacamara')
    }

    const goToSens =()=>{
        navigate('/agoranosenado')
    }

    const keywords =(checkboxes)=>{
        const selectedKeywords = checkboxes
        console.log(selectedKeywords)
    }

    return (
        <>
            <Container>
                <Headers titulo="Câmara e Senado" subtitulo="Espaços de Poder" />
                <CustomCarouselDep/>
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
                    <InputComponent submitKeywords={keywords}/>
                </ContainerEnd>
                <Resultados>
                    <CardEleito imagem={dep}/>
                    <CardEleito imagem={dep}/>
                </Resultados>
                <Menu barra='1'/>
            </Container>
        </>
    )
}

export default PrincipalDeps