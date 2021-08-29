import "../style sheets/projectPreview.css";

import { Link } from "react-router-dom";

const GamePreview = ({ name, tagline, icon, link }) => {
  // let match = useRouteMatch();
  return (
    <Link to={"games/" + link} className="project-preview">
      <div className="vertical-layout text-div">
        <img className="project-list-icon" src={icon} alt={name} />
        <p className="text-name text-red text-center">{name}</p>
        <p className="text-tagline text-center">{tagline}</p>
      </div>
    </Link>
  );
};

export default GamePreview;
