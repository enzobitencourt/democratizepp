import { Container, DivOrdenar, OrdenarPor, TituloResults } from "./styled"
import { Select } from '@chakra-ui/react'

function Ordenar(props) {

    const handleOrdenar = (e) =>{
        props.ordenar(e.target.value)
        console.log(e.target.value)
    }

    return (
        <>
            <Container>
                <TituloResults>Resultados</TituloResults>
                <DivOrdenar>
                    <OrdenarPor>Ordenar por</OrdenarPor>
                    <Select bg="none" border='none' w='37vw'  onChange={(e) => handleOrdenar(e)} _focus={{outline:'0', boxShadow:'0 0 0 0', border:'0 none'}} marginTop='-0.1vh' marginLeft='-3vw' h='3vh' alignContent='left' fontWeight='600' color='#767575' fontSize='15px' placeholder='selecione'>
                        <option value='ordem alfabética'>ordem alfabética</option>
                        <option value='mais recente'>mais recente</option>
                        <option value='mais antigo'>mais antigo</option>
                    </Select>
                </DivOrdenar>
            </Container>
        </>
    )
}

export default Ordenar