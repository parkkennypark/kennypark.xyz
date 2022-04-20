import "../style sheets/projectPreview.css";

import { Link } from "react-router-dom";
import GameTag from "./GameTag";

const GamePreview = ({
    name,
    tagline,
    icon,
    link,
    isStarred,
    date,
    engine,
}) => {
    // let match = useRouteMatch();
    return (
        <Link to={"games/" + link} className="project-preview">
            <div className="vertical-layout text-div">
                <img className="project-list-icon" src={icon} alt={name} />
                {isStarred ? (
                    <img className="star" src="/images/Star.png" alt="star" />
                ) : (
                    <></>
                )}
                <GameTag
                    text={date}
                    bgColor="black"
                    textColor="white"
                    position="0.2rem"
                />
                <GameTag
                    text={engine}
                    bgColor="white"
                    textColor="black"
                    position="1.3rem"
                />
                <p className="text-name text-red text-center">{name}</p>
                <p className="text-tagline text-center">{tagline}</p>
            </div>
        </Link>
    );
};

export default GamePreview;
