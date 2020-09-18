import React from "react";
import "./styles.css";

import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

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
  };

  handleDelete?: Function;
}

const PersonItem: React.FC<PersonItemsProps> = (props) => {
  const {
    id,
    name,
    email,
    cpf,
    birthdate,
    cep,
    uf,
    city,
    address,
  } = props.personData;
  return (
    <li className="card-person">
      <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
      <div className="card-person-infos">
        <h2>{name}</h2>
        <p>
          Product description with <strong>relevant info</strong> only.
        </p>
      </div>
      <div className="card-person-footer">
        <Link to="">
          <h1>
            <FiEdit />
          </h1>
        </Link>
        <Link to="">
          <h1>
            <FiTrash2 />
          </h1>
        </Link>
      </div>
    </li>
  );
};

export default PersonItem;
