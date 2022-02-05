import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";

const name = "EC Virtual Labs";
const link = "/virtual-labs";
const projPath = "/images/games/Virtual Labs";
const icon = "icon 256x256.png";
const screenshots = [
    "Virtual Labs Video.mp4",
    "paper chromatography.png",
    "hydrolab lab 7.png",
    "aerolab.png",
    "stress concentration.png",
    "stress concentration FE.png",
];
const tagline = "Purdue Lab Simulations";
const shortDescription = (
    <pre>
        A collection of virtual labs I worked on while working at Purdue's
        Envision Center.
        {"\n\n"}Development spans on and off from Sep. 2019 to present. Many
        labs are currently being used in teaching curriculum.
    </pre>
);
const body = (
    <div>
        {/* <ProjectProperty property="Development" value="August 2017" /> */}
        <ProjectProperty
            property="Roles"
            value="Programmer, Integrator, UI designer"
        />
        <ProjectProperty property="Programs" value="Unity" />
        <ProjectProperty
            property="Development Time"
            value="A couple of months per project"
        />
        <ProjectProperty property="Platform" value="WebGL" />
        <pre>
            {"\n"}These virtual labs were developed because of an increased
            demand to virtualize physical lab content, allowing students to get
            experience with lab equipment and procedure without having to expend
            the physical resources typically involved in doing so. I worked as a
            programmer for a multitude of these projects, including chemistry,
            aerospace, hydraulics, and mechanical engineering.
            {"\n\n"}Most projects had a development time of a couple months
            where I set up scenes, scripted functionality, and integrated any
            assets team members created for these labs. I also had to pick up
            where some developers who had graduated left off for a couple of
            them. I learned a lot about Unity's UI system working on these labs.
            {"\n\n"}Client communication was a big part of these projects, as I
            had to give regular updates on the state of the programs while
            answering to any questions and/or changes professors had. These
            projects gave me real experience working and answering for clients
            that I would not have been able to get from school.
        </pre>
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
