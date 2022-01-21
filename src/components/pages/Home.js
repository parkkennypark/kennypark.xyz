import "../../style sheets/home.css";

import { Link } from "react-router-dom";

import LinkButton from "../LinkButton";
import Head from "../../components/Head";
import ExternalLink from "../ExternalLink";
import ExternalLinkImage from "../ExternalLinkImage";

const twitterHandle = "kennyparkpark";
const instagramHandle = "kennypark.png";
const githubUsername = "parkkennypark";

const Home = ({ showDocs }) => {
    return (
        <div className="centered-div">
            <div className="container">
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

                {/* Button row */}
                <div id="button-row" className="vertical-layout">
                    <LinkButton
                        text="GAMES / APPLICATIONS"
                        link="/games"
                        className="link-btn"
                    />
                    <LinkButton
                        text="RENDERS / 3D WORK"
                        link="/renders"
                        className="link-btn"
                    />
                    <LinkButton
                        text="OTHER PROJECTS"
                        link="/other"
                        className="link-btn"
                    />
                    <LinkButton
                        text="TECHNICAL DOCUMENTS"
                        link="/technical-documents"
                        className="link-btn"
                    />
                </div>

                {/* Bottom links */}
                <div id="bottom-links">
                    {/* Left side */}
                    <label className="float-left">
                        <Link to="/about">about</Link>
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
            </div>
        </div>
    );
};

export default Home;
