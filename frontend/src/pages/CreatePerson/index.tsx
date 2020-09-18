import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import logo from "../../assets/viitrafio.svg";
import "./styles.css";

import PersonForm from "../../Components/PersonForm";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const CreatePerson = () => {
  const history = useHistory();

  function handleSubmit(event: FormEvent, formData: Object) {
    event.preventDefault();
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
            <PersonForm handleSubmit={handleSubmit} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CreatePerson;
