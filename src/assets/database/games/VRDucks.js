import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";

const androidLink =
  "https://play.google.com/store/apps/details?id=com.Lonely_Bench.VR_Ducks";

const name = "VR Ducks";
const link = "/vr-ducks";
const projPath = "/images/games/VR Ducks";
const icon = "VR Ducks icon 256x256.png";
const screenshots = [
  "scrn 1.png",
  "scrn 2.png",
  "scrn 3.png",
  "scrn 4.png",
  "scrn 5.png",
  "scrn 6.png",
  "scrn 7.png",
];
const tagline = "Mobile VR Game";
const shortDescription = (
  <pre>
    A carnival/arcade shootout game where you fire ducks from a cannon to try to
    get a high score.
    {"\n\n"}
    My first published game.
  </pre>
);
const body = (
  <div>
    <ProjectProperty property="Release Date" value="April 2016" />
    <ProjectProperty property="Development Time" value="Two months" />
    <ProjectProperty
      property="Programs"
      value="Unity 3D, Adobe Illustrator,
      Blender"
    />
    <ProjectProperty
      property="Platforms"
      value={<ExternalLink link={androidLink} text="Android" />}
    />

    <pre>
      {"\n"}A carnival style shootout game where you fire ducks from a cannon to
      knock out pirates. The ducks can be customized with various
      hats/accessories, and Google Play leaderboard support allows users to
      compete for the highest score.
      {"\n\n"}The game supports both VR and traditional play.
      {"\n\n"}This was the first finished game I made with Unity. I was in the
      very early stages of learning scripting and design in general, and as such
      the game is pretty rough around the edges. It serves as a reminder of how
      much I've learned on all aspects of game creation.
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
  body
);
