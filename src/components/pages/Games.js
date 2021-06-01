import "../../style sheets/projectList.css";

import BackHeader from "../BackHeader";
import ProjectPreview from "../ProjectPreview";
import LinkButton from "../LinkButton";

import gamesAndApps from "../../assets/database/games and apps.json";

const Games = () => {
  const games = gamesAndApps.map((game) => {
    return (
      <ProjectPreview
        name={game.name}
        tagline={game.tagline}
        icon={game.iconPath}
        link={game.link}
      />
    );
  });
  return (
    <div className="centered-div">
      <div className="container">
        <BackHeader link="/" showHome="true" />
        <div className="">
          <h2 className="project-list-title text-center">
            GAMES / APPLICATIONS
          </h2>
        </div>
        <div className="grid-container">{games}</div>
        <LinkButton text="Virtual Labs" link="/virtual-labs" />
      </div>
    </div>
  );
};

export default Games;
