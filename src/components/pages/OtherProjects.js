import "../../style sheets/projectList.css";

import BackHeader from "../BackHeader";
import GamePreview from "../GamePreview";
// import LinkButton from "../LinkButton";

import OtherProjectsList from "../../assets/database/OtherProjectsList";

const OtherProjects = () => {
    function getGames() {
        var games = [];
        for (const [link, game] of Object.entries(OtherProjectsList)) {
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
                    <h2 className="page-title">OTHER PROJECTS</h2>
                </div>
                <div className="game-grid-container">{getGames()}</div>
                {/* <LinkButton text="Virtual Labs" link="/virtual-labs" /> */}
            </div>
        </div>
    );
};

export default OtherProjects;
