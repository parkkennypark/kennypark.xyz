import "../style sheets/linkButton.css";

import { Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";

const LinkButton = ({ text, onClick }) => {
  return (
    <Link draggable="false" to="/games" className="link-btn" onClick={onClick}>
      <p className="text-center">{text}</p>
    </Link>
  );
};

export default LinkButton;
