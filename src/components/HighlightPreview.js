import "../style sheets/projectPreview.css";

import { Link } from "react-router-dom";

const HighlightPreview = ({ name, type, previewImage, link }) => {
    // let match = useRouteMatch();
    return (
        <Link to={link} className="render-preview">
            <p className="p1">
                ({type}) <span className="text-red">{name}</span>
            </p>
            <div className="vertical-layout text-div">
                <img
                    className="render-preview-image"
                    src={previewImage}
                    alt={previewImage}
                />
            </div>
        </Link>
    );
};

export default HighlightPreview;
