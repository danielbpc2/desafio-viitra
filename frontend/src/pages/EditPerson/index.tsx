import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import logo from "../../assets/viitrafio.svg";
import "./styles.css";

import { FiUpload } from "react-icons/fi";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";

interface UFResponse {
  nome: string;
  sigla: string;
}
interface CityResponse {
  nome: string;
}

const EditPerson = () => {
  const history = useHistory();

  const [formData, setFormdata] = useState({
    email: "",
    password: "",
    cpf: "",
    birthdate: "",
    address: "",
    cep: "",
  });

  const [ufs, setUfs] = useState<string[][]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  useEffect(() => {
    axios
      .get<UFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
      )
      .then((response) => {
        const ufArray = response.data.map((uf) => [uf.sigla, uf.nome]);
        setUfs(ufArray);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === "0") return;

    axios
      .get<CityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const citiesArray = response.data.map((city) => city.nome);

        setCities(citiesArray);
      });
  }, [selectedUf]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    history.push("/dashboard");
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormdata({ ...formData, [name]: value });
  }

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }
  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
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
            <div className="editPerson-form">
              <form onSubmit={handleSubmit}>
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
                    <select
                      value={selectedUf}
                      onChange={handleSelectUf}
                      name="uf"
                    >
                      <option value="0">Selecione o seu Estado</option>
                      {ufs.map((uf) => (
                        <option key={uf[0]} value={uf[0]}>
                          {uf[1]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <select
                      onChange={handleSelectCity}
                      value={selectedCity}
                      name="city"
                    >
                      <option value="0">Selecione sua Cidade</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <input
                    onChange={handleChange}
                    placeholder="Endereço"
                    type="text"
                    name="address"
                  />
                </div>
                <button type="submit" className="editPerson-button">
                  <span>
                    <FiUpload />
                  </span>
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

export default EditPerson;
