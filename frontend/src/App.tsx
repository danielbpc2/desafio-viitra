import React, {useState,useEffect, createContext} from "react";
import "./App.css";

import Routes from "./routes";

const JwtContext = createContext('')

function App() {
  const storedJwt = localStorage.getItem('token');
  const [jwtToken, setJwtToken] = useState(storedJwt || '')
  
  return (
    <div className="App">
      <JwtContext.Provider value={jwtToken}>
        <Routes />
      </JwtContext.Provider>
    </div>
  );
}
export {JwtContext}
export default App;
