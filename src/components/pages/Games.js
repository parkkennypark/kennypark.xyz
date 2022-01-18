import "../../style sheets/projectList.css";

import BackHeader from "../BackHeader";
import GamePreview from "../GamePreview";

import GameList from "../../assets/database/GameList";
import ApplicationList from "../../assets/database/ApplicationList";
import JamGameList from "../../assets/database/JamGameList";

const Games = () => {
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
                    <h2 className="page-title">GAMES</h2>
                </div>
                <div className="game-grid-container">{getGames(GameList)}</div>
                <div className="">
                    <h2 className="page-title">JAM GAMES</h2>
                </div>
                <div className="game-grid-container">
                    {getGames(JamGameList)}
                </div>
                <div className="">
                    <h2 className="page-title">APPLICATIONS</h2>
                </div>
                <div className="game-grid-container">
                    {getGames(ApplicationList)}
                </div>
            </div>
        </div>
    );
};

export default Games;
