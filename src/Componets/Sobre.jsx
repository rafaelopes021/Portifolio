import React from "react";
import { Sessao, Div, Redes } from "../style/sobreStyle";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Whats from "../assets/whats.png";
import Github from "../assets/github.png";

function Sobre(){
  return (
    <Sessao>
        <h1>Sobre</h1>
        <Div>
          <p>Me chamo Rafael e no momento estou em transição de carreira para a área de Desenvolvimento Full Stack, hoje exerço a função de Aux. Administrativo. Sempre me identifiquei ser um profissional entusiasmado por resolução de problemas e inovações. Eu gosto de trabalhar em equipe e sempre busco otimizar processos para tornar a jornada de trabalho mais ágil, compreendendo a particularidade de cada pessoa e com foco no resultado geral.</p>
          <p>Nos últimos meses tive a oportunidade de estudar e realizar projetos no programa do Vai Na Web, uma rede de alta tecnologia e impacto social que tem como objetivo reduzir as desigualdades sociais e qualificar pessoas. Por meio dele aprimorei meus conhecimentos em lógica de programação, HTML5, CSS3, JavaScript, React, Git/GitHub, Styled Componets, SASS.</p>
        </Div>
        <Redes>
            <a href="https://www.instagram.com/rafalpzz_/" target="_blank">
              <img src={Instagram} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/rafaelopes021/" target="_blank">
              <img src={Linkedin} alt="" />
            </a>
            <a href="" target="_blank">
              <img src={Whats} alt="" />
            </a>
            <a href="https://github.com/rafaelopes021" target="_blank">
              <img src={Github} alt="" />
            </a>
          </Redes>
    </Sessao>
  )
}
export default Sobre;