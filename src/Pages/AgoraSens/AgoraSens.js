import HeaderEspaco from "../../components/HeadersEspacos/HeaderEspaco"
import Menu from "../../components/Menu/Menu"
import { ContainerFilter, Container, ContainerInput, DivPesquisa, Img1, InputNome, SearchButton, InputAutor, ContainerResultados, } from "./styled"
import { Select } from '@chakra-ui/react'
import Search from "../../Assets/IconSearch.svg"
import Ordenar from "../../components/Ordenar/Ordenar"
import CardConteudos from "../../Cards/CardConteudos/CardConteudos"

function AgoraSens() {
    return (
        <>
            <Container>
                <HeaderEspaco titulo='Senado Federal' subtitulo='Agora no Senado'/>
                <ContainerFilter>
                    <ContainerInput>
                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' placeholder='Descubra'>
                            <option value='option1'>Projetos/Matérias</option>
                            <option value='option2'>Comissões</option>
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
                    <CardConteudos ir='votacoes' titulo='Projeto de Lei 175/2022' partido='Partido: PT/ES'/>
                    <CardConteudos ir='votacoes' titulo='Projeto de Lei 175/2022' partido='Partido: PT/ES'/>
                </ContainerResultados>
                <Menu barra='1'/>
            </Container>
        </>
    )
}

export default AgoraSens