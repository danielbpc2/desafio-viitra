import React, { FormEvent, useContext } from "react";
import logo from "../../assets/viitrafio.svg";
import "./styles.css";

import PersonForm from "../../Components/PersonForm";

import { Link, useHistory, useParams } from "react-router-dom";
import api from "../../services/api";
import { JwtContext } from "../../App";

interface EditParams {
  id: string | undefined;
}
const EditPerson = () => {
  const history = useHistory();

  const token = useContext(JwtContext)
  
  const {id} = useParams<EditParams>();
  
  function handleSubmit(event: FormEvent, formData: Object) {
    event.preventDefault()
    api.put(`/people/${id}`, formData, {headers: {"Authorization": "Bearer " + token}})
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
            <h1>Edição</h1>
            <PersonForm handleSubmit={handleSubmit} id={id} token={token}/>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EditPerson;
