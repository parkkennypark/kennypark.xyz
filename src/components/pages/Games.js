import "../../style sheets/projectList.css";

import BackHeader from "../BackHeader";
import ProjectPreview from "../ProjectPreview";

import icon from "../../assets/images/wreck the halls/Wreck The Halls Icon.png";
import database from "../../assets/database/database.json";

const Games = () => {
  return (
    <div className="container">
      <BackHeader />
      <div className="">
        <h2 id="project-list-title" className="text-center">
          GAMES / APPLICATIONS
        </h2>
      </div>
      {/* {database.Projects[0].} */}
      {/* <ProjectPreview
        icon={icon}
        title="Wreck The Halls"
        description="A Christmas (or Halloween?) themed twin-stick shooter about stopping the joy of the holiday season."
        subDescription="Made in 24 hours for Purdue’s IGDC Haloween Game Jam, and released later on mobile  with post-jam work."
      /> */}
      <ProjectPreview
        icon={icon}
        title="Wreck The Halls"
        description="A Christmas (or Halloween?) themed twin-stick shooter about stopping the joy of the holiday season."
        subDescription="Made in 24 hours for Purdue’s IGDC Haloween Game Jam, and released later on mobile  with post-jam work."
      />
    </div>
  );
};

export default Games;
