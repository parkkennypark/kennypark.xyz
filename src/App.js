import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home";
import Games from "./components/pages/Games";
import Renders from "./components/pages/Renders";
import About from "./components/pages/About";
import Timeline from "./components/pages/Timeline";
import GamePage from "./components/pages/GamePage";
import RenderPage from "./components/pages/RenderPage";
import FourOhFour from "./components/pages/FourOhFour";

import GameList from "./assets/database/GameList";
import RenderList from "./assets/database/RenderList";

var versionNum = "0.5.1";

function App() {
  function getGamePage() {
    var path = window.location.pathname;

    if (path === "/games") {
      return <Games />;
    }

    var game;
    GameList.forEach((_game) => {
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

  function getRenderPage() {
    var path = window.location.pathname;

    if (path === "/renders") {
      return <Renders />;
    }

    var render;
    RenderList.forEach((_render) => {
      if (path === "/renders" + _render.link) {
        render = _render;
      }
    });

    if (render) {
      return <RenderPage render={render} />;
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
          <Route path="/renders">{getRenderPage}</Route>
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
