import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
// import Home from "./components/pages/Home";
import HomeNew from "./components/pages/Home - New";
// import Games from "./components/pages/Games";
// import Renders from "./components/pages/Renders";
// import OtherProjects from "./components/pages/OtherProjects";
import About from "./components/pages/About";
import Timeline from "./components/pages/Timeline";
import SiteInfo from "./components/pages/SiteInfo";
// import GamePage from "./components/pages/GamePage";
// import RenderPage from "./components/pages/RenderPage";
// import KasaAvatarPage from "./components/pages/KasaAvatarPage";
// import TechnicalDocuments from "./components/pages/TechnicalDocuments";
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
                <Routes>
                    <Route exact path="/" element={<HomeNew />} />
                    {/* <Route
                        exact
                        path="/games/:gameStr"
                        element={<GamePage />}
                    />
                    <Route
                        exact
                        path="/renders/:renderStr"
                        element={<RenderPage />}
                    />
                    <Route
                        exact
                        path="/other/:projectStr"
                        element={<GamePage />}
                    /> */}
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/timeline" element={<Timeline />} />
                    <Route exact path="/site-info" element={<SiteInfo />} />
                    {/* <Route
                        exact
                        path="/kasa-avatar-maker"
                        element={<KasaAvatarPage />}
                    /> */}
                    <Route exact path="/Waudible" element={<Waudible />} />
                    <Route element={<FourOhFour />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
