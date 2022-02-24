import "../style sheets/image.css";

const Image = ({ className, src, alt, onClick, autoVideo }) => {
    if (!src) return <></>;

    const fileType = src.split(".").pop();
    if (fileType === "mp4")
        return (
            <div className="video-div">
                <video
                    className={className}
                    onClick={onClick}
                    // autoPlay={autoVideo ? "true" : "false"}
                    // loop={autoVideo ? "true" : "false"}
                    loop
                    autoPlay
                    muted
                    // disableRemotePlayback
                    // controls
                >
                    <source src={src} type="video/mp4" />
                </video>
                {autoVideo ? (
                    <></>
                ) : (
                    <></>
                    // <div className="overlay">
                    //     <img
                    //         src="/images/video overlay.png"
                    //         className="overlay-image"
                    //         alt="video button"
                    //     />
                    // </div>
                )}
            </div>
        );

    return (
        <div class="img-div">
            <img
                className={className}
                loading="lazy"
                src={src}
                alt={alt}
                onClick={onClick}
            />
        </div>
    );
};

export default Image;
