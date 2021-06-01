import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home";
import Games from "./components/pages/Games";
import About from "./components/pages/About";
import Timeline from "./components/pages/Timeline";
import GamePage from "./components/pages/GamePage";
import FourOhFour from "./components/pages/FourOhFour";

import gamesAndApps from "./assets/database/games and apps.json";

var versionNum = "0.3.1";

function App() {
  function getGamePage() {
    var path = window.location.pathname;

    if (path === "/games") {
      return <Games />;
    }

    var game;
    gamesAndApps.forEach((_game) => {
      if (path === "/games" + _game.link) {
        game = _game;
      }
    });

    if (game) {
      return <GamePage game={game} />;
    } else {
      return <FourOhFour />;
    }
  }

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
          <Route path="/games/test">
            <GamePage />
          </Route>
          <Route path="/games">{getGamePage}</Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/timeline">
            <Timeline />
          </Route>
          <Route>
            <FourOhFour />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
