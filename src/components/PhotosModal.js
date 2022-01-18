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

    function isVideo() {
        var fileType = images[index].split(".").pop();
        return fileType === "mp4";
    }

    if (open === false) {
        return <></>;
    }

    return (
        <div className="modal-backing" onClick={backingOnClick}>
            {isVideo() ? (
                <video
                    className={"modal-image"}
                    onClick={handleChildClick}
                    autoPlay
                    // loop
                    controls
                    disableRemotePlayback
                >
                    <source src={srcPath + images[index]} type="video/mp4" />
                </video>
            ) : (
                <img
                    onClick={handleChildClick}
                    className="modal-image"
                    src={srcPath + images[index]}
                    alt={images[index]}
                />
            )}

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
