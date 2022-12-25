import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";

const webLink = "https://kennypark.xyz/kasa-avatar-maker";

const name = "Avatar Maker";
const link = "/kasa-avatar";
const projPath = "/images/other/kasa-avatar";
const icon = "KASA icon alt 256x256.png";
const screenshots = ["physical card.png", "landing.png", "editor.png"];
const tagline = "Custom ID Cards";
const date = "09/21";
const engine = "Unity";
const shortDescription = (
    <pre>
        An avatar maker I made for Purdue's Korean American Student Association
        membership cards.
        {"\n\n"}A satisfying side project from start to finish.
    </pre>
);
const body = (
    <div>
        {/* <ProjectProperty property="Development" value="August 2017" /> */}
        <ProjectProperty property="Project Date" value="September 2021" />
        <ProjectProperty property="Development Time" value="One month" />
        <ProjectProperty property="Programs" value="Unity, Illustrator" />
        <ProjectProperty
            property="Platforms"
            value={<ExternalLink link={webLink} text="Web" />}
        />
        <pre>
            {"\n"}As the graphic designer for the Korean American Student
            Association on campus, I was in charge of designing our membership
            cards for the year. I thought it would be cool for membership cards
            to have unique avatars that members could make in a Mii-like avatar
            creator, so this project was born.
            {"\n\n"}After drawing all the art assets (157 in total) in
            Illustrator, I set out to make the program in Unity. I took heavy
            inspiration from Nintendo's online Mii creation tool for the UI and
            general feel of the program.
            {"\n\n"}A form was then created and sent out to members of the club
            to fill out. Stickers were ordered off of Redbubble and distributed
            to members along with the template membership cards. 79 stickers
            total were purchased, and it really made me smile to see the
            physical product of a mix between my artistic and technical skills.
            I'm really happy with the variety of avatars that were made!
            {/* {"\n\n"}Unity's WebGL is not fantastic, especially when it comes to
            mobile support. It simply wasn't made for that. As much as I would
            have liked to have learned how to make a native web app, I didn't
            have the time. */}
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
