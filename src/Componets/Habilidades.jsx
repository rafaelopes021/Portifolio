import React from "react";
import { Corpo, Skills } from "../style/habilidadesStyle";
import Html from "../assets/html5.svg";
import Css from "../assets/css3.svg";
import ReactImg from "../assets/react.svg";
import GitHub from "../assets/github.svg";
import StyledComponets from "../assets/styledComponets.png"


function Habilidades(){
    return (
        <Corpo>
            <h2>Habilidades</h2>
            <Skills>
                <li>
                    <img src={Html} alt="Logo HTML5" />
                    <h3>HTML5</h3>
                </li>
                <li>
                    <img src={Css} alt="Logo CSS3" />
                    <h3>CSS3</h3>  
                </li>
                <li>
                    <img src={ReactImg} alt="Logo React" />
                    <h3>REACT</h3>
                </li>
                <li>
                    <img src={GitHub} alt="Logo GitHub" />
                    <h3>GITHUB</h3>
                </li>
            </Skills>
            <Skills>
                <li>
                    <img src={StyledComponets} alt="Logo Styled Componets" />
                    <h3>STYLED COMPONETS</h3>
                </li>
                <li>
                    <img src={Css} alt="Logo CSS3" />
                    <h3>CSS3</h3>  
                </li>
                <li>
                    <img src={ReactImg} alt="Logo React" />
                    <h3>REACT</h3>
                </li>
                <li>
                    <img src={GitHub} alt="Logo GitHub" />
                    <h3>GITHUB</h3>
                </li>
            </Skills>
        </Corpo>
    )
}
export default Habilidades;