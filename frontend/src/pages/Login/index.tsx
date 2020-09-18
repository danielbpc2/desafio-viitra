import React, { ChangeEvent, FormEvent } from "react";
import logo from "../../assets/viitrafio.svg";
import "./styles.css";

import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  function handleLogin(event: FormEvent) {
    event.preventDefault();
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
                  <input placeholder="E-mail" type="email" name="email" />
                </div>
                <div className="field">
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                  />
                </div>
                <button onClick={handleLogin} className="login-button">
                  <span>
                    <FiLogIn />
                  </span>
                  <strong>Entrar</strong>
                </button>
                ou
                <a>cadastre-se</a>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;
