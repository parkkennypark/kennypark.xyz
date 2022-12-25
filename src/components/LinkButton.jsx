import "../style sheets/linkButton.css";

import { Link } from "react-router-dom";

const LinkButton = ({ text, link, className }) => {
    return (
        <Link draggable="false" className={className} to={link}>
            <p className="text-center">{text}</p>
        </Link>
    );
};

export default LinkButton;
