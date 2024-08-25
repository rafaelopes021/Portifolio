import React from "react";
import ProjetoSimpsons from "../assets/projeto-simpsons.png";
import {Img, Container, Sessao, Corpo} from "../style/projetosStyle";

function Projetos(){
  return (
    <Corpo>
      <h2>Projetos</h2>
    <Sessao>
      <Container>
        <figure>
          <a href="https://sp7dvt.csb.app/" target="_blank">
            <Img src={ProjetoSimpsons} alt="Foto do projeto dos Simpsons" />
          </a>
        </figure>
        <h2>Os Simpsons</h2>
        <h3>P</h3>
        <p>...</p>
      </Container>
      
      <Container>
        <figure>
          <a href="" target="_blank">
          <Img src="" alt="" />
          </a>
        </figure>
        <h2>Projeto</h2>
        <h3>Descrição</h3>
        <p>...</p>
      </Container>
    </Sessao>
    </Corpo>
  )
}
export default Projetos;