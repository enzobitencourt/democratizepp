import { useEffect } from "react"
import CardConteudos from "../../../Cards/CardConteudos/CardConteudos"
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, useDisclosure } from '@chakra-ui/react'

function ResultadosSens(props) {
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
        if (tipo === "Projetos/Matérias") {
            onClose()
        } else if (tipo === "Comissões") {
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
                    <CardConteudos ir='votacoes' titulo='Projeto de Lei 175/2022' partido='Partido: PT/ES' />
                    <CardConteudos ir='votacoes' titulo='Projeto de Lei 175/2022' partido='Partido: PT/ES' />
                </>
            )}
        </>
    )
}

export default ResultadosSens