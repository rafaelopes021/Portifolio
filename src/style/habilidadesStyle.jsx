import styled from "styled-components";

export const Corpo = styled.section`
    display: flex;
    align-items: center;
    height: 90vh;
    background-color: #2E2E2E;
    font-size: 30px;
    color: #519394;
    flex-direction: column;

    @media (max-width: 800px){
        flex-direction: column;
        font-size: 20px;
        align-items: center;
        justify-content: center;

        h2{
            margin-bottom: 15px;
        }
    }
`

export const Skills = styled.ul`
    display: flex;
    width: 90vw;
    height: 50vh;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 20px;

    img{
        width: 10vw;
        margin-right: 150px;
        border-radius: 20px;
        background-color: #519394;
        align-items: center;
        justify-content: center;
    }
    .styledComponets{
        width: 70vw;
    }

    @media (max-width: 800px){
        width: 90vw;
        height: 30vh;
    
    li{
        width: 25vw;
        font-size: 15px;
        height: 10vh;
        text-align: center;
        color: #FFFFFF
    }
    
    img{
        margin-left: 15px;
        width: 15vw;
    }
        
    }
`