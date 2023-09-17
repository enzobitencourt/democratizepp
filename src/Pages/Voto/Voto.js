import Headers from "../../components/Headers/Headers";
import Menu from "../../components/Menu/Menu";
import { ButtonFilter, Container, DivInput, InputNome, Img, ButtonSearch, Img1, ContainerResult, Titulo, Resultados } from "./styled";
import Filter from "../../Assets/IconFilter.svg";
import Search from "../../Assets/IconSearch.svg";
import { Modal, useDisclosure } from "@chakra-ui/react";
import FilterCandidatos from "../../components/FilterCandidatos/FilterCandidatos";
import { useState } from "react";
import FiltroCandidatos from "./FiltroCandidatos/FiltroCandidatos";
import Carregando from "../../components/Carregando/Carregando";

function PageVoto() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [keywords, setKeywords] = useState([]);
    const [sendKeywords, setSendKeywords] = useState([]);
    const loading = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [resetSearch, setResetSearch] = useState(false);
    const [inputCandidato, setInputCandidato] = useState();

    const handleKeywordsSubmit = (tags, checkboxes) => {
        const selectedKeywords = tags.concat(checkboxes);
        onClose(); // Close the modal
        setKeywords(selectedKeywords)
    };

    const handleSearch = () => {
        setInputCandidato("")
        setResetSearch(true);
        setInputCandidato(searchInput)
        setSendKeywords(keywords);
        setSearchInput("");
    }

    return (
        <>
            <Container>
                <Headers titulo="Candidatos à presidência" subtitulo="Eleições 2022" />
                <DivInput>
                    <InputNome 
                    placeholder="Pesquisa por nome"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)} />

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
                            <Carregando loading={loading} />
                        ) : (
                            <FiltroCandidatos resetSearch={resetSearch} setResetSearch={setResetSearch} nome={inputCandidato} keywords={sendKeywords} />
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
