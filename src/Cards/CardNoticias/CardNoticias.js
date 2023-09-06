import { ContainerNot, ImgNot, Nottitulo, Portal, TextContainer } from "./styled"

function CardNoticias(props){
    const handleObjectClick = () => {
        // Redirect the user to the specified URL in a new tab when clicked
        window.open(props.url, '_blank');
      };

    return(
        <>
        <ContainerNot onClick={handleObjectClick}>
            <ImgNot imagem={props.img}/>
            <TextContainer>
                <Nottitulo>{props.titulo}</Nottitulo>
                <Portal>{props.local}</Portal>
            </TextContainer>
        </ContainerNot>
        </>
    )
}

export default CardNoticias