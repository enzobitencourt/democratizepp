import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

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


const EstrelasAvaliacao = () => {
    const [rating, setRating] = useState(null);

    const handleMouseOver = (index) => {
        setRating(index);
    };

    const handleMouseLeave = () => {
        setRating(null);
    };

    const handleClick = (index) => {
        setRating(index);
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
            <Texto>Avaliação: {rating !== null ? rating : 0}</Texto>
        </DivStar>
    );
};

export default EstrelasAvaliacao;
