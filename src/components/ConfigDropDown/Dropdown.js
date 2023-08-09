import {ChevronDownIcon} from "@chakra-ui/icons"
import { Botao, BotaoSair, Container, Conteudo } from "./styled"
import Favoritos from "../Favoritos/Favoritos"

function ConfigDrop(){

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
                <Botao id="showorhide">
                Favoritos
                    <ChevronDownIcon color="black"/>
                </Botao>
                <Favoritos/>
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