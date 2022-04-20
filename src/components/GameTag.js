const GameTag = ({ bgColor, textColor, text, position }) => {
    return (
        <span
            className="game-tag"
            style={{
                backgroundColor: bgColor,
                color: textColor,
                top: position,
            }}
        >
            <p>{text}</p>
        </span>
    );
};

export default GameTag;
