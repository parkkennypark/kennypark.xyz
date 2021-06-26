import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home";
import Games from "./components/pages/Games";
import Renders from "./components/pages/Renders";
import OtherProjects from "./components/pages/OtherProjects";
import About from "./components/pages/About";
import Timeline from "./components/pages/Timeline";
import SiteInfo from "./components/pages/SiteInfo";
import GamePage from "./components/pages/GamePage";
import RenderPage from "./components/pages/RenderPage";
import FourOhFour from "./components/pages/FourOhFour";

import GameList from "./assets/database/GameList";
import RenderList from "./assets/database/RenderList";

const versionNum = "0.5.2";

function App() {
  function getGamePage() {
    const path = window.location.pathname;
    if (path === "/games") {
      return <Games />;
    }

    var gameStr = path.substr(6);
    return <GamePage gameStr={gameStr} />;
  }

  function getRenderPage() {
    const path = window.location.pathname;
    if (path === "/renders") {
      return <Renders />;
    }

    var renderStr = path.substr(8);
    return <RenderPage renderStr={renderStr} />;
  }

  return (
    <Router>
      <div
        className="background"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* <p id="version-text">{"ver " + versionNum}</p> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/games/:gameStr" component={GamePage} />
          <Route exact path="/renders">
            {getRenderPage}
          </Route>
          <Route exact path="/other-projects" component={OtherProjects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/timeline" component={Timeline} />
          <Route exact path="/site-info" component={SiteInfo} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
