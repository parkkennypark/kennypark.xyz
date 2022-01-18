import Game from "../Game";
import ProjectProperty from "../../../components/ProjectProperty";
import ExternalLink from "../../../components/ExternalLink";

const androidLink =
    "https://play.google.com/store/apps/details?id=com.KennyPark.money";
const iOSLink = "https://apps.apple.com/us/app/burrito-finance/id1476182873";

const name = "burrito finance";
const link = "/burrito-finance";
const projPath = "/images/games/burrito finance";
const icon = "burrito finance icon 256x256.png";
const screenshots = [
    "burrito finance video.mp4",
    "screenshot 1.jpg",
    "screenshot 2.jpg",
    "screenshot 3.jpg",
    "screenshot 4.jpg",
    "screenshot 5.jpg",
];
const tagline = "Personal Finance";
const shortDescription = (
    <pre>
        A simple personal spending tracker that tells you how much you’ve spent
        in burritos.
        {"\n\n"}
        Made for personal use before entering college, and released for the fun
        of it.
    </pre>
);
const body = (
    <div>
        <ProjectProperty property="Role" value="Sole developer" />
        <ProjectProperty property="Programs" value="Unity, Adobe Illustrator" />
        <ProjectProperty property="Release Date" value="August 2019" />
        <ProjectProperty property="Development Time" value="One week" />

        <ProjectProperty
            property="Platforms"
            value={
                <>
                    <ExternalLink link={androidLink} text="Android" />,{" "}
                    <ExternalLink link={iOSLink} text="iOS" />,{" "}
                </>
            }
        />

        <pre>
            {"\n"}burrito finance was made to be a bare-bones tool to see
            roughly how much I spend per month. It is a simple app created for
            personal use - I had previously been jotting down expenses on a
            notes app but found this to be clunky and unhelpful. I'm sure a good
            solution already exists out there, but I thought it would be fun to
            make my own app.
            {"\n\n"}As always, I wanted to inject my own style into this one;
            even if it was just for personal use, I didn't want it to be a
            boring app. The fluid animations I included between screens helped
            with this.
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
