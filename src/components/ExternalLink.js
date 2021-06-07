const ExternalLink = ({ link, text }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
};

export default ExternalLink;
