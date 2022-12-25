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
   hasCode,
}) => {
   // let match = useRouteMatch();
   return (
      <Link to={"games/" + link} className="project-preview">
         <div className="vertical-layout text-div">
            <img className="project-list-icon" src={icon} alt={name} />
            {/* <div className="tags">
                    {isStarred ? (
                        <img
                            className="tag-icon"
                            src="/images/Star.png"
                            alt="star"
                        />
                    ) : (
                        <></>
                    )}
                    {hasCode ? (
                        <img
                            className="tag-icon"
                            src="/images/Code Snippets.png"
                            alt="code snippet"
                        />
                    ) : (
                        <></>
                    )}
                </div> */}
            <GameTag
               text={date}
               bgColor="black"
               textColor="white"
               position="-0.3rem"
            />
            <GameTag
               text={engine}
               bgColor="white"
               textColor="black"
               position="0.8rem"
            />
            <p className="text-name text-red">{name}</p>
            <p className="text-tagline ">{tagline}</p>
         </div>
      </Link>
   );
};

export default GamePreview;
