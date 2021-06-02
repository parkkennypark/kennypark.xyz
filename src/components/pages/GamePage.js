import "../../style sheets/gamePage.css";

import BackHeader from "../BackHeader";
import Image from "../Image";
import LinkButton from "../LinkButton";

const GamePage = ({ game }) => {
  return (
    <div className="centered-div">
      <div className="container">
        <BackHeader link="/games" showHome="true" />
        <div className="project-header horizontal-layout">
          <img
            className="project-icon"
            src={game.projPath + game.icon}
            alt="uh oh"
          />
          <div className="project-short-description-div vertical-layout">
            <h1 className="project-title text-red">{game.name}</h1>
            {game.shortDescription}
          </div>
        </div>
        <div className="screenshot-div">
          {game.screenshots ? (
            game.screenshots.map((imgPath, index) => (
              <Image
                key={index}
                className="screenshot"
                src={game.projPath + "screenshots/" + imgPath}
                alt="uh oh"
              />
            ))
          ) : (
            <></>
          )}
        </div>
        {/* <LinkButton text="OVERVIEW" /> */}
        <div>{game.body}</div>
      </div>
    </div>
  );
};

export default GamePage;
