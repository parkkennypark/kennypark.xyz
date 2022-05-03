import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home";
import HomeNew from "./components/pages/Home - New";
import Games from "./components/pages/Games";
import Renders from "./components/pages/Renders";
import OtherProjects from "./components/pages/OtherProjects";
import About from "./components/pages/About";
import Timeline from "./components/pages/Timeline";
import SiteInfo from "./components/pages/SiteInfo";
import GamePage from "./components/pages/GamePage";
import RenderPage from "./components/pages/RenderPage";
import KasaAvatarPage from "./components/pages/KasaAvatarPage";
import TechnicalDocuments from "./components/pages/TechnicalDocuments";
import FourOhFour from "./components/pages/FourOhFour";
import Waudible from "./components/pages/Waudible";

// const versionNum = "0.5.3";

function App() {
    return (
        <Router>
            <div
                className="background"
                style={{ display: "flex", justifyContent: "center" }}
            >
                {/* <p id="version-text">{"ver " + versionNum}</p> */}
                <Switch>
                    <Route exact path="/" component={HomeNew} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/games" component={Games} />
                    <Route exact path="/games/:gameStr" component={GamePage} />
                    <Route exact path="/renders" component={Renders} />
                    <Route
                        exact
                        path="/renders/:renderStr"
                        component={RenderPage}
                    />
                    <Route exact path="/other" component={OtherProjects} />
                    <Route
                        exact
                        path="/other/:projectStr"
                        component={GamePage}
                    />
                    <Route
                        exact
                        path="/technical-documents"
                        component={TechnicalDocuments}
                    />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/timeline" component={Timeline} />
                    <Route exact path="/site-info" component={SiteInfo} />
                    <Route
                        exact
                        path="/kasa-avatar-maker"
                        component={KasaAvatarPage}
                    />
                    <Route exact path="/Waudible" component={Waudible} />
                    <Route component={FourOhFour} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
