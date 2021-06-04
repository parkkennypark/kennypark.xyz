import "../../style sheets/renderPage.css";

import BackHeader from "../BackHeader";
import Image from "../Image";

const RenderPage = ({ render }) => {
  return (
    <div className="centered-div">
      <div className="container">
        <BackHeader link="/renders" showHome="true" />
        <div className="render-page-title">
          <h1>
            <span className="text-red">{render.name}</span> ({render.year})
          </h1>
          {render.description}
        </div>
        <div className="render-page-images">
          {render.images.map((imgPath) => (
            <Image
              className="render-image"
              src={render.projPath + "/" + imgPath}
              alt={render.projPath + "/" + imgPath}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenderPage;
