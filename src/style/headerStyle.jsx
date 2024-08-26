import styled from "styled-components";

export const StyleHeader = styled.header`
    background-color: #519394;
    height: 10vh;
    display: flex;
    border-bottom: solid;
    align-items: center;
    justify-content: center;
`
export const Navegacao = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 40vw;

    @media (max-width:800px){
        width: 100vw;
    }

    a{
        color: #2E2E2E;
        font-size: 18px;
        margin-left: 18px;
    }
`