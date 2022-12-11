import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";

const browserLink = "https://kennypark.itch.io/bombhead";

const name = "BOMBHEAD";
const link = "/bombhead";
const projPath = "/images/games/BOMBHEAD";
const icon = "Icon.png";
const screenshots = ["bomb_video.mp4", "Menu.png", "Scrn1.png", "Scrn2.png"];
const tagline = "Explosive Platformer";
const date = "11/22";
const engine = "Godot";
const shortDescription = (
    <pre>
        A tight, fast-paced platformer where you need to complete levels before
        you explode.
        {"\n\n"}
        Made in 24(+1) hours for Purdue’s IGDC November Game Jam.
    </pre>
);
const body = (
    <div>
        <ProjectProperty property="Release Date" value="November 2022" />
        <ProjectProperty property="Role" value="Sole developer" />
        <ProjectProperty property="Programs" value="Godot, Blender" />
        <ProjectProperty property="Development Time" value="24(+1) hours" />
        <ProjectProperty
            property="Platforms"
            value={
                <ExternalLink
                    link={browserLink}
                    text="Browser, Windows, Linux, MacOS"
                />
            }
        />

        <pre>
            {"\n"}This game was made for a game jam I hosted at Purdue. The
            theme was "Short on Time."
            {"\n\n"}I'm really proud of how this game came out - I managed to
            pull together a lot of cohesiveness in the styling and polish for
            such a short time-frame. I am definitely interested in exploring
            this game further in the future.
            {"\n\n"}Interestingly enough, the very first thing I did for this
            game was grab the VHS shader by pend00 on godotshaders.com. It was
            really from there that the rest of the game fell into place.
            {"\n\n"}
        </pre>
        <p className="text-red">Takeaways</p>
        <ul>
            <li>(Design) Style is king</li>
            <li>(Design) A game's concept can start from anywhere</li>
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
    engine,
    true
);
