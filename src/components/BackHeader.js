import "../style sheets/backHeader.css";

import { useHistory } from "react-router-dom";

const BackHeader = ({ link, showHome }) => {
  let history = useHistory();

  function goBack() {
    history.push(link);
  }

  function goHome() {
    history.push("/");
  }

  return (
    <div id="back-header-div">
      <label id="back-button" onClick={goBack}>
        back
      </label>
      {showHome === "false" ? (
        <></>
      ) : (
        <label id="home-button" onClick={goHome}>
          home
        </label>
      )}
    </div>
  );
};

BackHeader.defaultProps = {
  link: "",
  showHome: "false",
};

export default BackHeader;
