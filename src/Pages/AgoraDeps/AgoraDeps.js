import HeaderEspaco from "../../components/HeadersEspacos/HeaderEspaco"
import Menu from "../../components/Menu/Menu"
import { ContainerFilter, Container, ContainerInput, DivPesquisa, Img1, InputNome, SearchButton, InputAutor, ContainerResultados, } from "./styled"
import { Select } from '@chakra-ui/react'
import Search from "../../Assets/IconSearch.svg"
import Ordenar from "../../components/Ordenar/Ordenar"
import CardConteudos from "../../Cards/CardConteudos/CardConteudos"

function AgoraDeps() {
    const customSelectStyles = {
        control: {
          height: '5vh',
        },
        menu: {
          maxHeight: '20vh', // Set the maximum height for the dropdown
          overflowY: 'scroll', // Enable vertical scrolling when needed
        },
      };

    return (
        <>
            <Container>
                <HeaderEspaco titulo='Câmara dos Deputados' subtitulo='Agora na Câmara'/>
                <ContainerFilter>
                    <ContainerInput>
                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' placeholder='Descubra'>
                            <option value='option1'>Proposições</option>
                            <option value='option2'>Eventos</option>
                            <option value='option3'>Frentes</option>
                        </Select>

                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' placeholder='Tema'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </ContainerInput>

                    <ContainerInput>
                        <InputAutor placeholder="Autor"/>

                        <Select bg="white" styles={customSelectStyles} w='45vw' h='5vh' borderRadius='28.6px' placeholder='Partido'  maxH="50px" overflowY="" >
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                            <option value='option4'>Option 1</option>
                            <option value='option5'>Option 2</option>
                            <option value='option6'>Option 3</option>
                            <option value='option7'>Option 1</option>
                            <option value='option8'>Option 2</option>
                        </Select>
                    </ContainerInput>

                    <ContainerInput>
                        <InputNome placeholder="Nome"/>
                        <DivPesquisa>
                            <SearchButton>
                                <Img1 src={Search}/>
                            </SearchButton>
                        </DivPesquisa>
                    </ContainerInput>
                </ContainerFilter>
                <ContainerResultados>
                    <Ordenar/>
                    <CardConteudos ir='frentes' titulo='Frente Parlamentar em Defesa dos Direitos da Mulher' partido='Partido: PP/2019'/>
                    <CardConteudos ir='frentes' titulo='Frente Parlamentar em Defesa dos Direitos da Mulher' partido='Partido: PP/2019'/>
                </ContainerResultados>
                <Menu barra='1'/>
            </Container>
        </>
    )
}

export default AgoraDeps