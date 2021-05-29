import "../style sheets/image.css";

const Image = ({ src, alt }) => {
  if (!src) return <></>;

  return <img className="image" src={src} alt={alt} />;
};

export default Image;
