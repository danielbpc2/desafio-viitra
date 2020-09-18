import React from "react";
import logo from "../../assets/viitrafio.svg";

import "./styles.css";

function Details() {
  return (
    <div className="details-content">
      <header>
        <img src={logo} alt="" />
      </header>
      <div className="details-info">Nome</div>
      <div className="details-info">Data de Nascimento</div>
      <div className="details-info">Email</div>
      <div className="details-info">Telefone</div>
      <div className="details-info">Cep</div>
      <div className="details-info">Endereço</div>
      <div className="details-info">Estado</div>
      <div className="details-info">Cidade</div>
    </div>
  );
}

export default Details;
