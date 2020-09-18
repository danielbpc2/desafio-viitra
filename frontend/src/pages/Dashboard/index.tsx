import React, { useState, useEffect, useContext } from "react";
import "./styles.css";

import { Link } from "react-router-dom";
import logo from "../../assets/viitrafio.svg";

import PersonItem from "../../Components/PersonItem";
import api from "../../services/api";
import { JwtContext } from "../../App";

interface Person {
  id: number;
  name: string;
  email: string;
  cpf: string;
  birthdate: string;
  cep: string;
  uf: string;
  city: string;
  address: string;
  phone: string;
}
const Dashboard = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const token = useContext(JwtContext);

  useEffect(() => {
    api
      .get("/people", { headers: { Authorization: "Bearer " + token } })
      .then((response) => {
        setPersons(response.data);
      });
  }, []);

  function handleDelete(id: number) {
    const filteredPersons = persons.filter((person) => person.id !== id);
    api.delete(`/people/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    setPersons(filteredPersons);
  }

  return (
    <div className="dashboard-background">
      <div className="dashboard-content">
        <header>
          <Link to="/">
            <img src={logo} alt="Viitrafio" className="logo" />
          </Link>
        </header>
        <main>
          <a href="/createPerson" className="dashboard-button">
            Cadastrar Novo Usuário
          </a>
          <div className="dashboard-list">
            <ul>
              {persons.map((person) => (
                <PersonItem
                  key={person.id}
                  personData={person}
                  handleDelete={handleDelete}
                />
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
