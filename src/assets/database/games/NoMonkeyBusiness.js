import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";

const name = "No Monkey Business";
const link = "/no-monkey-business";
const projPath = "/images/games/No Monkey Business";
const icon = "No Monkey Business icon 256x256.png";
const screenshots = [
  "Screenshot 1.png",
  "Gun selection.png",
  "Spawn UI.jpg",
  "Old Map.jpg",
];
const tagline = "Frantic FPS";
const shortDescription = (
  <pre>
    A casual, high-paced first person shooter I developed to play with my
    friends.
    {"\n\n"}
    Was started three times, but unfortunately never finished. I learned so much
    that I figured I'd show it off anyway.
  </pre>
);
const body = (
  <div>
    <ProjectProperty
      property="Development Time"
      value="March 2020 - September 2020"
    />
    <ProjectProperty
      property="Programs"
      value="Unity, ProBuilder, Blender, Adobe Illustrator"
    />

    <pre>
      {"\n"}This project started as a lighthearted game I could goof around on
      with my friends. It was meant to be a frantic multiplayer shooter with an
      emphasis on unique gamemodes, with planned modes such as 'Chunky Munky' (a
      twist on juggernaut) and 'Capture the Rotisserie Chicken' (capture the
      flag meets control points).
      {"\n\n"}I learned a lot working solo on this project, including networking
      code, Unity events/listeners, modeling and rigging, and level and UI
      design. While it was certainly a challenge, I had a blast doing it all.
      {"\n\n"}The game is currently in a playable state featuring a roster of
      unique weapons and endless free-for-all gameplay. Having played with some
      friends, I'm happy to say it is a lot of fun.
      {"\n\n"}​Ultimately, I've decided to drop the project for the time being.
      Due to the sporadic nature of its development, the code base simply isn't
      well-structured enough to allow for me to easily continue working on it.
      It's taught me the invaluable lesson that structure matters, and I have
      since been much better at planning interweaving systems. I'm still
      incredibly proud of this game, and I guarantee the monkeys will make a
      reappearance in some form or another.
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
