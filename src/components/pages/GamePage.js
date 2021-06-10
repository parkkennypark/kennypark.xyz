import "../../style sheets/gamePage.css";
import "../../style sheets/modal.css";

import { useState } from "react";

import BackHeader from "../BackHeader";
import Image from "../Image";
import LinkButton from "../LinkButton";
import PhotosModal from "../PhotosModal";

const GamePage = ({ game }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModalIndex, setCurrentModelIndex] = useState(0);

  function openModal(open, index = -1) {
    setModalIsOpen(open);
    setCurrentModelIndex(index);
  }

  function prevImg() {
    var newIndex = currentModalIndex - 1;
    if (newIndex < 0) newIndex = game.screenshots.length - 1;
    setCurrentModelIndex(newIndex);
    console.log(newIndex, " ", game.screenshots.length);
  }

  function nextImg() {
    var newIndex = currentModalIndex + 1;
    if (newIndex >= game.screenshots.length) newIndex = 0;
    setCurrentModelIndex(newIndex);
    console.log(newIndex, " ", game.screenshots.length);
  }

  return (
    <div className="centered-div">
      <div className="container">
        <BackHeader link="/games" showHome="true" />

        {/* Header stuff */}
        <div className="project-header horizontal-layout">
          <img
            className="project-icon"
            src={game.projPath + "/" + game.icon}
            alt="uh oh"
          />
          <div className="project-short-description-div vertical-layout">
            <h1 className="project-title text-red">{game.name}</h1>
            {game.shortDescription}
          </div>
        </div>

        {/* Screenshots */}
        <div className="screenshot-div">
          {game.screenshots.map((imgPath, index) => (
            <Image
              key={index}
              className="screenshot"
              src={game.projPath + "/screenshots/" + imgPath}
              alt="uh oh"
              onClick={() => openModal(true, index)}
            />
          ))}
        </div>

        {game.body}
      </div>

      <PhotosModal
        open={modalIsOpen}
        srcPath={game.projPath + "/screenshots/"}
        images={game.screenshots}
        index={currentModalIndex}
        backingOnClick={() => openModal(false)}
        onPrevClick={() => prevImg()}
        onNextClick={() => nextImg()}
      />
    </div>
  );
};

export default GamePage;
