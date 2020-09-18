import React, { ChangeEvent, FormEvent, useState } from "react";
import logo from "../../assets/viitrafio.svg";
import "./styles.css";

import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  const [formData, setFormdata] = useState({ email: "", password: "" });

  function handleLogin(event: FormEvent) {
    event.preventDefault();
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
              <form>
                <h1>Log-in</h1>
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
                <button onClick={handleLogin} className="login-button">
                  <span>
                    <FiLogIn />
                  </span>
                  <strong>Entrar</strong>
                </button>
                ou
                <Link to="">cadastre-se</Link>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;
