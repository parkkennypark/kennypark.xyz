import "../style sheets/projectList.css";

import HighlightPreview from "./HighlightPreview";

import GameList from "../assets/database/GameList";
import ApplicationList from "../assets/database/ApplicationList";
import JamGameList from "../assets/database/JamGameList";

const GamesTab = () => {
    return (
        <div className="render-grid-container">
            <HighlightPreview
                name={"XR Sloped Roofing Research"}
                type={"Research"}
                previewImage={
                    "/images/games/Sloped Roof/screenshots/UI Screenshot.png"
                }
                link={"games/sloped-roof"}
            />
            <HighlightPreview
                name={"Gawr Gura: Quest for Bread"}
                type={"Solo Game"}
                previewImage={"/images/games/GGQFB/screenshots/scrn 2.png"}
                link={"games/ggqfb"}
            />
            <HighlightPreview
                name={"Purdue Virtual Labs"}
                type={"Application"}
                previewImage={
                    "/images/games/Virtual Labs/screenshots/aerolab.png"
                }
                link={"games/virtual-labs"}
            />
            <HighlightPreview
                name={"Be Not Afraid"}
                type={"Team Game"}
                previewImage={
                    "/images/games/Be Not Afraid/screenshots/Town.png"
                }
                link={"games/be-not-afraid"}
            />
            {/* <HighlightPreview
                name={"Cozy Interior"}
                type={"Render"}
                previewImage={
                    "/images/renders/Cozy Interior/Relaxed Final Tagged.png"
                }
                link={"games/ggqfb"}
            /> */}
        </div>
    );
};

export default GamesTab;
