import { ContainerInput, InputNome, DivPesquisa, FilterButton, Img, SearchButton, Img1 } from "./styled"
import Filter from "../../Assets/IconFilter.svg"
import Search from "../../Assets/IconSearch.svg"

function InputComponent() {
    return (
        <>
            <ContainerInput>
                <InputNome placeholder="Nome" />
                <DivPesquisa>
                    <FilterButton>
                        <Img src={Filter} />
                    </FilterButton>
                    <SearchButton>
                        <Img1 src={Search} />
                    </SearchButton>
                </DivPesquisa>
            </ContainerInput>
        </>
    )
}

export default InputComponent