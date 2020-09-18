import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Login} path="/login" />
      <Route component={Register} path="/signin" />
    </BrowserRouter>
  );
}

export default Routes;
