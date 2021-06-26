import "../../style sheets/home.css";

import { Link } from "react-router-dom";

import LinkButton from "../LinkButton";
import Head from "../../components/Head";
import ExternalLink from "../ExternalLink";

const twitterHandle = "kennyparkpark";
const instagramHandle = "kennypark.png";

const Home = () => {
  return (
    <div className="centered-div">
      <div className="container">
        {/* Head and text */}
        <div id="header" className="horizontal-layout">
          {/* <img id="head" src={head} alt="HEAD" /> */}
          <Head />
          <div id="header-text">
            <h1>
              Hi! I'm <span className="text-red">Kenny Park</span>.
            </h1>
            <p className="p1">
              I’m a 20 year old game developer, programmer, artist, and all
              around cool guy - though that last point is up for debate.
            </p>
            <br />
            <p className="p1">
              This website is a collection of my games, art, and other creative
              projects.
            </p>
          </div>
        </div>

        {/* Button row */}
        <div id="button-row" className="vertical-layout">
          <LinkButton text="GAMES / APPLICATIONS" link="/games" />
          <LinkButton text="RENDERS / 3D WORK" link="/renders" />
          <LinkButton text="OTHER PROJECTS" link="/other-projects" />
        </div>

        {/* Bottom links */}
        <div id="bottom-links">
          {/* Left side */}
          <label className="float-left">
            <Link to="/about">about/contact</Link>
            {" | "}
            <Link to="/timeline">timeline</Link>
            {" | "}
            <Link to="/site-info">site info</Link>
          </label>

          {/* Right side */}
          <div className="float-right">
            <ExternalLink
              link={"https://twitter.com/" + twitterHandle}
              text="twitter"
            />
            {" | "}
            <ExternalLink
              link={"https://instagram.com/" + instagramHandle}
              text="instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
