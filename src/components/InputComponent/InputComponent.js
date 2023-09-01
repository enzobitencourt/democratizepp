import { ContainerInput, InputNome, DivPesquisa, FilterButton, Img, SearchButton, Img1 } from "./styled"
import Filter from "../../Assets/IconFilter.svg"
import Search from "../../Assets/IconSearch.svg"
import {
    Modal,
    useDisclosure
  } from '@chakra-ui/react'
import FilterDepsSens from "../FilterDeps&Sens/FilterDeps&Sens"


function InputComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <ContainerInput>
                <InputNome placeholder="Nome" />
                <DivPesquisa>
                    <FilterButton onClick={onOpen}>
                        <Img src={Filter} />
                    </FilterButton>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <FilterDepsSens funcao={onClose}/>
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