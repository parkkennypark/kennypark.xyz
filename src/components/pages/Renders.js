import "../../style sheets/projectList.css";

import BackHeader from "../BackHeader";
import RenderPreview from "../RenderPreview";
// import LinkButton from "../LinkButton";

import RenderList from "../../assets/database/RenderList";

const Renders = () => {
  function getRenders() {
    var renders = [];
    for (const [link, render] of Object.entries(RenderList)) {
      renders.push(
        <RenderPreview
          key={link}
          name={render.name}
          year={render.year}
          previewImage={render.projPath + "/" + render.previewImage}
          link={link}
        />
      );
    }
    return renders;
  }

  return (
    <div className="centered-div">
      <div className="container">
        <BackHeader link="/" />
        <div className="">
          <h2 className="page-title">RENDERS / 3D WORK</h2>
        </div>
        <div className="render-grid-container">{getRenders()}</div>
        {/* <LinkButton text="Various" link="/virtual-labs" /> */}
      </div>
    </div>
  );
};

export default Renders;
