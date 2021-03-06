import React from "react";
import "./styles.css";

import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

import photo from "../../assets/personCardPhoto.svg";
interface PersonItemsProps {
  personData: {
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
  };

  handleDelete: Function;
}

const PersonItem: React.FC<PersonItemsProps> = (props) => {
  const { id, name, email, phone } = props.personData;

  return (
    <li className="card-person">
      <img src={photo} alt="foto do user" />
      <div className="card-person-infos">
        <Link to={`/persons/${id}`}>
          <h2>{name}</h2>
        </Link>
        <p>E-mail: {email}</p>
        <p>Telefone: {phone}</p>
      </div>
      <div className="card-person-footer">
        <Link to={`/person/edit/${id}`}>
          <h1>
            <FiEdit />
          </h1>
        </Link>
        <span onClick={() => props.handleDelete(id)}>
          <h1>
            <FiTrash2 />
          </h1>
        </span>
      </div>
    </li>
  );
};

export default PersonItem;
