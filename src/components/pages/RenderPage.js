import "../../style sheets/renderPage.css";

import { useState } from "react";
import { useParams } from "react-router";

import BackHeader from "../BackHeader";
import Image from "../Image";
import PhotosModal from "../PhotosModal";
import RenderList from "../../assets/database/RenderList";
import FourOhFour from "./FourOhFour";

const RenderPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModalIndex, setCurrentModelIndex] = useState(0);

  let { renderStr } = useParams();

  if (!(renderStr in RenderList)) {
    return <FourOhFour />;
  }

  const render = RenderList[renderStr];

  function openModal(open, index = -1) {
    setModalIsOpen(open);
    setCurrentModelIndex(index);
  }

  function prevImg() {
    var newIndex = currentModalIndex - 1;
    if (newIndex < 0) newIndex = render.images.length - 1;
    setCurrentModelIndex(newIndex);
  }

  function nextImg() {
    var newIndex = currentModalIndex + 1;
    if (newIndex >= render.images.length) newIndex = 0;
    setCurrentModelIndex(newIndex);
  }
  return (
    <div className="centered-div">
      <div className="container">
        <BackHeader link="/renders" showHome="true" />

        {/* Title and description */}
        <div className="render-page-title">
          <h1>
            <span className="text-red">{render.name}</span> ({render.year})
          </h1>
          {render.description}
        </div>

        {/* Images */}
        <div className="render-page-images">
          {render.images.map((imgPath, index) => (
            <Image
              key={index}
              className="render-image"
              src={render.projPath + "/" + imgPath}
              alt={render.projPath + "/" + imgPath}
              onClick={() => openModal(true, index)}
            />
          ))}
        </div>
        {render.credits}
      </div>

      <PhotosModal
        open={modalIsOpen}
        srcPath={render.projPath + "/"}
        images={render.images}
        index={currentModalIndex}
        backingOnClick={() => openModal(false)}
        onPrevClick={() => prevImg()}
        onNextClick={() => nextImg()}
      />
    </div>
  );
};

export default RenderPage;
