import React from "react";
import Rafael from "../assets/rafael.jpeg";
import { Img, Sessao, Div, Redes} from "../style/inicioStyle";
import Instagram from "../assets/instagram.png"
import Linkedin from "../assets/linkedin.png"
import Whats from "../assets/whats.png"
import Github from "../assets/github.png"

function Inicio(){
  return (
    <Sessao>
        <figure>
          <Img src={Rafael} alt="Minha foto" />
        </figure>
        <Div>
          <h1>Olá, eu sou Rafael Lopes</h1>
          <h3>Desenvolvedor Front-end</h3>
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
        </Div>
    </Sessao>
  )
}
export default Inicio;