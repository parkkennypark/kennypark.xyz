import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";

const sourceLink = "https://github.com/parkkennypark/CS180-Final-Project";

const name = "JudgeMe";
const link = "/judgeme";
const projPath = "/images/games/JudgeMe";
const icon = "icon.png";
const screenshots = [
    "Mask group-4.png",
    "Mask group-1.png",
    "Mask group-2.png",
    "Mask group-3.png",
    "Mask group-5.png",
    // "Mask group.png",
];
const tagline = "Spotify API Webapp";
const date = "12/22";
const engine = "Django";
const shortDescription = (
    <pre>
        A webapp utilizing the Spotify API that generates playlists and analyzes
        your friends' music taste.
        {"\n\n"}
        Made in a team of five over three three-week sprints.
    </pre>
);
const body = (
    <div>
        <ProjectProperty
            property="Role"
            value="Front end designer, Database programmer"
        />
        <ProjectProperty property="Framework" value="Django, Tailwind" />
        <ProjectProperty property="Completion Date" value="December 2022" />
        <ProjectProperty property="Development Time" value="Three months" />
        <ProjectProperty
            property="Source code"
            value={<ExternalLink link={sourceLink} text={"Github"} />}
        />
        <pre></pre>
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
    engine
);
