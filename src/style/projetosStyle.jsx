import styled from "styled-components"

export const Corpo = styled.body`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #2E2E2E;
    color: #519394;
    font-size: 30px;
    flex-direction: column;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`
export const Img = styled.img`
    width: 30vw;
    border-top-right-radius: 20px;
    border-top-left-radius:20px;

`
export const Sessao = styled.div`
    display: flex;
    height: 90vh;
    width: 60vw;
    align-items: center;
    justify-content: space-around;
   
    @media (max-width: 800px) {
        flex-direction: column;
        width: 60vw;
    }
`
export const Container = styled.section`
    width: 60vw;
    background-color: #519394;
    text-align: center;
    border-radius: 20px;
    color: #FFFFFF;
    font-size: 18px;
    margin: 30px;

    @media (max-width: 800px) {
        flex-direction: column;
        height: 50vh;
        width: 30vw;
    }
`

