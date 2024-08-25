import React from "react";
import Rafael from "../assets/foto-perfil.png";
import { Img, Sessao, Div} from "../style/inicioStyle";

function Inicio(){
  return (
    <Sessao>
        <figure>
          <Img src={Rafael} alt="Minha foto"/>
        </figure>
        <Div>
          <h1>Olá, eu sou Rafael Lopes</h1>
          <h3>Desenvolvedor Front-end</h3>
        </Div>
    </Sessao>
  )
}
export default Inicio;