import "../../style sheets/home.css";
import "../../style sheets/react-tabs.css";

import { Link } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import Head from "../../components/Head";
import ExternalLinkImage from "../ExternalLinkImage";

// import GamesTab from "../GamesTab";
// import RendersTab from "../RendersTab";
// import DocumentsTab from "../DocumentsTab";

const twitterHandle = "kennyparkpark";
const instagramHandle = "kennypark.png";
const githubUsername = "parkkennypark";
const linkedinUsername = "kenneth-park-581509163";

const Home = ({ showDocs }) => {
    return (
        <div className="centered-div">
            <div className="container">
                {/* Top Links */}
                <div id="bottom-links">
                    {/* Left side */}
                    <label className="float-left">
                        <Link to="/about">about</Link>
                        {" | "}
                        <a
                            href="Park_Kenny_Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            resume
                        </a>
                        {" | "}
                        <Link to="/timeline">timeline</Link>
                        {" | "}
                        <Link to="/site-info">site info</Link>
                    </label>

                    {/* Right side */}
                    <div className="float-right">
                        <ExternalLinkImage
                            link={"https://github.com/" + githubUsername}
                            image="images/icons/Github Icon.png"
                            alt="github"
                        />
                        <ExternalLinkImage
                            link={"https://twitter.com/" + twitterHandle}
                            image="images/icons/Twitter Icon.png"
                            alt="twitter"
                        />
                        {/* <ExternalLinkImage
                            link={"https://instagram.com/" + instagramHandle}
                            image="images/icons/Instagram Icon.png"
                            alt="instagram"
                        /> */}
                        <ExternalLinkImage
                            link={"https://linkedin.com/in/" + linkedinUsername}
                            image="images/icons/Linkedin Icon.png"
                            alt="linkedin"
                        />
                    </div>
                </div>
                {/* Head and text */}
                <div id="header" className="horizontal-layout">
                    {/* <img id="head" src={head} alt="HEAD" /> */}
                    <Head />
                    <div id="header-text">
                        <h1>
                            Hi! I'm <font color="#db3d42">Kenny Park</font>.
                        </h1>
                        <p className="p1">
                            I’m a 21 year old game developer, programmer,
                            artist, and all around cool guy - though that last
                            point is up for debate.
                        </p>
                        <br />
                        <p className="p1">
                            This website is a collection of my games, art, and
                            other creative projects.
                        </p>
                    </div>
                </div>
                {/* <Image
                    className="description-img"
                    src="/images/games/GGQFB/screenshots/gameplay.mp4"
                    autoVideo="true"
                /> */}
                <Tabs>
                    <TabList>
                        <Tab>GAMES / APPS</Tab>
                        <Tab>RENDERS</Tab>
                        <Tab>DOCUMENTATION</Tab>
                    </TabList>
                    <TabPanel>{/* <GamesTab /> */}</TabPanel>
                    <TabPanel>{/* <RendersTab /> */}</TabPanel>
                    <TabPanel>{/* <DocumentsTab /> */}</TabPanel>
                </Tabs>

                {/* <br />
                <h2 className="page-title">Renders</h2>
                <div style={{ border: "solid 0.2rem rgb(255, 203, 203)" }}>
                    <RendersTab />
                </div>
                <br />
                <h2 className="page-title">Documentation</h2>
                <div style={{ border: "solid 0.2rem rgb(255, 203, 203)" }}>
                    <DocumentsTab />
                </div> */}
            </div>
        </div>
    );
};

export default Home;
