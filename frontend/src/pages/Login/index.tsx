import React, { ChangeEvent, FormEvent, useState } from "react";
import logo from "../../assets/viitrafio.svg";
import "./styles.css";

import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

interface TokenResponse {
  user: Object;
  token: string;
  error: string;
}

const Login = () => {
  const [formData, setFormdata] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState(false);
  const history = useHistory();

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    const response = await api.post<TokenResponse>("/login", formData);
    if (response.data.error === "Invalid username or password") {
      return handleLoginError();
    }
    const token = response.data.token;
    localStorage.setItem("token", token);

    history.push("/dashboard");
  }

  function handleLoginError() {
    setLoginError(true);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormdata({ ...formData, [name]: value });
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-content">
          <header>
            <Link to="/">
              <img className="login-logo" src={logo} alt="Vitrafio" />
            </Link>
          </header>
          <main>
            <div className="login-form">
              <form onSubmit={handleLogin}>
                <h1>Log-in</h1>
                {loginError ? "A senha ou usuário está errado" : ""}
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
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="login-button">
                  <span>
                    <FiLogIn />
                  </span>
                  <strong>Entrar</strong>
                </button>
                ou
                <Link to="/signin">Cadastre-se</Link>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;
