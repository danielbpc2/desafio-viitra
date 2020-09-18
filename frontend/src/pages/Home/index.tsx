import React from "react";
import logo from "../../assets/viitrafio.svg";
import "./styles.css";

import { FiLogIn } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="home-content">
          <header>
            <img className="home-logo" src={logo} alt="Vitrafio" />
          </header>
          <main>
            <h1>Armazene os dados de seus usuários.</h1>
            <p>Salve os dados de seus usuários com rapidez e organização.</p>
            <a className="home-button">
              <span>
                <FiLogIn />
              </span>
              <strong>Entrar</strong>
            </a>
            ou
            <a>cadastra-se</a>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
