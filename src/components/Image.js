import "../style sheets/image.css";

const Image = ({ className, src, alt, expandable }) => {
  if (!src) return <></>;

  const fileType = src.split(".").pop();
  if (fileType === "mp4")
    return (
      <video className={className} autoPlay loop>
        <source src={src} type="video/mp4" />
      </video>
    );

  return <img className={className} src={src} alt={alt} />;
};

export default Image;
