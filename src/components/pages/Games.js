import "../../style sheets/projectList.css";

import BackHeader from "../BackHeader";
import GamePreview from "../GamePreview";
// import LinkButton from "../LinkButton";

import GameList from "../../assets/database/GameList";

const Games = () => {
  function getGames() {
    var games = [];
    for (const [link, game] of Object.entries(GameList)) {
      games.push(
        <GamePreview
          key={link}
          name={game.name}
          tagline={game.tagline}
          icon={game.projPath + "/" + game.icon}
          link={link}
        />
      );
    }
    return games;
  }

  return (
    <div className="centered-div">
      <div className="container">
        <BackHeader link="/" />
        <div className="">
          <h2 className="page-title">GAMES / APPLICATIONS</h2>
        </div>
        <div className="game-grid-container">{getGames()}</div>
        {/* <LinkButton text="Virtual Labs" link="/virtual-labs" /> */}
      </div>
    </div>
  );
};

export default Games;
