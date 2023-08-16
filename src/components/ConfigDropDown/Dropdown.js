import {ChevronDownIcon} from "@chakra-ui/icons"
import { Botao, BotaoSair, Container, Conteudo, Unexpected } from "./styled"
import Favoritos from "../Favoritos/Favoritos"
import {useState} from 'react'


function ConfigDrop(){
    const [mostrarComponente, setMostrarComponente] = useState(true);

    return(
        <>
        <Container>
            <Conteudo>
                <Botao>
                    Editar Perfil
                </Botao>
            </Conteudo>
            <Conteudo>
                <Botao>
                    Portais de notícia
                    <ChevronDownIcon color="black"/>
                </Botao>
            </Conteudo>
            <Conteudo>
                <Botao>
                    Dar nota ao projeto
                    <ChevronDownIcon color="black"/>
                </Botao>
            </Conteudo>
            <Conteudo>
                <Botao onClick={() => setMostrarComponente(!mostrarComponente)}>
                Favoritos
                    <ChevronDownIcon color="black"/>
                </Botao>
                <Unexpected className={mostrarComponente ? "show-element" : null}>
                    {mostrarComponente && <Favoritos/>}
                </Unexpected>
            </Conteudo>
            <Conteudo>
                <BotaoSair>
                    Sair
                </BotaoSair>
            </Conteudo>
        </Container>
        </>
    )
}

export default ConfigDrop