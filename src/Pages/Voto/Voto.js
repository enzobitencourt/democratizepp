import Headers from "../../components/Headers/Headers"
import Menu from "../../components/Menu/Menu"
import { ButtonFilter, Container, DivInput, InputNome, Img, ButtonSearch, Img1, ContainerResult, Titulo, Resultados } from "./styled"
import Filter from "../../Assets/IconFilter.svg"
import Search from "../../Assets/IconSearch.svg"
import CardCandidato from "../../Cards/CardCandidato/CardCandidato"
import { Modal, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import FilterCandidatos from "../../components/FilterCandidatos/FilterCandidatos"

function PageVoto() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Container>
                <Headers titulo="Candidatos à presidência" subtitulo="Eleições 2022" />
                <DivInput>
                    <InputNome placeholder="Pesquisa por nome" />
                    <ButtonFilter onClick={onOpen}>
                        <Img src={Filter} />
                    </ButtonFilter>
                    <ButtonSearch>
                        <Img1 src={Search} />
                    </ButtonSearch>
                </DivInput>
                <ContainerResult>
                    <Titulo>Resultados</Titulo>
                    <Resultados>
                        <CardCandidato />
                        <CardCandidato />
                    </Resultados>
                </ContainerResult>
                <Menu />
            </Container>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <FilterCandidatos />
            </Modal>
        </>
    )
}

export default PageVoto