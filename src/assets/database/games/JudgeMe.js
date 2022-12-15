import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";

const sourceLink = "https://github.com/parkkennypark/CS180-Final-Project";

const name = "JudgeMe";
const link = "/judgeme";
const projPath = "/images/games/JudgeMe";
const icon = "icon.png";
const screenshots = [
    "image 20.png",
    "image 21.png",
    "image 23.png",
    "image 24.png",
    "image 25.png",
    "image 27.png",
    "image 28.png",
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
        <ProjectProperty property="Technology" value="Django, Tailwind" />
        <ProjectProperty property="Completion Date" value="December 2022" />
        <ProjectProperty property="Development Time" value="Three months" />
        <ProjectProperty
            property="Source code"
            value={<ExternalLink link={sourceLink} text={"Github"} />}
        />
        <pre>
            {"\n"}For this project, we were prompted to make a social media
            program that implements profiles, posts, and comments that would all
            be sent to different clients through a dedicated multi-threaded
            server. These three items can also be edited at any time and
            automatically synced across clients. No starter code was provided.
            {"\n\n"}I played the role of the team lead for this project. To
            split up work, I made an outline of the various classes we needed
            and distributed work to my three other teammates. I was responsible
            for the program's concept, the GUI design and implementation, and
            the main functionality for post creation and server/client
            communication.
            {"\n\n"}
        </pre>

        <p className="text-red">Takeaways</p>
        <ul>
            <li>
                (Design) Style code should be contained in its own class(es),
                separate from content
            </li>
        </ul>
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
