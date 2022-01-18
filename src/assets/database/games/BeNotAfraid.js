import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";

const browserLink = "https://teamk340.itch.io/be-not-afraid";
const devDoc =
    "https://docs.google.com/document/d/1ik0WnfbtjIfdT2cyz838gQ3DmHR8QaN1tIu9eChApsc/edit?usp=sharing";
const taskList =
    "https://docs.google.com/spreadsheets/d/1d_l47UbLsRsE2y-hsbCm0CDT2o_n2mj8TgWFh4lHa6U/edit#gid=2044647417";

const name = "Be Not Afraid";
const link = "/be-not-afraid";
const projPath = "/images/games/Be Not Afraid";
const icon = "BNA icon 256x256.png";
const screenshots = [
    "Be Not Afraid Video.mp4",
    "Town.png",
    "Raziel's Room.png",
    "Israfel Fight.png",
    "Boss Defeat.png",
];
const tagline = "Surreal Action Platformer";
const shortDescription = (
    <pre>
        A small, surreal action platformer about an angel trying to escape
        limbo.
        {"\n\n"}
        Made for a class project in a team of eight students using the Godot
        engine.
    </pre>
);
const body = (
    <div>
        <ProjectProperty
            property="Documents"
            value={
                <>
                    <ExternalLink link={devDoc} text="Design Document" />,{" "}
                    <ExternalLink link={taskList} text="Task List" />
                </>
            }
            text="Google Doc"
        />
        <ProjectProperty property="Roles" value="Lead Programmer, VFX artist" />
        <ProjectProperty property="Programs" value="Godot, Blender" />
        <ProjectProperty property="Release Date" value="October 2021" />
        <ProjectProperty property="Development Time" value="Six months" />
        <ProjectProperty
            property="Platforms"
            value={<ExternalLink link={browserLink} text="PC, Mac, Linux" />}
        />

        <pre>
            {"\n"}Starting out as a final project for a game dev course, this is
            a game I worked on with seven other students. You play as an unnamed
            being who must defeat other angels in order to escape limbo.
            {"\n\n"}As the lead programmer, I was responsible for coding many of
            the main systems, including movement, interactions, dialogue, and
            boss behavior. Because they were both new to most of us, I also led
            the charge in learning Godot and Github, and kept communication
            flowing actively in our development Discord server.
            {"\n\n"}On the VFX side of things, one of my main goals for this
            project was to give it a distinct and cohesive visual identity.
            Apart from the resolution down-sampling, this was achieved through a
            fair amount of post processing, color correction, and other visual
            effects. I think the effort was well worth it, as the effects really
            add to the experience and make it that much more interesting.
            {"\n\n"}This is the first major project that I worked on in a team.
            Thanks to our good chemistry and balance, development was pretty
            painless. Working solo is fun, but there is really something special
            about pulling the newest changes from Github and seeing the game
            come to life through the combined effort of the team.
            {/* {"\n\n"}There were a lot of firsts with this project. For one, Godot
            as well as its dynamically-typed language GDScript were both new to
            me, which took some getting used to from my Unity and C# background. */}
            {"\n\n"}
        </pre>

        <p className="text-red">Takeaways</p>
        <ul>
            <li>
                <span>
                    (Architecture) Signals are crucial to decouple systems,
                    especially when working in a team
                </span>
            </li>
            <li>
                <span>(Architecture) Gosh, state machines are super neat</span>
            </li>
            <li>
                <span>(Design) Focus on the fun</span>
            </li>
            <li>
                <span>
                    (Production) Take burn-out and menial tasks into account
                    when scoping out a game
                </span>
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
    body
);
