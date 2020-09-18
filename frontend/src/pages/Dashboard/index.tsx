import React, { useState, useEffect } from "react";
import "./styles.css";

import logo from "../../assets/viitrafio.svg";

import PersonItem from "../../Components/PersonItem";

const Dashboard = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "Daniel",
      email: "danielbpc@hotmail.com",
      cpf: "050.290.934-00",
      birthdate: "09/10/1993",
      cep: "51020-270",
      uf: "PE",
      city: "Recife",
      address: "Rua Faustino Porto, 200",
    },
    {
      id: 2,
      name: "Cassio",
      email: "cassiobpc@hotmail.com",
      cpf: "050.290.934-10",
      birthdate: "30/07/1990",
      cep: "51020-280",
      uf: "PE",
      city: "Serra Talhada",
      address: "Rua Aqui perto la longe, 200",
    },
  ]);

  return (
    <div className="dashboard-background">
      <div className="dashboard-content">
        <header>
          <img src={logo} alt="Viitrafio" className="logo" />
        </header>
        <main>
          <div className="dashboard-button">Cadastrar Novo Usuário</div>
          <div className="dashboard-list">
            <ul>
              {persons.map((person) => (
                <PersonItem key={person.id} personData={person} />
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
