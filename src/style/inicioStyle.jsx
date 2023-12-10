import styled from "styled-components";

export const Img = styled.img`
    width: 20vw;
    border-radius: 100px;

    @media (max-width: 800px) {
        width: 50vw;
    }
`
export const Sessao = styled.section`
    display: flex;
    align-items: center;
    height: 90vh;
    justify-content: space-around;
    background-color: #2E2E2E;

    @media (max-width: 800px){
        flex-direction: column;
    }
`
export const Div = styled.div`
    font-size: 45px;
    color: #FFFFFF;

    @media (max-width: 800px) {
    width: 95vw;
    text-align: left;
    font-size: 20px;
    }
`