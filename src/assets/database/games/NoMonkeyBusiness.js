import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";

const name = "No Monkey Business";
const link = "/no-monkey-business";
const projPath = "/images/games/No Monkey Business";
const icon = "No Monkey Business icon 256x256.png";
const screenshots = [
    "NMB Video.mp4",
    "Screenshot 1.png",
    "Gun selection.png",
    "Spawn UI.jpg",
    "Old Map.jpg",
];
const tagline = "FPS Prototype";
const date = "09/20";
const engine = "Unity";
const shortDescription = (
    <pre>
        A casual, fast-paced first person shooter I developed to play with my
        friends.
        {"\n\n"}
        {/* Was started three times, but unfortunately never finished. */}
    </pre>
);
const body = (
    <div>
        <ProjectProperty property="Role" value="Sole developer" />
        <ProjectProperty
            property="Programs"
            value="Unity, ProBuilder, Blender, Adobe Illustrator"
        />{" "}
        <ProjectProperty
            property="Development Time"
            value="March 2020 - September 2020"
        />
        <pre>
            {"\n"}This project started as a lighthearted game I could goof
            around on with my friends. It was meant to be a frantic multiplayer
            shooter with an emphasis on unique gamemodes, with planned modes
            such as 'Chunky Munky' (a twist on juggernaut) and 'Capture the
            Rotisserie Chicken' (capture the flag meets control points).
            {"\n\n"}I learned a lot working solo on this project, including
            networking code, Unity events/listeners, modeling and rigging, and
            level and UI design. While it was certainly a challenge, I had a
            blast doing it all.
            {"\n\n"}The game is currently in a playable state featuring a roster
            of unique weapons and endless free-for-all gameplay. Having played
            with some friends, I'm happy to say it is a lot of fun.
            {"\n\n"}​Ultimately, I've decided to drop the project for the time
            being. Due to the sporadic nature of its development, the code base
            simply isn't well-structured enough to allow for me to easily
            continue working on it. It's taught me the invaluable lesson that
            structure matters, and I have since been much better at planning
            interweaving systems. I'm still incredibly proud of this game, and I
            guarantee the monkeys will make a reappearance in some form or
            another.
            {"\n\n"}
        </pre>
        <p className="text-red">Takeaways</p>
        <ul>
            <li>
                (Architecture) Netcode can get very tangled very fast if not
                properly designed
            </li>
            <li>
                (Production) Working around a theme does wonders for ideation
            </li>
            <li>
                (Art) Things don't have to match - maps don't need to be
                toon-shaded just because your characters are
            </li>

            <li>
                (Dev Habits) Working on the details is important and fun, but
                don't get too consumed trying to iron out the little things
            </li>
        </ul>
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
