import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import logo from "../../assets/viitrafio.svg";
import "./styles.css";

import { FiUpload } from "react-icons/fi";

import { Link } from "react-router-dom";
import axios from "axios";
import api from "../../services/api";

interface UFResponse {
  nome: string;
  sigla: string;
}
interface CityResponse {
  nome: string;
}

interface FormProps {
  handleSubmit: Function;
  id?: string | undefined;
  token?: string | undefined;
}

const PersonForm: React.FC<FormProps> = (props) => {
  
  const [ufs, setUfs] = useState<string[][]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");
    const [formData, setFormdata] = useState({
      name: "",
      email: "",
      cpf: "",
      birthdate: "",
      address: "",
      cep: "",
      phone: ""
    });

    useEffect(() => {
      if (props.id == undefined ){return};
      api.get(`/people/${props.id}`,{headers: {"Authorization": "Bearer " + props.token}}).then(response => {
        console.log(response.data)
        setFormdata({
        name: response.data.name,
        email: response.data.email,
        cpf: response.data.cpf,
        birthdate: response.data.birthdate,
        address: response.data.address,
        cep: response.data.cep,
        phone: response.data.phone})
        setSelectedUf(response.data.uf)
        setSelectedCity(response.data.city)
      })
    }
    , []);

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
    <div className="personForm-form">
      <form onSubmit={(event) => props.handleSubmit(event, {...formData, city: selectedCity, uf: selectedUf})}>
        <div className="field">
          <input
            onChange={handleChange}
            placeholder="Nome Completo"
            type="text"
            name="name"
            value={formData.name}
          />
        </div>
        <div className="field">
          <input
            onChange={handleChange}
            placeholder="E-mail"
            type="email"
            name="email"
            value={formData.email}
          />
        </div>
        <div className="field">
          <legend>Data de Nascimento</legend>
          <input
            onChange={handleChange}
            value={formData.birthdate}
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
            value={formData.cpf}
          />
        </div>
        <div className="field">
          <input
            onChange={handleChange}
            placeholder="Telefone"
            type="text"
            name="phone"
            value={formData.phone}
          />
        </div>
        <div className="field">
          <input
            onChange={handleChange}
            placeholder="CEP"
            type="text"
            name="cep"
            value={formData.cep}
          />
        </div>
        <div className="field-group">
          <div className="field">
            <select value={selectedUf} onChange={handleSelectUf} name="uf">
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
            value={formData.address}
          />
        </div>
        <button type="submit" className="personForm-button">
          <span>
            <FiUpload />
          </span>
          <strong>Cadastrar</strong>
        </button>
      </form>
    </div>
  );
};

export default PersonForm;
