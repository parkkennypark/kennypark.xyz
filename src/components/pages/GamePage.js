import "../../style sheets/gamePage.css";
import "../../style sheets/modal.css";

import { useState } from "react";
import { useParams } from "react-router";

import BackHeader from "../BackHeader";
import Image from "../Image";
import PhotosModal from "../PhotosModal";
import GameList from "../../assets/database/GameList";
import FourOhFour from "./FourOhFour";

const GamePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModalIndex, setCurrentModelIndex] = useState(0);

  let { gameStr } = useParams();

  console.log(gameStr);

  if (!(gameStr in GameList)) {
    console.log("Can't find gameStr ", gameStr);
    return <FourOhFour />;
  }

  const game = GameList[gameStr];

  function openModal(open, index = -1) {
    setModalIsOpen(open);
    setCurrentModelIndex(index);
  }

  function prevImg() {
    var newIndex = currentModalIndex - 1;
    if (newIndex < 0) newIndex = game.screenshots.length - 1;
    setCurrentModelIndex(newIndex);
  }

  function nextImg() {
    var newIndex = currentModalIndex + 1;
    if (newIndex >= game.screenshots.length) newIndex = 0;
    setCurrentModelIndex(newIndex);
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
