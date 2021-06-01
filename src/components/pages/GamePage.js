import "../../style sheets/gamePage.css";

import gamesAndApps from "../../assets/database/games and apps.json";

import BackHeader from "../BackHeader";

const GamePage = ({ game }) => {
  // function findGame() {
  //   var game;
  //   gamesAndApps.forEach((_game) => {
  //     if (name === _game.name) {
  //       console.log("ye");
  //       game = _game.name;
  //     }
  //   });
  //   console.log(game);
  // }

  return (
    <div className="centered-div">
      <div className="container">
        <BackHeader link="/games" showHome="true" />
        <div className="project-header horizontal-layout">
          <img className="project-icon" src={game.iconPath} alt="uh oh" />
          <div className="project-short-description-div vertical-layout">
            <h1 className="text-red">{game.name}</h1>
            <p className="p1">{game.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
