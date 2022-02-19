import "../style sheets/projectList.css";

import GamePreview from "./GamePreview";

import GameList from "../assets/database/GameList";
import ApplicationList from "../assets/database/ApplicationList";
import JamGameList from "../assets/database/JamGameList";

const GamesTab = () => {
    function getGames(list) {
        var games = [];
        for (const [link, game] of Object.entries(list)) {
            games.push(
                <GamePreview
                    key={link}
                    name={game.name}
                    tagline={game.tagline}
                    icon={game.projPath + "/" + game.icon}
                    link={link}
                    isStarred={game.isStarred}
                />
            );
        }
        return games;
    }
    return (
        <div>
            <h2 className="page-title">Games</h2>
            <div className="game-grid-container">{getGames(GameList)}</div>
            <h2 className="page-title">Jam Games</h2>
            <div className="game-grid-container">{getGames(JamGameList)}</div>
            <h2 className="page-title">Applications</h2>
            <div className="game-grid-container">
                {getGames(ApplicationList)}
            </div>
        </div>
    );
};

export default GamesTab;
