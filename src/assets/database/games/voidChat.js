import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";

const sourceLink = "";

const name = "VOID";
const link = "/void";
const projPath = "/images/games/void chat";
const icon = "void chat icon.png";
const screenshots = ["landing menu.png", "signup menu.png", "main menu.png"];
const tagline = "Forum Program";
const shortDescription = (
  <pre>
    A forum app made with Java Swing that runs on a dedicated server.
    {"\n\n"}
    Made for a group final project in an intro Computer Science class.
  </pre>
);
const body = (
  <div>
    <ProjectProperty property="Project Date" value="May 2021" />
    <ProjectProperty property="Development Time" value="Three weeks" />
    {/* <ProjectProperty
      property="Platforms"
      value={
        <>
          <a href="https://google.com">Windows</a>,{" "}
          <a href="https://google.com">MacOS</a>,{" "}
        </>
      }
    /> */}
    <ProjectProperty
      property="Language"
      value="Java (Swing framework for GUI)"
    />
    <ProjectProperty property="Programs" value="IntelliJ" />
    <pre>
      {"\n"}For this project, we were prompted to make a social media program
      that implements profiles, posts, and comments that would all be sent to
      different clients through a dedicated multi-threaded server. These three
      items can also be edited at any time and automatically synced across
      clients. No starter code was provided.
      {"\n\n"}I played the role of the team lead for this project. To split up
      work, I made an outline of the various classes we needed and distributed
      work to my three other teammates. I was responsible for the program's
      concept, the GUI design and implementation, and the main functionality for
      post creation and server/client communication.
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
