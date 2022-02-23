import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";

const browserLink = "https://kennypark.itch.io/ggj2022";

const name = "Blades n' Bullets";
const link = "/blades-n-bullets";
const projPath = "/images/games/Blades n' Bullets";
const icon = "icon 256x256.png";
const screenshots = ["video.mp4", "scrn1.jpg"];
const tagline = "Chaotic TDS";
const shortDescription = (
    <pre>
        A chaotic top-down shooter where you simultaneously control both a sword
        and a gun.
        {"\n\n"}
        Made with a friend in 48 hours for the 2022 Global Game Jam.
    </pre>
);
const body = (
    <div>
        <ProjectProperty property="Release Date" value="January 2022" />
        <ProjectProperty property="Role" value="Designer, Artist, Programmer" />
        <ProjectProperty property="Programs" value="Unity, Blender" />
        <ProjectProperty property="Development Time" value="48 hours" />
        <ProjectProperty
            property="Platforms"
            value={
                <>
                    <ExternalLink link={browserLink} text="Browser, Windows" />
                </>
            }
        />

        <pre>
            {"\n"}This game was made for the 2022 Global Game Jam. The theme was
            "Duality."
            {"\n\n"}I worked with a less experienced developer, and primarily
            took on an artist role - our intention was for this to be a quick
            way for my partner to grow his Unity scripting skills. I guided him
            through some core architecture concepts, such as composition
            (hitboxes, health, etc) and inheritance (enemy behaviors) to try to
            get him up and running with good practices early on.
            {"\n\n"}I'm happy with how cohesive of a project we made in such a
            short time. I'm particularly proud of the visual polish I managed to
            achieve. I'm also rather fond of the simple chunk generator I made
            for the scrolling background.
            {"\n\n"}
        </pre>
        <p className="text-red">Takeaways</p>
        <ul>
            <li>(Random) I think I enjoy teaching</li>
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
    body
);
