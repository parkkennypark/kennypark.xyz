import "../style sheets/projectPreview.css";

import { Link } from "react-router-dom";

const RenderPreview = ({ name, year, previewImage, link }) => {
    // let match = useRouteMatch();
    return (
        <Link to={"renders/" + link} className="render-preview">
            <p className="p1">
                <font color="#db3d42">{name}</font> ({year})
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

export default RenderPreview;
