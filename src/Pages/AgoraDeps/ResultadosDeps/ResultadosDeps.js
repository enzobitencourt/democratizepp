import { useEffect } from "react"
import CardConteudos from "../../../Cards/CardConteudos/CardConteudos"
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, useDisclosure } from '@chakra-ui/react'

function ResultadosDeps(props) {
    const tipo = props.tipo
    const tema = props.tema
    const partido = props.partido
    const nome = props.nome
    const autor = props.autor
    const ordem = props.ordenar
    const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: false })

    console.log(tipo)
    console.log(tema)
    console.log(partido)
    console.log(nome)
    console.log(autor)
    console.log(ordem)

    useEffect(() => {
        if (tipo === "Proposições") {
            onClose()
        } else if (tipo === "Eventos") {
            onClose()
        } else if (tipo === "Frentes") {
            onClose()
        } else {
            onOpen()
        }
    })

    return (
        <>
            {isVisible ? (
                <Alert borderRadius='20px' status='error'>
                    <AlertIcon />
                    <Box paddingRight='1vw'>
                        <AlertTitle>Erro!</AlertTitle>
                        <AlertDescription>
                            Efetue a pesquisa novamente e escolha uma opção válida no campo "Descubra" dos filtros acima...
                        </AlertDescription>
                    </Box>
                </Alert>
            ) : (
                <>
                    <CardConteudos ir='frentes' titulo='Frente Parlamentar em Defesa dos Direitos da Mulher' partido='Partido: PP/2019' />
                    <CardConteudos ir='frentes' titulo='Frente Parlamentar em Defesa dos Direitos da Mulher' partido='Partido: PP/2019' />
                </>
            )}
        </>
    )
}

export default ResultadosDeps