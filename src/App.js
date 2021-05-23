import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Home from "./components/pages/Home";
import Games from "./components/pages/Games";
import About from "./components/pages/About";

function App() {
  const HomePage = () => <Home />;
  const GamesPage = () => <Games />;
  const AboutPage = () => <About />;
  return (
    <Router>
      <div
        className="background"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Games" component={GamesPage} />
          <Route exact path="/About" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
