import Project from "../Project";
import ProjectProperty from "../../../components/ProjectProperty";

const name = "VR Ducks";
const link = "/vr-ducks";
const projPath = "/images/VR Ducks/";
const icon = "VR Ducks icon 512x512.png";
const screenshots = [
  "scrn 1.png",
  "scrn 2.png",
  "scrn 3.png",
  "scrn 4.png",
  "scrn 5.png",
  "scrn 6.png",
  "scrn 7.png",
];
const tagline = "Mobile VR Shooter";
const shortDescription = (
  <pre>
    A carnival shootout game where you fire ducks from a cannon.
    {"\n\n"}
    My first published game.
  </pre>
);
const body = (
  <div>
    <ProjectProperty property="Release Date" value="April 2016" />
    <ProjectProperty
      property="Platforms"
      value={
        <>
          <a href="https://google.com">Android</a>,{" "}
        </>
      }
    />
    <ProjectProperty
      property="Programs"
      value="Unity, Adobe Illustrator,
      Blender"
    />
    <ProjectProperty property="Development Time" value="Two months" />
    <pre>
      {"\n"}A carnival style shootout game where you fire ducks from a cannon to
      knock out pirates. The ducks can be customized with various
      hats/accessories, and Google Play leaderboard support allows users to
      compete for the highest score.
      {"\n\n"}The game supports both VR and traditional play.
      {"\n\n"}This was the first game I made with unity. I was in the very early
      stages of learning scripting and design in general, and as such the game
      is very rough around the edges. It serves as a reminder of how much I've
      learned on all aspects of game creation.
    </pre>
  </div>
);

export default new Project(
  name,
  link,
  projPath,
  icon,
  screenshots,
  tagline,
  shortDescription,
  body
);
