import { styled } from "styled-components";

export const Div = styled.div`
    background: url(${(props) => props.imagem});
    background-size: cover;
    background-position: center;
    width: 12vh;
    height: 12vh;
    border-radius: 50%;
`

export const Esfumado = styled.div`
    background: rgba(0, 0, 0, 0.50);
    width: 12vh;
    height: 12vh;
    border-radius: 50%;
    color: #CDD1D0;
    font-feature-settings: 'clig' off, 'liga' off;
    font-weight: 400;
    justify-content: center;
    align-items: center;
    display: flex;
`