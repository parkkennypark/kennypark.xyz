import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Home from "./components/pages/Home";
import Games from "./components/pages/Games";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <div
        className="background"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Switch>
          <Route path="/Games">
            <Games />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
