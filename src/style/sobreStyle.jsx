import styled from "styled-components";

export const Sessao = styled.section`
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
export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70vw;
    height: 60vh;
    font-size: 25px;
    color: #FFFFFF;
    align-items: center;
    flex-direction: column;
    

    @media (max-width: 800px) {
    width: 80vw;
    text-align: center;
    }
`