import Headers from "../../components/Headers/Headers";
import Menu from "../../components/Menu/Menu";
import { ButtonFilter, Container, DivInput, InputNome, Img, ButtonSearch, Img1, ContainerResult, Titulo, Resultados } from "./styled";
import Filter from "../../Assets/IconFilter.svg";
import Search from "../../Assets/IconSearch.svg";
import { Modal, useDisclosure } from "@chakra-ui/react";
import FilterCandidatos from "../../components/FilterCandidatos/FilterCandidatos";
import { useState } from "react";
import FiltroCandidatos from "./FiltroCandidatos/FiltroCandidatos";

function PageVoto() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    
    const handleKeywordsSubmit = (tags, checkboxes) => {
        const selectedKeywords = tags.concat(checkboxes);
        onClose(); // Close the modal
        console.log(selectedKeywords);
    };

    const handleSearch =()=>{
        console.log(keywords)
        setSendKeywords(keywords)
    }

    return (
        <>
            <Container>
                <Headers titulo="Candidatos à presidência" subtitulo="Eleições 2022" />
                <DivInput>
                    <InputNome placeholder="Pesquisa por nome" />
                    <ButtonFilter onClick={onOpen}>
                        <Img src={Filter} />
                    </ButtonFilter>
                    <ButtonSearch onClick={handleSearch}>
                        <Img1 src={Search} />
                    </ButtonSearch>
                </DivInput>
                <ContainerResult>
                    <Titulo>Resultados</Titulo>
                    <Resultados>
                        {sendKeywords.length === 0 ? (
                            <div>Sem pesquisa</div>
                        ) : (
                            <FiltroCandidatos keywords={sendKeywords} />
                        )}
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
