const ExternalLinkImage = ({ link, image, alt }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <img
                src={image}
                alt={alt}
                style={{ height: "1.5rem", paddingLeft: "0.8rem" }}
            />
        </a>
    );
};

export default ExternalLinkImage;
