import { styled } from "styled-components";

export const Botao = styled.button`
  width: 93vw;
  height: auto;
  min-height: 12vh;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  border-radius: 18.4px;
  border: 1px solid #000;
  padding: 2vh 0;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Adicione esta linha */
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  gap: 4vw;
`;

export const Infos = styled.div`
  display: flex;
  width: 76vw;
  flex-direction: column;
  gap: 2vw;
  margin-left: 5vw;
  justify-content: center;
`;

export const Gray = styled.div`
  background: #5b5858;
  width: 7vw;
  height: 100%; 
  position: absolute; 
  top: 0; 
  bottom: 0; 
  right: 0; 
  border-radius: 0px 18.4px 18.4px 0px;
`;


export const Titulo = styled.p`
    color: #000;
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
`

export const Partido = styled.p`
    color: #424242;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin:0;
    text-align: left;
`