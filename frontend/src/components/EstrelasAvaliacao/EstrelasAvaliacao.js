import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { baseUrl } from '../../services/api';
import { useToast } from '@chakra-ui/react';

const StarContainer = styled.span`
  transition: color 0.2s;
  cursor: pointer;
  color: ${({ filled }) => (filled ? "#FFD700" : "#A0A0A0")};

  &:focus {
    outline: none;
  }
`;

const DivStar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5vh;
    padding: 2vh 0;
`

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Texto = styled.p`
    text-align: center;
    font-size: 16px;
`


const EstrelasAvaliacao = (props) => {
    const id = props.id
    const toast = useToast()
    const [rating, setRating] = useState(null);
    const [existRating, setExistRating] = useState(null)

    useEffect(() => {
        axios
            .get(`${baseUrl}/avaliacoes/avaliacao/${id}`)
            .then((response) => {
                setRating(response.data.data)
                setExistRating(response.data.data)
            })
            .catch((error) => {
                setRating(null)
                setExistRating(null)
            });
    }, [id])

    const handleMouseOver = (index) => {
        setRating(index);
    };

    const handleMouseLeave = () => {
        setRating(null);
    };

    const handleClick = (index) => {
        if (existRating === null && id) {
            const nota = {
                nota: index
            }

            axios.post(`${baseUrl}/avaliacoes/avaliacao/create/${id}`, nota)
                .then((response) => {
                    toast({
                        position: 'bottom-left',
                        title: 'Sucesso',
                        description: "Nota salva com sucesso!",
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                    });
                })
                .catch((error) => {
                    toast({
                        position: 'bottom-left',
                        title: 'Erro',
                        description: "Não foi possível salvar sua nota",
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                    });
                });
        } else {
            const nota = {
                nota: index
            }
            axios.put(`${baseUrl}/avaliacoes/avaliacao/${id}`, nota)
                .then((response) => {
                    toast({
                        position: 'bottom-left',
                        title: 'Sucesso',
                        description: "Nota salva com sucesso!",
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                    });
                })
                .catch((error) => {
                    toast({
                        position: 'bottom-left',
                        title: 'Erro',
                        description: "Não foi possível salvar sua nota",
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                    });
                });
        }
        setRating(index);
        setExistRating(index)

    };

    return (
        <DivStar>
            <Div>
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <StarContainer
                            key={index}
                            filled={index <= rating}
                            onMouseOver={() => handleMouseOver(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(index)}
                        >
                            <FaStar size={40} />
                        </StarContainer>
                    );
                })}
            </Div>
            <Texto>Avaliação: {rating !== null ? rating : 0}/5</Texto>
        </DivStar>
    );
};

export default EstrelasAvaliacao;
