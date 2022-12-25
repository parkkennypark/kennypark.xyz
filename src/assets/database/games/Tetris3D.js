import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";

const name = "3D Block Game";
const link = "/tetris-3D";
const projPath = "/images/games/Tetris 3D";
const icon = "icon.png";
const screenshots = ["screenshot.png"];
const tagline = "Tetris Prototype";
const date = "04/22";
const engine = "Unity";
const shortDescription = (
    <pre>
        A prototype 3D tetris game I developed for a client.
        {"\n\n"}Developed over the span of around a week. I was only ever paid
        half of what I was promised.
    </pre>
);
const body = (
    <div>
        {/* <ProjectProperty property="Development" value="August 2017" /> */}
        <ProjectProperty property="Completion Date" value="April 2022" />
        <ProjectProperty property="Roles" value="Sole developer" />
        <ProjectProperty property="Programs" value="Unity" />
        <ProjectProperty property="Development Time" value="Around a week" />
        {/* <ProjectProperty property="Platform" value="WebGL" /> */}
        <pre>
            {"\n"} There are some obvious design questions when adding another
            dimension to Tetris. How can we make visualizing rotations
            intuitive? How can we easily see where the holes are in a layer of
            blocks? Unfortunately, the project was axed before these questions
            could be answered.
            {"\n\n"}I implemented features you would expect from a modern Tetris
            game, such as Tetronimo holding, a preview for your next pieces, and
            fast dropping. Pieces are also chosen by the algorithm described by
            Tetris' official guidelines.
            https://tetris.fandom.com/wiki/Random_Generator
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
    date,
    engine
);
