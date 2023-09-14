import Headers from "../../components/Headers/Headers";
import Menu from "../../components/Menu/Menu";
import { ButtonFilter, Container, DivInput, InputNome, Img, ButtonSearch, Img1, ContainerResult, Titulo, Resultados } from "./styled";
import Filter from "../../Assets/IconFilter.svg";
import Search from "../../Assets/IconSearch.svg";
import CardCandidato from "../../Cards/CardCandidato/CardCandidato";
import { Modal, useDisclosure } from "@chakra-ui/react";
import FilterCandidatos from "../../components/FilterCandidatos/FilterCandidatos";
import candidatos from "../../LogicaCandidatos/database.json";

function PageVoto() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    console.log(candidatos)

    const handleKeywordsSubmit = (tags, checkboxes) => {
        // Set the selected keywords when the "Enviar1" button is clicked
        const selectedKeywords = tags.concat(checkboxes);
        onClose(); // Close the modal
        console.log(selectedKeywords);
    };



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
                        <CardCandidato />
                    </Resultados>
                </ContainerResult>
                <Menu barra="0" />
            </Container>
            <Modal isOpen={isOpen} onClose={onClose}>
                <FilterCandidatos onSubmitKeywords={handleKeywordsSubmit} />
            </Modal>
        </>
    );
}

export default PageVoto;
