import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    font-family: 'Poppins';
    background-color: #F5F5F5;
    align-items: center;
    }
`

export const Main = styled.main`
    width: 100%;
    height: 100%;
`