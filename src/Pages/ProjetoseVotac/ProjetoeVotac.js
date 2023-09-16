import CardPoliticoConteudo from "../../Cards/CardPoliticoConteudo/CardPoliticoConteudo"
import HeadersConteud from "../../components/HeadersConteud/HeadersConteud"
import InputComponent from "../../components/InputComponent/InputComponent"
import Menu from "../../components/Menu/Menu"
import VotacaoDivs from "../../components/VotacaoDiv/VotacaoDiv"
import { Container, DivConteudo, Infos, Participantes, Pesquisa, TextInfos, ContainerInput, Resultados } from "./styled"
import senador from "../../Assets/senador.jpg"
import { Select } from "@chakra-ui/react"

function ProjetoeVotac() {
    const keywords =(checkboxes)=>{
        const selectedKeywords = checkboxes
        console.log(selectedKeywords)
    }

    return (
        <>
            <Container>
                <HeadersConteud
                    titulo="PEC 2/2022"
                    subtitulo="Agora no Senado" />
                <DivConteudo>
                    <Infos>
                        <TextInfos>
                            <b>Descrição:</b> Altera o art. 144 da Constituição Federal para instituir
                            garantias para os policiais civis, penais e militares, os bombeiros militares e suas famílias. </TextInfos>
                        <TextInfos><b>Autores:</b> Fernando Collor (PROS/AL), Zequinha Marinho (PSC/PA)</TextInfos>
                    </Infos>
                </DivConteudo>
                <VotacaoDivs />
                <Pesquisa>
                    <Participantes>Descubra o voto do seu representante</Participantes>
                    <ContainerInput>
                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' placeholder='Voto'>
                            <option value='option1'>À favor</option>
                            <option value='option2'>Contra</option>
                            <option value='option3'>Nulo</option>
                        </Select>

                        <Select bg="white" w='45vw' h='5vh' borderRadius='28.6px' placeholder='Partido'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </ContainerInput>
                    <InputComponent submitKeywords={keywords}/>
                </Pesquisa>
                <Resultados>
                    <CardPoliticoConteudo nome='Soraia Thronike' cor='green' imagem={senador} status='À favor' />
                </Resultados>
                <Menu barra='1' />
            </Container>
        </>
    )
}

export default ProjetoeVotac