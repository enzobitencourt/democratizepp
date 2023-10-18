import { ContainerInput, InputNome, DivPesquisa, FilterButton, Img, SearchButton, Img1, InputNome1 } from "./styled"
import Filter from "../../Assets/IconFilter.svg"
import Search from "../../Assets/IconSearch.svg"
import {
    Modal,
    useDisclosure
} from '@chakra-ui/react'
import FilterDepsSens from "../FilterDeps&Sens/FilterDeps&Sens"
import { useState } from 'react'; // Importe o useRef do React

function InputComponent(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const tipo = props.tipo
    const voto = props.voto
    const partido = props.partido

    const [nome, setNome] = useState('')
    const [keywords, setKeywords] = useState([])

    const handleKeywordsSubmit = (checkboxes) => {
        const selectedKeywords = checkboxes;
        onClose();
        setKeywords(selectedKeywords)
    };

    const handleSearchClick = () => {
        props.submitKeywords(keywords, voto, partido)
        props.submitNome(nome)
        setKeywords([])
        setNome('')
    };

    return (
        <>
            {tipo === "Comissões" ?
                <ContainerInput>
                    <InputNome1
                        placeholder="Nome"
                        onChange={(e) => setNome(e.target.value)}
                        value={nome} />

                    <SearchButton onClick={handleSearchClick}> 
                        <Img1 src={Search} />
                    </SearchButton>

                </ContainerInput>

                :

                <ContainerInput>
                    <InputNome
                        placeholder="Nome"
                        onChange={(e) => setNome(e.target.value)}
                        value={nome} />
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
            }
        </>
    )
}

export default InputComponent
