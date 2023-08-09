import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import SearchPlanetsPage from "./SearchPlanetsPage";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Star Wars App</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/planet">Search Planets</Link>
      </nav>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/planet" component={SearchPlanetsPage} />
      </Switch>
    </div>
  );
}
