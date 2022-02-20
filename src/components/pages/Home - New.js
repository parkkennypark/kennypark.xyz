import "../../style sheets/home.css";
import "../../style sheets/react-tabs.css";

import { Link } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import Head from "../../components/Head";
import ExternalLinkImage from "../ExternalLinkImage";

import HighlightsTab from "../HighlightsTab";
import GamesTab from "../GamesTab";
import RendersTab from "../RendersTab";
import OtherTab from "../OtherTab";
import DocumentsTab from "../DocumentsTab";

const twitterHandle = "kennyparkpark";
const instagramHandle = "kennypark.png";
const githubUsername = "parkkennypark";

const Home = ({ showDocs }) => {
    return (
        <div className="centered-div">
            <div className="container">
                {/* Bottom Links */}
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
                        <ExternalLinkImage
                            link={"https://instagram.com/" + instagramHandle}
                            image="images/icons/Instagram Icon.png"
                            alt="instagram"
                        />
                    </div>
                </div>
                {/* Head and text */}
                <div id="header" className="horizontal-layout">
                    {/* <img id="head" src={head} alt="HEAD" /> */}
                    <Head />
                    <div id="header-text">
                        <h1>
                            Hi! I'm <span className="text-red">Kenny Park</span>
                            .
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

                <Tabs>
                    <TabList>
                        {/* <Tab>THE HIGHLIGHTS</Tab> */}
                        <Tab>GAMES / APPS</Tab>
                        <Tab>RENDERS</Tab>
                        <Tab>OTHER</Tab>
                        <Tab>DOCUMENTS</Tab>
                    </TabList>
                    {/* <TabPanel>
                        <HighlightsTab />
                    </TabPanel> */}
                    <TabPanel>
                        <GamesTab />
                    </TabPanel>
                    <TabPanel>
                        <RendersTab />
                    </TabPanel>
                    <TabPanel>
                        <OtherTab />
                    </TabPanel>
                    <TabPanel>
                        <DocumentsTab />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Home;
