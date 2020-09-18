import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import CreatePerson from "./pages/CreatePerson";
import EditPerson from "./pages/EditPerson";

function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Login} path="/login" />
      <Route component={Register} path="/signin" />
      <Route component={Dashboard} path="/dashboard" />
      <Route component={Details} path="/persons/:id" />
      <Route component={CreatePerson} path="/createPerson" />
      <Route component={EditPerson} path="persons/:id/edit" />
    </BrowserRouter>
  );
}

export default Routes;
