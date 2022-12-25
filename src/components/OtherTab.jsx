import "../style sheets/projectList.css";

import GamePreview from "./GamePreview";
// import LinkButton from "../LinkButton";

import OtherProjectsList from "../assets/database/OtherProjectsList";

const OtherTab = () => {
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
                    date={game.date}
                    engine={game.engine}
                    isStarred={game.isStarred}
                />
            );
        }
        return games;
    }

    return (
        <div>
            {/* <h2 className="page-title">Other Projects</h2> */}
            <div className="game-grid-container">{getGames()}</div>
            {/* <LinkButton text="Virtual Labs" link="/virtual-labs" /> */}
        </div>
    );
};

export default OtherTab;
