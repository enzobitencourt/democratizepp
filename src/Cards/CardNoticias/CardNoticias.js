import { ContainerNot, ImgNot, Nottitulo, Portal, TextContainer } from "./styled"
import Notimg from "../../Assets/img_not.png"

function CardNoticias(){
    return(
        <>
        <ContainerNot>
            <ImgNot src={Notimg}/>
            <TextContainer>
                <Nottitulo>Governo anuncia bloqueio de R$ 5,7 bilhões do Orçamento de 2022</Nottitulo>
                <Portal>G1 - Política</Portal>
            </TextContainer>
        </ContainerNot>
        </>
    )
}

export default CardNoticias