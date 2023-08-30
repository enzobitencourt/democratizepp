import { Imagem, Titulo, Texto } from "./styled"

function Object(props){
    return(
        <>
        <Imagem imagem={props.imagem}>
            <Titulo>
                <Texto>
                {props.texto}
                </Texto>
            </Titulo>   
        </Imagem>
        </>
    )
}

export default Object