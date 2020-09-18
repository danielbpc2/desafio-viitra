import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { JwtContext } from "../../App";
import logo from "../../assets/viitrafio.svg";
import api from "../../services/api";
import {FiArrowLeft} from 'react-icons/fi'
import "./styles.css";


import photo from "../../assets/personCardPhoto.svg";
interface Person{
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

interface DetailParams {
  id: string | undefined;
}
function Details() {
  const token = useContext(JwtContext)
  const {id} = useParams<DetailParams>();
  const [details, setDetails] = useState({ 
    name: "", 
    email: "", 
    cpf: "" ,
    birthdate: "", 
    cep: "" ,
    uf: "" ,
    city: "", 
    address: "", 
    phone: ""})

  useEffect(()=> {
    api.get<Person>(`/people/${id}`, {headers: {"Authorization": "Bearer " + token}}).then(response => {
      setDetails(response.data)
    })
  },[])

  const   {  name, 
    email, 
    cpf,
    birthdate, 
    cep,
    uf,
    city, 
    address, 
    phone} = details

  return (
    <div className="details-background">
    <div className="details-content">
      <header>
        <img className="logo" src={logo} alt="Viitrafio logo" />
      </header>
      <main>
        <img id="details-photo" src={photo} alt="Foto do usuario"/>
        <h3>Detalhes do usuário:</h3>
        <div className="details-info">Nome: {name}</div>
        <div className="details-info">CPF: {cpf}</div>
        <div className="details-info">Data de Nascimento: {birthdate}</div>
        <div className="details-info">Email: {email}</div>
        <div className="details-info">Telefone: {phone}</div>
        <div className="details-info">Cep: {cep}</div>
        <div className="details-info">Cidade: {city}/{uf}</div>
        <div className="details-info">Endereço: {address}</div>
      </main>
      <Link className="details-button" to='/dashboard'> <span>
                <FiArrowLeft />
              </span>
              <strong>Voltar</strong></Link>

      </div>
    </div>
  );
}

export default Details;
