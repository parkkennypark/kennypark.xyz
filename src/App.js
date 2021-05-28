import "./index.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Home from "./components/pages/Home";
import Games from "./components/pages/Games";
import About from "./components/pages/About";

var versionNum = "0.1.4";

function App() {
  return (
    <Router>
      <div
        className="background"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p id="version-text">{"ver " + versionNum}</p>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Games">
            <Games />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route>
            <div className="container">PANIC 404 OH NO</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
