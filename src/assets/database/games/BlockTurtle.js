import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";

const gameLink = "https://kennythepea.weebly.com/";

const name = "Block Turtle";
const link = "/block-turtle";
const projPath = "/images/games/Block Turtle";
const icon = "Block Turtle icon 256x256.png";
const screenshots = ["Fire.png", "Rocket.png", "Instructions.png"];
const tagline = "Relic of the Past";
const date = "2012";
const engine = "GM8";
const shortDescription = (
    <pre>
        A prototype I made in fifth grade using Game Maker 8.0 featuring Blocky
        the Turtle.
        {"\n\n"}
        One of the few games that still exist from my early days of game
        development.
    </pre>
);
const body = (
    <div>
        {/* <ProjectProperty property="Development" value="August 2017" /> */}
        <ProjectProperty property="Programs" value="Game Maker 8.0" />
        <ProjectProperty
            property="Platforms"
            value={
                <>
                    <ExternalLink link={gameLink} text="PC" /> (on my old
                    website)
                </>
            }
        />
        <pre>
            {"\n"}I have a lot of fond memories associated with this little game
            and its little blocky protagonist. My late elementary school days
            were filled with goofy ideas for games like this that would
            eventually lead me to an even greater passion for making things. My
            natural skew towards silliness still shines through very clearly in
            all my projects.
            {"\n\n"}There are a lot more small prototypes like this one from my
            days fiddling with Game Maker and Construct 2, but I unfortunately
            didn't learn the importance of backing up files until it was too
            late. I would love to play those dumb little games again.
            {"\n\n"}R.I.P. Block Turtle :(
        </pre>
    </div>
);

export default new Game(
    name,
    link,
    projPath,
    icon,
    screenshots,
    tagline,
    shortDescription,
    body,
    date,
    engine,
    true
);
