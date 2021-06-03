import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";

const name = "R.C.B.P";
const link = "/rcbp";
const projPath = "/images/games/RCBP";
const icon = "RCBP icon 512x512.png";
const screenshots = [
  "iPhone 5.5 2020-01-19_14-12-43.png",
  "iPhone 5.5 2020-01-19_14-15-22.png",
  "iPhone 5.5 2020-01-19_14-16-21.png",
];
const tagline = "Game Jam Entry";
const shortDescription = (
  <pre>
    A simple puzzle game about controlling boxes with your mind.
    {"\n\n"}
    Made in a week for the GDQ Game Jam.
  </pre>
);
const body = (
  <div>
    <ProjectProperty property="Release Date" value="July 2017" />
    <ProjectProperty property="Development Time" value="One week" />
    <ProjectProperty property="Programs" value="Unity 3D, Adobe Illustrator" />
    <ProjectProperty
      property="Platforms"
      value={
        <>
          <a href="https://google.com">Android</a>,{" "}
          <a href="https://google.com">IOS</a>,{" "}
          <a href="https://google.com">Browser</a>,{" "}
        </>
      }
    />

    <pre>
      {"\n"}This was my first time participating in a game jam, and I'm really
      happy with the end result. I've never designed puzzles for a game before,
      and though there aren't many in the game, I was able to produce novel ways
      to play on the core mechanic.
      {"\n\n"}The game was ported to mobile post-jam.
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
