import "../style sheets/projectList.css";

import RenderPreview from "./RenderPreview";

import RenderList from "../assets/database/RenderList";

const RendersTab = () => {
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
        <div>
            {/* <h2 className="page-title">Renders / 3D Work</h2> */}
            <div className="render-grid-container">{getRenders()}</div>
        </div>
    );
};

export default RendersTab;
