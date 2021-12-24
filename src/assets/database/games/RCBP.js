import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";

const androidLink =
    "https://play.google.com/store/apps/details?id=com.lonelybench.RCBP";
const iOSLink =
    "https://apps.apple.com/us/app/boxy-physics-research-center/id1412305838?ls=1";
const browserLink =
    "https://parkkennypark.itch.io/the-research-center-for-boxy-physics";

const name = "R.C.B.P";
const link = "/rcbp";
const projPath = "/images/games/RCBP";
const icon = "RCBP icon 256x256.png";
const screenshots = [
    "rcbp video.mp4",
    "iPhone 5.5 2020-01-19_14-12-43.png",
    "iPhone 5.5 2020-01-19_14-15-22.png",
    "iPhone 5.5 2020-01-19_14-16-21.png",
];
const tagline = "Game Jam Entry";
const shortDescription = (
    <pre>
        A simple puzzle game about controlling boxes with your mind.
        {"\n\n"}
        Made in a week for the GDQ Game Jam.
    </pre>
);
const body = (
    <div>
        <ProjectProperty property="Release Date" value="July 2017" />
        <ProjectProperty property="Development Time" value="One week" />
        <ProjectProperty
            property="Programs"
            value="Unity 3D, Adobe Illustrator"
        />
        <ProjectProperty
            property="Platforms"
            value={
                <>
                    <ExternalLink link={androidLink} text="Android" />,{" "}
                    <ExternalLink link={iOSLink} text="iOS" />,{" "}
                    <ExternalLink link={browserLink} text="Browser" />
                </>
            }
        />

        <pre>
            {"\n"}This was my first time participating in a game jam, and I'm
            really happy with the end result. The jam was completely open ended
            - no themes, rules, or any restrictions. I've never designed puzzles
            for a game before, and though there aren't many in the game, I was
            able to produce novel ways to play on the core mechanic.
            {"\n\n"}The game was ported to mobile post-jam.
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
    body
);
