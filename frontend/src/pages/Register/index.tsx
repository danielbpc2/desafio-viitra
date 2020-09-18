import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import logo from "../../assets/viitrafio.svg";
import "./styles.css";

import { Link } from "react-router-dom";
import axios from "axios";

interface UFResponse {
  nome: string;
}

const Register = () => {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
    cpf: "",
    birthdate: "",
    address: "",
  });

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get<UFResponse>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
      )
      .then((data) => console.log(data));
  }, []);

  function handleRegister(event: FormEvent) {
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormdata({ ...formData, [name]: value });
  }

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <div className="register-content">
          <header>
            <Link to="/">
              <img className="register-logo" src={logo} alt="Vitrafio" />
            </Link>
          </header>
          <main>
            <div className="register-form">
              <form onSubmit={handleRegister}>
                <h1>Cadastro</h1>
                <div className="field-group">
                  <div className="field">
                    <input
                      onChange={handleChange}
                      placeholder="E-mail"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="field">
                    <input
                      placeholder="Senha"
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <input
                    onChange={handleChange}
                    placeholder="Nome Completo"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="field">
                  <legend>Data de Nascimento</legend>
                  <input
                    onChange={handleChange}
                    type="date"
                    name="birthdate"
                    min="1800-01-01"
                    max={`${new Date().getFullYear()}-${(
                      "0" + new Date().getMonth()
                    ).slice(-2)}-${("0" + new Date().getDate()).slice(-2)}`}
                  />
                </div>
                <div className="field">
                  <input
                    onChange={handleChange}
                    placeholder="CPF"
                    type="text"
                    name="cpf"
                  />
                </div>
                <div className="field">
                  <input
                    onChange={handleChange}
                    placeholder="Telefone"
                    type="text"
                    name="phone"
                  />
                </div>
                <div className="field">
                  <input
                    onChange={handleChange}
                    placeholder="CEP"
                    type="text"
                    name="cep"
                  />
                </div>
                <div className="field-group">
                  <div className="field">
                    <select name="uf">
                      <option value="0">Selecione o seu Estado</option>
                    </select>
                  </div>
                  <div className="field">
                    <select name="city">
                      <option value="0">Selecione sua Cidade</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="register-button">
                  <span>icon</span>
                  <strong>Cadastrar</strong>
                </button>
                ou
                <Link to="/login">Já tenho conta</Link>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Register;
