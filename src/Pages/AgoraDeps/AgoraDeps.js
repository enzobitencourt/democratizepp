import HeaderEspaco from "../../components/HeadersEspacos/HeaderEspaco"
import Menu from "../../components/Menu/Menu"
import { ContainerFilter, Container, ContainerInput, DivPesquisa, FilterButton, Img, Img1, InputNome, SearchButton, InputAutor, ContainerResultados, } from "./styled"
import { Select } from '@chakra-ui/react'
import Filter from "../../Assets/IconFilter.svg"
import Search from "../../Assets/IconSearch.svg"
import Ordenar from "../../components/Ordenar/Ordenar"

function AgoraDeps() {
    return (
        <>
            <Container>
                <HeaderEspaco titulo='Câmara dos Deputados' subtitulo='Agora na Câmara'/>
                <ContainerFilter>
                    <ContainerInput>
                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' placeholder='Tipo'>
                            <option value='option1'>Deputado Federal</option>
                            <option value='option2'>Senador</option>
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
                            <FilterButton>
                                <Img src={Filter}/>
                            </FilterButton>
                            <SearchButton>
                                <Img1 src={Search}/>
                            </SearchButton>
                        </DivPesquisa>
                    </ContainerInput>
                </ContainerFilter>
                <ContainerResultados>
                    <Ordenar/>
                </ContainerResultados>
                <Menu />
            </Container>
        </>
    )
}

export default AgoraDeps