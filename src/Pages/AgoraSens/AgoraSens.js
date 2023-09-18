import HeaderEspaco from "../../components/HeadersEspacos/HeaderEspaco"
import Menu from "../../components/Menu/Menu"
import { ContainerFilter, Container, ContainerInput, DivPesquisa, Img1, InputNome, SearchButton, InputAutor, ContainerResultados, } from "./styled"
import { Select } from '@chakra-ui/react'
import Search from "../../Assets/IconSearch.svg"
import Ordenar from "../../components/Ordenar/Ordenar"
import CardConteudos from "../../Cards/CardConteudos/CardConteudos"
import { useState } from "react"

function AgoraSens() {
    const [selectedTema, setSelectedTema] = useState("");
    const [selectedPartido, setSelectedPartido] = useState(""); 
    const [authorInput, setAuthorInput] = useState(""); 
    const [nameInput, setNameInput] = useState(""); 
    const [descubraSelect, setDescubraSelect] = useState('')

    const handleSearchClick = () => {
        console.log("Valor do descubra é: ", descubraSelect)
        console.log("Valor do primeiro select:", selectedTema);
        console.log("Valor do segundo select:", selectedPartido);
        console.log("Valor do input de autor:", authorInput);
        console.log("Valor do input de nome:", nameInput);
    };

    return (
        <>
            <Container>
                <HeaderEspaco titulo='Senado Federal' subtitulo='Agora no Senado' />
                <ContainerFilter>
                    <ContainerInput>
                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' value={descubraSelect} onChange={(e) => setDescubraSelect(e.target.value)} placeholder='Descubra'>
                            <option value='Projetos/Matérias'>Projetos/Matérias</option>
                            <option value='Comissões'>Comissões</option>
                        </Select>

                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' value={selectedTema} onChange={(e) => setSelectedTema(e.target.value)} placeholder='Tema'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </ContainerInput>

                    <ContainerInput>
                        <InputAutor
                            placeholder="Autor"
                            value={authorInput}
                            onChange={(e) => setAuthorInput(e.target.value)} />

                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' value={selectedPartido} onChange={(e) => setSelectedPartido(e.target.value)} placeholder='Partido'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </ContainerInput>

                    <ContainerInput>
                        <InputNome placeholder="Nome" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                        <DivPesquisa>
                            <SearchButton onClick={handleSearchClick}>
                                <Img1 src={Search} />
                            </SearchButton>
                        </DivPesquisa>
                    </ContainerInput>
                </ContainerFilter>
                <ContainerResultados>
                    <Ordenar />
                    <CardConteudos ir='votacoes' titulo='Projeto de Lei 175/2022' partido='Partido: PT/ES' />
                    <CardConteudos ir='votacoes' titulo='Projeto de Lei 175/2022' partido='Partido: PT/ES' />
                </ContainerResultados>
                <Menu barra='1' />
            </Container>
        </>
    )
}

export default AgoraSens