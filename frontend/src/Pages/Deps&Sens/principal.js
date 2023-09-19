import React, { useState } from "react";
import CardEleito from "../../Cards/CardEleito/CardEleito";
import Headers from "../../components/Headers/Headers";
import Menu from "../../components/Menu/Menu";
import {
    Area,
    Container,
    ContainerEnd,
    ContainerInput,
    InputNome,
    DivPesquisa,
    FilterButton,
    Img,
    SearchButton,
    Img1,
    Esfumado,
    Espacos,
    Resultados,
    Sens,
    Titulo,
    ContainerMid,
    Deps
} from "./styled";
import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Filter from "../../Assets/IconFilter.svg";
import Search from "../../Assets/IconSearch.svg";
import { Modal, useDisclosure } from "@chakra-ui/react";
import CustomCarouselDep from "../../components/CarouselDep/CarouselDep";
import dep from "../../Assets/foto_dep_fav.jpeg";
import FilterDepsSens from "../../components/FilterDeps&Sens/FilterDeps&Sens";

function PrincipalDeps() {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const goToDeps = () => {
        navigate("/agoranacamara");
    };

    const goToSens = () => {
        navigate("/agoranosenado");
    };

    const handleKeywordsSubmit = (checkboxes) => {
        const selectedKeywords = checkboxes;
        onClose();
        setKeywords(selectedKeywords)
    };

    const [tipoSelect, setTipoSelect] = useState(""); 
    const [partidoSelect, setPartidoSelect] = useState(""); 
    const [nome, setNome] = useState("");
    const [keywords, setKeywords] = useState([])

    const handleSearchClick = () => {
        console.log("Tipo Select:", tipoSelect);
        console.log("Partido Select:", partidoSelect);
        console.log("Nome Input:", nome);
        console.log("Keywords: ", keywords);

        setKeywords([])
        setTipoSelect(""); 
        setPartidoSelect(""); 
        setNome(""); 
    };

    return (
        <>
            <Container>
                <Headers titulo="Câmara e Senado" subtitulo="Espaços de Poder" />
                <CustomCarouselDep />
                <ContainerMid>
                    <Titulo>Escolha a instituição desejada</Titulo>
                    <Espacos>
                        <Deps onClick={goToDeps}>
                            <Esfumado>
                                <Area>Câmara dos Deputados</Area>
                            </Esfumado>
                        </Deps>
                        <Sens onClick={goToSens}>
                            <Esfumado>
                                <Area>Senado Federal</Area>
                            </Esfumado>
                        </Sens>
                    </Espacos>
                </ContainerMid>
                <ContainerEnd>
                    <Titulo>Conheça os representantes</Titulo>
                    <ContainerInput>
                        <Select
                            bg="white"
                            w="45vw"
                            h="5vh"
                            borderRadius="28.6px"
                            placeholder="Tipo"
                            onChange={(e) => setTipoSelect(e.target.value)}
                            value={tipoSelect}
                        >
                            <option value="Deputado Federal">Deputado Federal</option>
                            <option value="Senador">Senador</option>
                        </Select>

                        <Select
                            bg="white"
                            w="45vw"
                            h="5vh"
                            borderRadius="28.6px"
                            placeholder="Partido"
                            onChange={(e) => setPartidoSelect(e.target.value)}
                            value={partidoSelect}
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </ContainerInput>
                    <ContainerInput>
                        <InputNome
                            placeholder="Nome"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                        />
                        <DivPesquisa>
                            <FilterButton onClick={onOpen}>
                                <Img src={Filter} />
                            </FilterButton>
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <FilterDepsSens onSubmitKeywords={handleKeywordsSubmit} />
                            </Modal>
                            <SearchButton onClick={handleSearchClick}>
                                <Img1 src={Search} />
                            </SearchButton>
                        </DivPesquisa>
                    </ContainerInput>
                </ContainerEnd>
                <Resultados>
                    <CardEleito imagem={dep} />
                    <CardEleito imagem={dep} />
                </Resultados>
                <Menu barra="1" />
            </Container>
        </>
    );
}

export default PrincipalDeps;