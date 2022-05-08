import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";
import { clownPath } from "../CodeBlocks";
import CodeComponent from "../../../components/CodeComponent";
import Image from "../../../components/Image";

const browserLink = "https://kennypark.itch.io/ggj2022";

const name = "CLOWN";
const link = "/clown";
const projPath = "/images/games/CLOWN";
const icon = "Icon.png";
const screenshots = [
    "video.mp4",
    "area 1.png",
    "area 2.jpg",
    "area 3.jpg",
    "area 4.jpg",
    "upgrades.jpg",
];
const tagline = "Procedural Shooter";
const date = "05/22";
const engine = "Godot";
const shortDescription = (
    <pre>
        A procedurally generated shooter where you fight for your life against
        killer clowns.
        {"\n\n"}
        Made in a team of three within a short turnaround time.
    </pre>
);
const body = (
    <div>
        <ProjectProperty property="Release Date" value="May 2022" />
        <ProjectProperty
            property="Role"
            value="Designer, Programmer, Artist, UI Designer"
        />
        <ProjectProperty property="Programs" value="Godot, Blender" />
        <ProjectProperty property="Development Time" value="5 Weeks" />
        {/* <ProjectProperty
            property="Platforms"
            value={
                <>
                    <ExternalLink link={browserLink} text="Browser, Windows" />
                </>
            }
        /> */}

        <pre>
            {"\n"}This game really took off with the idea of harvesting "clown
            tears," which I thought was in itself a funny concept. From there we
            expanded to a very simple gameplay loop: kill clowns, collect tears,
            and buy upgrades. The game has no end, opting instead for a looping
            system much like Nuclear Throne or Risk of Rain.
            {"\n\n"}Levels are procedurally generated using a grid system.
            Pre-made rooms are spawned at random to fill sections of the grid,
            with doorways added between them afterwards. I also worked on the
            minimap, to help avoid players from getting lost.
            <Image
                className="description-img"
                src={projPath + "/screenshots/room gen.mp4"}
                autoVideo="true"
            />
            <CodeComponent
                language={"python"}
                caption={"Room Builder.cs"}
                code={clownPath}
            />
            {"\n"}In addition to the level generation and enemy behavior, I also
            took the lead on the visual design of the game. I knew we didn't
            have a lot of time to spend on art, so I opted for a look that uses
            simple geometry and heavy post processing to sell a foreboding
            aesthetic.
            <Image
                className="description-img"
                src={projPath + "/screenshots/post processing.png"}
            />
            Here you can see the post-processing in action. I'm simply using
            depth fog and color mapping.
            {/* {"\n\n"} */}
        </pre>
        {/* <p className="text-red">Takeaways</p>
        <ul>
            <li>(Random) I think I enjoy teaching</li>
        </ul> */}
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
    true,
    true
);
