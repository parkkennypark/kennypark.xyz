import { Route, Switch, Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
import Button from "../Button";
import head from "../../assets/images/Head.png";

var twitterHandle = "kennyparkpark";
var instagramHandle = "kennypark.png";

const TITLE = "Home";

const Home = () => {
  return (
    <div className="container">
      {/* Head and text */}
      <div id="header" className="horizontal-layout">
        <img id="head" src={head} alt="PANIC! Someting wong" />
        <div id="header-text">
          <p className="text-big">
            Hi! I'm <span className="text-red">Kenny Park</span>.
          </p>
          <p className="text-normal">
            I’m a 20 year old game developer, programmer, artist, and all around
            cool guy - though that last point is up for debate.
          </p>
          <br />
          <p>
            This website is a collection of my games, art, and other creative
            projects.
          </p>
        </div>
      </div>

      {/* Button row */}
      <div id="button-row" className="vertical-layout">
        <Button text="GAMES / APPLICATIONS" />
        <Button text="RENDERS / 3D WORK" />
        <Button text="OTHER PROJECTS" />
      </div>

      {/* Bottom links */}
      <div id="bottom-links">
        {/* Left side */}
        <label className="float-left">
          <Link to="/about">about/resume</Link>
        </label>

        {/* Right side */}
        <div className="float-right">
          <a
            href={"https://twitter.com/" + twitterHandle}
            target="_blank"
            rel="noreferrer"
          >
            twitter
          </a>
          <label className="text-normal"> | </label>
          <a
            href={"https://instagram.com/" + instagramHandle}
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
