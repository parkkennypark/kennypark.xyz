import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import BannerLink from "../../../components/BannerLink";
import { ggqfbDialogue } from "../CodeBlocks";
import CodeComponent from "../../../components/CodeComponent";
import Image from "../../../components/Image";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const docLink =
   "https://docs.google.com/document/d/18T5FZ8AJpwSW50QfMg56hI3y-6UL4rvLyymAA8fkJH4/edit?usp=sharing";

const name = "GG: Quest for Bread";
const link = "/ggqfb";
const projPath = "/images/games/GGQFB";
// const icon = "GGQFB icon 256x256.png";
const icon = "ggqfb_icon_630x500.png";
const screenshots = [
   "videoo.mp4",
   "22.03.16 Water.png",
   "22.03.16 Grass.png",
   "fortress.png",
   "scrn 4.png",
   "scrn 5.png",
   "scrn 3.png",
];
const tagline = "Action-Adventure";
const date = "WIP";
const engine = "Godot";
const shortDescription = (
   <pre>
      Full name: Gawr Gura: Quest for Bread.
      {"\n\n"}A time-traveling, action-platforming adventure fan-game I've been
      working on in my spare time featuring Hololive's Gawr Gura.
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
            <Tab>OVERVIEW</Tab>
            <Tab>GAMEPLAY</Tab>
            <Tab>ENEMY BEHAVIOR</Tab>
            <Tab>DIALOGUE SYSTEM</Tab>
            <Tab>CAMERA SYSTEM</Tab>
            <Tab>ART BREAKDOWN</Tab>
         </TabList>
         {/* Overview */}
         <TabPanel>
            <pre>
               I spent a lot of my quarantine watching a particular set of
               virtual streamers and their daily antics. I felt such a
               connection to a couple of the characters that I thought it would
               be incredibly fitting for them to have their own game - thus this
               project was born.
               <Image
                  className="description-img"
                  src={projPath + "/screenshots/banner.png"}
               />
               {"\n"}Currently, the underlying systems are mostly in place. This
               includes a smooth movement system, a fleshed out dialogue system
               with a custom syntax/parser, a cut-scene system, entity state
               machines, and combat. I've also established an efficient
               model/texture creation workflow. I'm now working hard on making
               the game's content.
               {"\n\n"}I've already learned a lot working on this project. From
               designing decoupled systems, to asset creation, to overall
               cohesive game design, this project is proving to be the
               culmination of all the skills I've gained working on games over
               the years.
               {/* {"\n\n"}n */}
            </pre>

            {/* <p className="text-red">Takeaways</p>
                <ul>
                    <li>
                        (Architecture) The composition pattern as well as
                        function modularity is crucial for code reuse and
                        reducing redundancy
                    </li>
                    <li>
                        (Architecture) State machines and state inheritance
                        makes entity behavior creation a breeze
                    </li>
                    <li>
                        (Architecture) Well designed systems are important, but
                        a functional system that has some issues is better than
                        one perpetually stuck in the design phase
                    </li>
                    <li>
                        (Design) Small things can make the biggest differences
                        in game-feel: screen shake, slow motion, and particles
                        may seem superficial but are important aspects of
                        gameplay feedback
                    </li>
                    <li>
                        (Art) Combining/manipulating different types of noise is
                        an easy way to make solid looking textures
                    </li>
                    <li>
                        (Art) Textures and colors are the biggest factors in
                        solidifying a game's visual identity
                    </li>
                    <li>
                        (Production) Establishing an efficient asset creation
                        pipeline early does wonders for development
                    </li>
                    <li>
                        (Production) Sprinkle smaller, fun tasks in with the
                        bigger ones to avoid burn-out
                    </li>
                </ul> */}
         </TabPanel>
         {/* Gameplay */}
         <TabPanel>
            <pre>
               As this is primarily a platformer, I wanted Gura's moveset to
               feel fluid and fast-paced. I also wanted platforming to blend
               seamlessly with the combat aspects of the game, which was the
               main motivation behind making the spin attack double as a
               platforming move.
               <Image
                  className="description-img"
                  src={projPath + "/screenshots/gameplay.mp4"}
                  autoVideo="true"
               />
               {"\n"}
               Because depth isn't easily perceived in a 3D game, Gura
               auto-targets platforming objects when performing a spin attack.
               To match this fluidity of movement in combat, Gura leaps towards
               targeted enemies automatically, similar to the Batman: Arkham
               City games. This means that combat is less about
               aiming/positioning than it is timing and dodging, which fits the
               rest of the gameplay themes well.
            </pre>
         </TabPanel>
         {/* Enemy Behavior */}
         <TabPanel>
            <pre>
               Though the combat in this game isn't complex, I wanted to keep
               enemies from clumping up when targeting the player. After some
               research, I took a lot of inspiration from this video by
               GameEndeavor and how he went about implementing his enemy's AI.
               <Image
                  className="description-img"
                  src={projPath + "/screenshots/combat.mp4"}
                  autoVideo="true"
               />
               {"\n"}
               Entities have a number of directions they consider, angled
               equally away from each other. Weights are then added to these
               directions to decide which are favorable, and which should be
               avoided. Directions towards the entity's target are favorable,
               while directions towards other entities are weighed negatively
               (to avoid clumping). These direction vectors are then summed,
               resulting in the direction the entity should move.
               {"\n\n"}
               I'm using a simple state machine setup for all the game's
               entities, including Gura. There are two main states: Move and
               Attack. Most other states inherit one of these classes. There are
               also supplementary states such as PlayAnimation and DoNothing,
               which both inherit the Move state.
               {"\n\n"}
               Chaining together these states with different exit parameters
               allows for surprisingly interesting behavior from this very
               simple implementation. Here is a sample enemy behavior:
               <Image
                  className="description-img"
                  src={projPath + "/screenshots/shrimp.mp4"}
                  autoVideo="true"
               />
               This moveset is done in the following state chain: Walk
               {
                  "(Move) -> Crouch (Move) -> Jump (Move) -> Land (Attack) -> Walk (Move)"
               }
               {"\n\n"}
               As a bonus, because entities are not bound to enemy/player
               classifications, I can easily make enemies turn against each
               other:
               <Image
                  className="description-img"
                  src={projPath + "/screenshots/enemy behavior.mp4"}
                  autoVideo="true"
               />
            </pre>
         </TabPanel>
         {/* Dialogue System */}
         <TabPanel>
            <pre>
               I coded a custom dialogue system for this project. The system
               includes a custom syntax parser, portrait support, and custom
               commands for various text effects, among other things.
               <Image
                  className="description-img"
                  src={projPath + "/screenshots/dialogue.mp4"}
                  autoVideo="true"
               />
               {"\n"}
               Here is an example of how dialogue is formatted in a text file.
               <CodeComponent
                  plain={"true"}
                  language={"wiki"}
                  caption={"Sample dialogue"}
                  code={ggqfbDialogue}
               />
            </pre>
         </TabPanel>
         {/* Camera System */}
         <TabPanel>
            <pre>
               I made a dynamic camera system that can interpolate between
               different camera states and positions - for example, seamlessly
               transitioning from gameplay into a cutscene.
               <Image
                  className="description-img"
                  src={projPath + "/screenshots/camera.mp4"}
                  autoVideo="true"
               />
               {"\n"}I implemented this using two scripts: a CameraBrain, and
               CameraNodes. The CameraBrain controls the actual camera's
               transformation as a singleton, and stores a target CameraNode
               whose camera values it copies. CameraNodes store transformation
               info as well as the smoothing speed when transitioning to and
               from this node.
               {"\n\n"}I'm using a stack to store the CameraNodes to switch back
               and forth between cameras without a CameraNode to need a
               reference to the previous CameraNode.
            </pre>
         </TabPanel>
         {/* Art Breakdown */}
         <TabPanel>
            It was important for me to establish a workflow that would allow me
            to make good looking environments efficiently.
            <Image
               className="description-img"
               src={projPath + "/screenshots/environments.png"}
            />
            To achieve this end, I layered various types of noise to create all
            the textures procedurally in Blender. I then export these seamless
            textures and import them into Godot for use.
            <Image
               className="description-img"
               src={projPath + "/screenshots/textures.png"}
            />
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
   true,
   true
);
