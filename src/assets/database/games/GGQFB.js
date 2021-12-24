import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";

const docLink =
    "https://docs.google.com/document/d/18T5FZ8AJpwSW50QfMg56hI3y-6UL4rvLyymAA8fkJH4/edit?usp=sharing";

const name = "GGQFB";
const link = "/ggqfb";
const projPath = "/images/games/GGQFB";
const icon = "GGQFB icon 256x256.png";
const screenshots = [
    "scrn 2.png",
    "scrn 3.png",
    "scrn 4.png",
    "scrn 5.png",
    "scrn 6.png",
];
const tagline = "WIP Action-Adventure";
const shortDescription = (
    <pre>
        Full name: Gawr Gura: Quest for Bread.
        {"\n\n"}A fan-game I've been working on in my spare time featuring
        Hololive's Gawr Gura.
    </pre>
);
const body = (
    <div>
        <ProjectProperty
            property="Documentation"
            value={<ExternalLink link={docLink} text="Google Doc" />}
        />
        <ProjectProperty
            property="Programs"
            value="Godot, Blender, Illustrator"
        />
        <pre>
            {"\n"}I spent a lot of my quarantine watching a particular set of
            virtual streamers and their daily antics. I felt such a connection
            to a couple of the characters that I thought it would be incredibly
            fitting for them to have their own game - thus this project was
            born.
            {"\n\n"}So far, I've been working on getting underlying systems up
            and running. This includes a fleshed out dialogue system with a
            custom syntax and parser, a cut-scene system, entity state machines,
            and combat. I've also established an efficient model/texture
            creation workflow.
            {"\n\n"}I've already learned a lot working on this project. From
            creating decoupled systems, to asset creation, to overall cohesive
            game design, this project is proving to be the culmination of all
            the skills I've gained working on games over the years.
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
