import { ContainerInput, InputNome, DivPesquisa, FilterButton, Img, SearchButton, Img1 } from "./styled"
import Filter from "../../Assets/IconFilter.svg"
import Search from "../../Assets/IconSearch.svg"
import {
    Modal,
    useDisclosure
} from '@chakra-ui/react'
import FilterDepsSens from "../FilterDeps&Sens/FilterDeps&Sens"


function InputComponent(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleKeywordsSubmit = (checkboxes) => {
        const selectedKeywords = checkboxes;
        onClose();
        props.submitKeywords(selectedKeywords)
    };

    return (
        <>
            <ContainerInput>
                <InputNome placeholder="Nome" />
                <DivPesquisa>
                    <FilterButton onClick={onOpen}>
                        <Img src={Filter} />
                    </FilterButton>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <FilterDepsSens onSubmitKeywords={handleKeywordsSubmit} />
                    </Modal>
                    <SearchButton>
                        <Img1 src={Search} />
                    </SearchButton>
                </DivPesquisa>
            </ContainerInput>
        </>
    )
}

export default InputComponent