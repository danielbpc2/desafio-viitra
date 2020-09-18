import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import logo from "../../assets/viitrafio.svg";
import "./styles.css";

import PersonForm from "../../Components/PersonForm";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const EditPerson = () => {
  const history = useHistory();

  function handleSubmit(event: FormEvent, formData: Object) {
    event.preventDefault();
    history.push("/dashboard");
  }

  return (
    <div className="editPerson-wrapper">
      <div className="editPerson-container">
        <div className="editPerson-content">
          <header>
            <Link to="/">
              <img className="editPerson-logo" src={logo} alt="Vitrafio" />
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

export default EditPerson;
