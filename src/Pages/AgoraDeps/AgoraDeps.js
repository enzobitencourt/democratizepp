import HeaderEspaco from "../../components/HeadersEspacos/HeaderEspaco"
import { ContainerFilter, Container, ContainerInput, DivPesquisa, Img1, InputNome, SearchButton, InputAutor, ContainerResultados, } from "./styled"
import { Select } from '@chakra-ui/react'
import Search from "../../Assets/IconSearch.svg"
import Ordenar from "../../components/Ordenar/Ordenar"
import CardConteudos from "../../Cards/CardConteudos/CardConteudos"

function AgoraDeps() {
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

                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' placeholder='Partido'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
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
                    <CardConteudos titulo='Frente Parlamentar em Defesa dos Direitos da Mulher' partido='Partido: PP/2019'/>
                    <CardConteudos titulo='Frente Parlamentar em Defesa dos Direitos da Mulher' partido='Partido: PP/2019'/>
                </ContainerResultados>
            </Container>
        </>
    )
}

export default AgoraDeps