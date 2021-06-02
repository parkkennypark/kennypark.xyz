import "../style sheets/image.css";

const Image = ({ className, src, alt, expandable }) => {
  if (!src) return <></>;

  return <img className={className} src={src} alt={alt} />;
};

export default Image;
