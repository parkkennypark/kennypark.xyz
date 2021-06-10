import "../style sheets/modal.css";

const PhotosModal = ({
  open,
  srcPath,
  images,
  index,
  backingOnClick,
  onNextClick,
  onPrevClick,
}) => {
  function handleChildClick(e) {
    e.stopPropagation();
  }

  function handlePrevImg(e) {
    e.stopPropagation();
    onPrevClick();
  }

  function handleNextImg(e) {
    e.stopPropagation();
    onNextClick();
  }

  if (open === false) {
    return <></>;
  }
  return (
    <div className="modal-backing" onClick={backingOnClick}>
      <img
        onClick={handleChildClick}
        className="modal-image"
        src={srcPath + images[index]}
        alt={images[index]}
      />
      <h2 className="modal-navbar disable-select">
        <p onClick={handlePrevImg} className="modal-navbar-prev-button">
          {"< "}
        </p>
        <p>{index + 1 + "/" + images.length}</p>
        <p onClick={handleNextImg} className="modal-navbar-next-button">
          {" >"}
        </p>
      </h2>
    </div>
  );
};

export default PhotosModal;
