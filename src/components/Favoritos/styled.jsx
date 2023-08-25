import { styled } from "styled-components";

export const ContainerFav = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    gap: 3vw;
    width: 93vw;
    height: auto;
    margin-bottom: 2vh;
    margin-top: 2vh;

    ::-webkit-scrollbar {
    display: none;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
}
`

