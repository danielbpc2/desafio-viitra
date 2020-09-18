import React, { ChangeEvent, FormEvent, useState, useEffect, useContext } from "react";
import logo from "../../assets/viitrafio.svg";
import "./styles.css";

import PersonForm from "../../Components/PersonForm";

import { Link, useHistory } from "react-router-dom";
import { JwtContext } from "../../App";
import api from "../../services/api";

const CreatePerson = () => {
  const history = useHistory();

  const token = useContext(JwtContext)
 
  function handleSubmit(event: FormEvent, formData: Object) {
    event.preventDefault();
    api.post('/people', formData, {headers: {"Authorization": "Bearer " + token}})
    history.push("/dashboard");
  }

  return (
    <div className="createPerson-wrapper">
      <div className="createPerson-container">
        <div className="createPerson-content">
          <header>
            <Link to="/">
              <img className="createPerson-logo" src={logo} alt="Vitrafio" />
            </Link>
          </header>
          <main>
            <h1>Cadastro</h1>
            <PersonForm handleSubmit={handleSubmit} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CreatePerson;
