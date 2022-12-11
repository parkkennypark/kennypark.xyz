import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import CodeComponent from "../../../components/CodeComponent";
import Image from "../../../components/Image";
import ExternalLink from "../../../components/ExternalLink";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const marioKartGithub = "https://github.com/parkkennypark/Mario-Kart-Clone";
const genshinGithub =
    "https://github.com/parkkennypark/Genshin-Elemental-Reactions";
const lethalLeagueGithub =
    "https://github.com/parkkennypark/Lethal-League-Clone";

const name = "Unity Prototypes";
const link = "/unity-prototypes";
const projPath = "/images/games/Unity Prototypes";
const icon = "icon.png";
const screenshots = [];
const tagline = "Assorted Projects";
const date = "12/22";
const engine = "Unity";
const shortDescription = (
    <pre>
        A collection of Unity prototypes implementing existing mechanics from
        some of my favorite games.
        {"\n\n"}Developed to expand on my prototyping skills. Source code is
        available for each project.
    </pre>
);
const body = (
    <div>
        <br />
        <ProjectProperty
            property="Development Time"
            value="Around a week per project"
        />

        <ProjectProperty property="Programs" value="Unity, Blender" />
        <br />
        <pre>
            This is a collection of three projects I made to expand on my
            prototyping skills in Unity. I've thought it would be fun to try to
            recreate mechanics from my favorite games for awhile, so I saw this
            as a good opportunity to explore some cool mechanics. I recreated
            the Mario Kart karting controller, Genshin Impact elemental system,
            and core Lethal League gameplay.
        </pre>
        <br />
        <Tabs>
            <TabList>
                <Tab>MARIO KART CONTROLLER</Tab>
                <Tab>GENSHIN IMPACT ELEMENTAL REACTIONS</Tab>
                <Tab>LETHAL LEAGUE GAMEPLAY</Tab>
            </TabList>
            {/* Mario Kart */}
            <TabPanel>
                <pre>
                    <ExternalLink
                        link={marioKartGithub}
                        text="Project Source Code"
                    />
                    {"\n\n"}
                    I've wanted to make a karting clone for awhile now, and
                    finally had the opportunity here. I was most interested in
                    implementing the ability to drive on curvy surfaces with
                    local gravity, which is a staple in the newer Mario Kart
                    games, as well as three-level drifting. Local track gravity
                    was essentially done by simply making all movement relative
                    to the last known floor normal the kart was on.
                    <Image
                        className="description-img"
                        src={projPath + "/screenshots/Mario Kart 1.mp4"}
                        autoVideo="true"
                    />
                    {"\n"}
                    Then, for fun, I downloaded some official Mario Kart 8 maps
                    from models-resource.com, and imported them into Unity after
                    making some tweaks in Blender. The results were surprisingly
                    good with minimal effort!
                    <Image
                        className="description-img"
                        src={projPath + "/screenshots/Mario Kart 2.mp4"}
                        autoVideo="true"
                    />
                </pre>
            </TabPanel>
            {/* Genshin */}
            <TabPanel>
                <pre>
                    <ExternalLink
                        link={genshinGithub}
                        text="Project Source Code"
                    />
                    {"\n\n"}
                    In Genshin Impact, different characters utilize one of seven
                    elements. These elements are applied as sort of status
                    effects to enemies upon attacking them. When elements are
                    applied in certain combinations, an elemental reaction
                    occurs.
                    <Image
                        className="description-img"
                        src={projPath + "/screenshots/Genshin.mp4"}
                        autoVideo="true"
                    />
                    {"\n"}
                    The main implementation for this prototype revolves around
                    reading from a spreadsheet to determine reactions. The below
                    spreadsheet is read from a file and placed into a 2D array.
                    This array is then accessed to determine if a given
                    combination has a respective reaction. My implementation
                    includes only the first four elements.
                    <Image
                        className="description-img"
                        src={
                            projPath +
                            "/screenshots/Genshin Reaction Chart Wiki.png"
                        }
                    />
                    Rather than having different attacks for the different
                    elements as in Genshin Impact, the player simply has a bow
                    and arrow that they can use to apply elemental damage to
                    enemies.
                </pre>
            </TabPanel>
            {/* Lethal League */}
            <TabPanel>
                <pre>
                    <ExternalLink
                        link={lethalLeagueGithub}
                        text="Project Source Code"
                    />
                    {"\n\n"}
                    Lethal League is a projectile fighting game where players do
                    damage through smacking a ball into each other. Every time
                    the ball is hit, its speed doubles and the delay before the
                    ball comes back into play increases. Players can hit the
                    ball up, straight, or down, but only downwards hits will
                    increase the ball's speed by any meaningful amount.
                    <Image
                        className="description-img"
                        src={projPath + "/screenshots/Lethal League.mp4"}
                        autoVideo="true"
                    />
                    {/* {"\n"}Of course the ball's actual velocity isn't actually
                    doubling every hit; the ball's speed can be anywhere from 0
                    to 1,000,000, so it wouldn't be smart for velocity to track
                    one to one with the displayed speed.  */}
                    {"\n"}Given my timeframe, I decided to focus mainly on
                    adding juice and style, which is essential to Lethal
                    League's identity as a game. This was done through screen
                    shake, chromatic aberration, some hue shifting, and a screen
                    space color inversion shader.
                    {"\n\n"}Because of this, I didn't put too much effort into
                    the hit registration. I'm using built in Unity physics to
                    determine collisions, which means when the ball is moving
                    too quickly, it will sometimes move so far in one physics
                    step that it totally misses the player. If I were to
                    continue this prototype, I would likely implement some form
                    of predictive collision to ensure consistent hit
                    registration.
                </pre>
            </TabPanel>
        </Tabs>
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
    false,
    true
);
