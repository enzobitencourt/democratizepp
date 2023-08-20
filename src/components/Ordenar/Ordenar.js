import { Container, DivOrdenar, OrdenarPor, TituloResults } from "./styled"
import { Select } from '@chakra-ui/react'

function Ordenar() {
    return (
        <>
            <Container>
                <TituloResults>Resultados</TituloResults>
                <DivOrdenar>
                    <OrdenarPor>Ordenar por</OrdenarPor>
                    <Select bg="none" border='none' w='37vw' _focus={{outline:'0', boxShadow:'0 0 0 0', border:'0 none'}} marginTop='-0.1vh' marginLeft='-3vw' h='3vh' alignContent='left' fontWeight='600' color='#767575' fontSize='15px' placeholder='selecione'>
                        <option value='option1'>ordem alfabética</option>
                        <option value='option2'>mais recente</option>
                        <option value='option3'>mais antigo</option>
                    </Select>
                </DivOrdenar>
            </Container>
        </>
    )
}

export default Ordenar