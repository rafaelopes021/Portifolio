import styled from "styled-components";

export const Corpo = styled.section`
    display: flex;
    align-items: center;
    height: 90vh;
    background-color: #2E2E2E;
    font-size: 30px;
    color: #519394
    ;
    flex-direction: column;

    @media (max-width: 800px){
        flex-direction: column;

    }
`

export const Skills = styled.ul`
    display: flex;
    width: 80vw;
    height: 30vh;
    border: solid;
    align-items: center;
    justify-content: center;

    img{
        width: 10vw;
        margin-right: 150px;
        border-radius: 20px;
        background-color: #519394;
    }
    .styledComponets{
        width: 70vw;
    }

`