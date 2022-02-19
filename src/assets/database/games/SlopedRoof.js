import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const name = "XR Roofing Research";
const link = "/sloped-roof";
const projPath = "/images/games/Sloped Roof";
const icon = "icon 256x256.png";
const screenshots = [
    "Screenshot - 3rd person 04.PNG",
    "Screenshot - 1st person.PNG",
    "Screenshot - 3rd person 03.PNG",
    // "Screenshot - 3rd person 01.PNG",
    // "Screenshot - 3rd person 02.PNG",
    // "Screenshot - 3rd person 05.PNG",
    // "Screenshot - 3rd person 06.PNG",
];
const tagline = "Purdue Lab Simulations";
const shortDescription = (
    <pre>
        A mixed reality program I developed for a research project using the
        Varjo XR-3 headset.
        {"\n\n"}Developed in conjunction with Professor Sogand Hasanzadeh and
        her research students.
    </pre>
);
const body = (
    <div>
        {/* <ProjectProperty property="Development" value="August 2017" /> */}
        <ProjectProperty property="Roles" value="Programmer, UI designer" />
        <ProjectProperty property="Programs" value="Unity, Figma" />
        <ProjectProperty
            property="Development Time"
            value="October 2021 - Present"
        />
        <ProjectProperty property="Platform" value="PC, Varjo XR-3" />
        <br />
        <Tabs>
            <TabList>
                <Tab style={{ width: "19.5%" }}>OVERVIEW</Tab>
                <Tab style={{ width: "19.5%" }}>XR SETUP</Tab>
                <Tab style={{ width: "19.5%" }}>ANIMATION BLENDING</Tab>
                <Tab style={{ width: "19.5%" }}>DRONE BEHAVIOR</Tab>
                <Tab style={{ width: "19.5%" }}>DATA LOGGING</Tab>
            </TabList>
            <TabPanel>
                <pre>
                    This research project utilizes the passthrough capabilities
                    of the Varjo-XR3 to observe how participant behavior changes
                    based on the behavior of a virtual worker. Participants
                    install shingles on a physical roof installation, placed in
                    a virtual world with a virtual worker who acts in
                    predetermined ways.
                    {"\n\n"}I was responsible with building the entire program
                    while in active communication with the research professor
                    and students. The key things I handled were headset
                    integration, animation blending, positional tracking, data
                    logging, and UI design.
                </pre>
            </TabPanel>
            <TabPanel>
                <pre>
                    This is the physical roof setup. The headset's marker-based
                    tracking is used to map the physical roof into the virtual
                    world, where a mask is then placed to dictate the
                    passthrough area.
                    {"\n\n"}Three Vive Trackers were used to get the positions
                    of the participants' feet and waist to determine the safety
                    of their actions at any given time, and to trigger fall
                    conditions should they be too close to the edge. I made a
                    simple calibration process to determine what trackers would
                    be mapped to what body part.
                </pre>
            </TabPanel>
            <TabPanel>
                Animations were recorded using the OptiTrack Motive motion
                capture setup at the Envision Center. After the animations were
                cleaned up by an artist, they were sent to me for
                implementation. I used a simple state machine in conjunction
                with Unity's animation events to drive the worker's behavior.
            </TabPanel>
            <TabPanel>
                A drone is used in the scene to investigate how participants
                respond to non-human instruction while working. The drone has
                three main states - inactivity, inspection, and conveyance -
                which are driven through sequences of coroutines.
                <img
                    style={{ width: "100%" }}
                    src="/images/games/Sloped Roof/screenshots/Code Sample.png"
                ></img>
            </TabPanel>

            <TabPanel>
                Various data points needed to be recorded during the experiment
                to be analyzed by the researchers. I set up a DataManagement
                script that takes data from the other management scripts at a
                set interval and writes it to a .csv file. Here is a sample data
                log.
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
