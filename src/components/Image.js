import "../style sheets/image.css";

const Image = ({ className, src, alt, onClick }) => {
  if (!src) return <></>;

  const fileType = src.split(".").pop();
  if (fileType === "mp4")
    return (
      <video className={className} onClick={onClick} autoPlay loop disableRemotePlayback>
        <source src={src} type="video/mp4" />
      </video>
    );

  return <img className={className} loading="lazy" src={src} alt={alt} onClick={onClick} />;
};

export default Image;
