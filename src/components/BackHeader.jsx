import "../style sheets/backHeader.css";

import { useNavigate } from "react-router-dom";

const BackHeader = ({ link, showHome }) => {
    let navigate = useNavigate();

    function goBack() {
        navigate(link);
    }

    function goHome() {
        navigate("/");
    }

    return (
        <div id="back-header-div">
            <label id="back-button" onClick={goHome}>
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
