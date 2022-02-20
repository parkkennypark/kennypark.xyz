import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import BannerLink from "../../../components/BannerLink";
import {} from "../CodeBlocks";
import CodeComponent from "../../../components/CodeComponent";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const docLink =
    "https://docs.google.com/document/d/18T5FZ8AJpwSW50QfMg56hI3y-6UL4rvLyymAA8fkJH4/edit?usp=sharing";

const name = "GGQFB";
const link = "/ggqfb";
const projPath = "/images/games/GGQFB";
const icon = "GGQFB icon 256x256.png";
const screenshots = [
    "video.mp4",
    "scrn 2.png",
    "scrn 3.png",
    "scrn 4.png",
    "scrn 5.png",
    "scrn 7.png",
    "scrn 6.png",
];
const tagline = "WIP Action-Adventure";
const shortDescription = (
    <pre>
        Full name: Gawr Gura: Quest for Bread.
        {"\n\n"}A time-traveling, action-platforming adventure fan-game I've
        been working on in my spare time featuring Hololive's Gawr Gura.
    </pre>
);
const body = (
    <div>
        <BannerLink
            link={docLink}
            image="/images/games/GGQFB/Systems Documentation Banner.png"
            alt="Systems Documentation Banner"
        />
        <p className="text-tagline">Click me! ^</p>
        <br />
        <ProjectProperty property="Status" value="In Development" />
        <ProjectProperty property="Planned Release" value="Summer 2022" />
        {/* <ProjectProperty
            property="Documentation"
            value={<ExternalLink link={docLink} text="Google Doc" />}
        /> */}
        <ProjectProperty property="Role" value="Sole developer" />
        <ProjectProperty
            property="Programs"
            value="Godot, Blender, Illustrator, Figma"
        />
        <br />
        <Tabs>
            <TabList>
                <Tab style={{ width: "16.2%" }}>OVERVIEW</Tab>
                <Tab style={{ width: "16.2%" }}>MECHANICS</Tab>
                <Tab style={{ width: "16.2%" }}>ENEMY BEHAVIOR</Tab>
                <Tab style={{ width: "16.2%" }}>CAMERA SYSTEM</Tab>
                <Tab style={{ width: "16.2%" }}>DIALOGUE SYSTEM</Tab>
                <Tab style={{ width: "16.2%" }}>ART BREAKDOWN</Tab>
            </TabList>
            <TabPanel>
                <pre>
                    I spent a lot of my quarantine watching a particular set of
                    virtual streamers and their daily antics. I felt such a
                    connection to a couple of the characters that I thought it
                    would be incredibly fitting for them to have their own game
                    - thus this project was born.
                    {"\n\n"}So far, I've been working on getting underlying
                    systems up and running. This includes a smooth movement
                    system, a fleshed out dialogue system with a custom
                    syntax/parser, a cut-scene system, entity state machines,
                    and combat. I've also established an efficient model/texture
                    creation workflow.
                    {"\n\n"}I've already learned a lot working on this project.
                    From designing decoupled systems, to asset creation, to
                    overall cohesive game design, this project is proving to be
                    the culmination of all the skills I've gained working on
                    games over the years.
                    {"\n\n"}
                </pre>

                <p className="text-red">Takeaways</p>
                <ul>
                    <li>
                        <span>
                            (Architecture) The composition pattern as well as
                            function modularity is crucial for code reuse and
                            reducing redundancy
                        </span>
                    </li>
                    <li>
                        <span>
                            (Architecture) State machines and state inheritance
                            makes entity behavior creation a breeze
                        </span>
                    </li>
                    <li>
                        <span>
                            (Architecture) Well designed systems are important,
                            but a functional system that has some issues is
                            better than one perpetually stuck in the design
                            phase
                        </span>
                    </li>
                    <li>
                        <span>
                            (Design) Small things can make the biggest
                            differences in game-feel: screen shake, slow motion,
                            and particles may seem superficial but are important
                            aspects of gameplay feedback
                        </span>
                    </li>
                    <li>
                        <span>
                            (Art) Combining/manipulating different types of
                            noise is an easy way to make solid looking textures
                        </span>
                    </li>
                    <li>
                        <span>
                            (Art) Textures and colors are the biggest factors in
                            solidifying a game's visual identity
                        </span>
                    </li>
                    <li>
                        <span>
                            (Production) Establishing an efficient asset
                            creation pipeline early does wonders for development
                        </span>
                    </li>
                    <li>
                        <span>
                            (Production) Sprinkle smaller, fun tasks in with the
                            bigger ones to avoid burn-out
                        </span>
                    </li>
                </ul>
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
    true
);
