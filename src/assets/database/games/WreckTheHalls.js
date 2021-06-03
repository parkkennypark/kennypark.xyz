import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";

const name = "Wreck The Halls";
const link = "/wreck-the-halls";
const projPath = "/images/games/Wreck The Halls";
const icon = "Wreck The Halls icon.png";
const screenshots = [
  "iPhone 5.52020-01-10_14-19-04.png",
  "iPhone 5.52020-01-10_14-20-50.png",
  "iPhone 5.52020-01-10_14-21-14.png",
  "iPhone 5.52020-01-10_14-22-37.png",
  "iPhone 5.52020-01-10_14-22-51.png",
  "iPhone 5.52020-01-10_14-23-10.png",
];
const tagline = "Twin-Stick Shooter";
const shortDescription = (
  <pre>
    A Christmas (or Halloween?) themed twin-stick shooter about stopping the joy
    of the holiday season.
    {"\n\n"}
    Made in 24 hours for Purdue’s IGDC Halloween Game Jam, with post-jam
    work/polishing done later.
  </pre>
);
const body = (
  <div>
    <ProjectProperty property="Release Date" value="October 2019" />
    <ProjectProperty
      property="Development Time"
      value="24 hours, plus
      post-jam work"
    />
    <ProjectProperty
      property="Programs"
      value="Unity, Adobe Illustrator,
      Blender"
    />
    <ProjectProperty
      property="Platforms"
      value={
        <>
          <a href="https://google.com">Android</a>,{" "}
          <a href="https://google.com">IOS</a>,{" "}
          <a href="https://google.com">Browser</a>
        </>
      }
    />

    <pre>
      {"\n"}I made this game as my submission for a 24-hour game jam hosted by a
      game development club at Purdue university. I made everything in the game,
      save the sfx and music. It won first place (of four projects), netting me
      a king-sized Kit Kat. I love Kit Kats, so I was pretty ecstatic.
      {"\n\n"}A couple months down the road, I took a some time to polish the
      game as well as to add achievements and an endless mode before porting it
      to mobile. I tried my best to maintain the game's graphical fidelity while
      still handling well on mobile devices.
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
