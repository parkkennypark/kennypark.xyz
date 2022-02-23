import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";

const androidLink =
    "https://play.google.com/store/apps/details?id=com.lonelybench.DuckWarfare";
const iOSLink = "https://apps.apple.com/us/app/duck-warfare/id1269957119";

const name = "Duck Warfare";
const link = "/duck-warfare";
const projPath = "/images/games/Duck Warfare";
const icon = "Duck Warfare icon 256x256.png";
const screenshots = [
    "duck warfare video.mp4",
    "scrn 1.png",
    "scrn 2.png",
    "scrn 3.png",
    "scrn 4.png",
    "scrn 5.png",
    "scrn 6.png",
];
const tagline = "Quirky Tower Defense";
const shortDescription = (
    <pre>
        A tower-defense-type game featuring a large cast of ducks and
        Newgrounds-era stylings.
        {"\n\n"}
        My first major and monetized project.
    </pre>
);
const body = (
    <div>
        <ProjectProperty property="Role" value="Sole developer" />
        <ProjectProperty
            property="Platforms"
            value={
                <>
                    <ExternalLink link={androidLink} text="Android" />,{" "}
                    <ExternalLink link={iOSLink} text="iOS" />,{" "}
                </>
            }
        />
        <ProjectProperty property="Release Date" value="August 2017" />
        <ProjectProperty
            property="Development Time"
            value="One year and three months"
        />
        <ProjectProperty
            property="Programs"
            value="Unity, Adobe Illustrator,
    Blender"
        />

        <pre>
            {"\n"}Duck Warfare was my first major project. My goal for this game
            was to make a short, casual experience full of charm and quirks. I
            worked on this game solo, meaning I took care of the art, design,
            gameplay, scripting, and release - though the game wouldn't have
            been made without the support of my friends.
            {"\n\n"}With it still being one of my first projects, there are
            definite issues with the game (many being UI related) and it lacks
            polish overall. Regardless, I'm really happy with the game, and I
            think it has a lot of character!
            {"\n\n"}Amazingly, this game amassed over one million downloads. I
            still get emails from players asking for more levels or a second
            game, which always makes me smile. Maybe some day.
            {"\n\n"}
        </pre>

        <p className="text-red">Takeaways</p>
        <ul>
            <li>
                (Production) Find a workflow that allows content generation to
                be fun rather than tedious
            </li>
            <li>
                (Design) Moments that subvert expectations are the most
                memorable
            </li>
            <li>
                (Design) Difficulty should come in more forms than just
                increasing hp
            </li>
            <li>
                (Dev Habits) You should probably stop making backups by
                uploading entire archives of the game's files to a Google Drive
            </li>
        </ul>

        {/* <embed
            src="http://www.example.com"
            style="width:500px; height: 300px;"
        ></embed> */}
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
