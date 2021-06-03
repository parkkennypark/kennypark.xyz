import "../style sheets/projectPreview.css";

import { Link, useRouteMatch } from "react-router-dom";

const RenderPreview = ({ name, year, previewImage, link }) => {
  let match = useRouteMatch();
  return (
    <Link to={match.url + link} className="render-preview">
      <div className="vertical-layout text-div">
        <img className="render-preview-image" src={previewImage} alt="uh oh" />
        <p>
          <span className="text-name">{name}</span>, {year}
        </p>
      </div>
    </Link>
  );
};

export default RenderPreview;
