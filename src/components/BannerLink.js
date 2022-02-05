const BannerLink = ({ link, image, alt }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <img
                src={image}
                alt={alt}
                style={{
                    width: "100%",
                    // boxShadow: "0 0 5px rgb(0, 0, 0)",
                    filter: "drop-shadow(0px 0px 0.1rem #000)",
                }}
            />
        </a>
    );
};

export default BannerLink;
