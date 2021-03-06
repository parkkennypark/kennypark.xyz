import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";

const browserLink = "https://kennypark.itch.io/corn-beans/";

const name = "Beans & Corn";
const link = "/beans-and-corn";
const projPath = "/images/games/Beans And Corn";
const icon = "icon 256x256.png";
const screenshots = ["scrn 01.png", "scrn 02.png", "scrn 03.png"];
const tagline = "Farm Micro-Manager";
const date = "09/21";
const engine = "Unity";
const shortDescription = (
    <pre>
        A farm-themed micro manager with beans and corn.
        {"\n\n"}
        Made in 48 hours for a game jam with a friend, with light post-jam work
        done later.
    </pre>
);
const body = (
    <div>
        <ProjectProperty property="Release Date" value="September 2021" />
        <ProjectProperty property="Role" value="Designer, Programmer" />
        <ProjectProperty property="Programs" value="Unity" />
        <ProjectProperty
            property="Development Time"
            value="48 hours, plus
      post-jam work"
        />
        {/* <ProjectProperty property="Team Size" value="Two" /> */}
        <ProjectProperty
            property="Platforms"
            value={
                <>
                    <ExternalLink link={browserLink} text="Browser" />
                </>
            }
        />

        <pre>
            {"\n"}This game was made for a small game-jam hosted by one of my
            game development TAs. The theme was "Closure."
            {"\n\n"}I participated with a really talented artist, Joey Belt,
            which was super refreshing since I usually work on things solo. It
            gave me a lot more space to breath and think, and I think the end
            result benefitted immensely because of it. I'm really happy with how
            it came out!
            {"\n\n"}
        </pre>
        <p className="text-red">Takeaways</p>
        <ul>
            <li>
                (Architecture) Game jams probably aren't the place for
                well-structured and optimized code
            </li>
            <li>(Art) Working with a dedicated artist is the bee's knees</li>
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
