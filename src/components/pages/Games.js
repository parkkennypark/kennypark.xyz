import "../../style sheets/projectList.css";

import BackHeader from "../BackHeader";
import GamePreview from "../GamePreview";
import LinkButton from "../LinkButton";

import GameList from "../../assets/database/GameList";

const Games = () => {
  const games = GameList.map((game, index) => {
    return (
      <GamePreview
        key={index}
        name={game.name}
        tagline={game.tagline}
        icon={game.projPath + "/" + game.icon}
        link={game.link}
      />
    );
  });

  return (
    <div className="centered-div">
      <div className="container">
        <BackHeader link="/" />
        <div className="">
          <h2 className="page-title">GAMES / APPLICATIONS</h2>
        </div>
        <div className="game-grid-container">{games}</div>
        {/* <LinkButton text="Virtual Labs" link="/virtual-labs" /> */}
      </div>
    </div>
  );
};

export default Games;
