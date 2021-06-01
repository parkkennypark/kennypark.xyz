import "../style sheets/linkButton.css";

import { Link } from "react-router-dom";

const LinkButton = ({ text, link }) => {
  return (
    <Link draggable="false" className="link-btn" to={link}>
      <p className="text-center">{text}</p>
    </Link>
  );
};

export default LinkButton;
