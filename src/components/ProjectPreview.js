import "../style sheets/projectPreview.css";

import { Link, useRouteMatch } from "react-router-dom";

const ProjectPreview = ({ name, tagline, icon, link }) => {
  let match = useRouteMatch();
  return (
    <Link to={match.url + link} className="project-preview">
      <div className="vertical-layout text-div">
        <img
          className="project-list-icon"
          src={icon}
          alt="Wreck The Halls Icon"
        />
        <p className="text-name text-red text-center">{name}</p>
        {/* <p className="p2">{description}</p> */}
        <p className="text-tagline text-center">{tagline}</p>
        <br />
        {/* <p className="p2">{subDescription}</p> */}
      </div>
    </Link>
  );
};

export default ProjectPreview;
