import Render from "../Render";
import ExternalLink from "../../../components/ExternalLink";

const illustLink =
    "https://1.bp.blogspot.com/-1gbsNbwm8UM/Wi1fDZRBBXI/AAAAAAAAR9c/3fe6z_xPW44KNsRV7McXkiO893sfHV8vgCLcBGAs/s1600/kon104-05m16s.png";

const toriGate =
    "https://sketchfab.com/3d-models/japanese-tori-gate-11c75832cc91469cb98eccdfc28c6eeb#download";
const lantern =
    "https://sketchfab.com/3d-models/japan-stone-lamp-bfd94071302f439485520566ee5228a7";
const car =
    "https://sketchfab.com/3d-models/mazda-rx8-6c4dec575a814b1a87f484527b0ec1f1";
const ambientCG = "https://ambientcg.com/";
const hdriHaven = "https://hdrihaven.com/";

const name = "Yui's House";
const link = "/yuis-house";
const projPath = "/images/renders/Yui's House";
const previewImage = "Yui's House thumbnail.png";
const images = [
    "Morning.png",
    "Evening.png",
    "Night.png",
    "Clay w wireframe.png",
];
const year = 2021;
const description = (
    <pre>
        Modeled, lit, and rendered in Blender. Textures made in Substance
        Painter. Graded in Lightroom. Composited in Photoshop.
        {"\n\n"}The house is from one of my favorite anime, "K-On!" Credits are
        below.
    </pre>
);

const credits = (
    <pre className="p2">
        Scene based on <ExternalLink link={illustLink} text="Yui's house" />{" "}
        from the anime "K-On!"{"\n"}
        <ExternalLink link={toriGate} text="Tori gate" /> by Jasmine (CC
        Attribution Non-Commercial){"\n"}
        <ExternalLink link={lantern} text="Stone lantern" /> by datucarl (CC
        Attribution){"\n"}
        <ExternalLink link={car} text="Mazda RX8" /> by yoshipicture (CC
        Attribution){"\n"}
        Some textures downloaded from{" "}
        <ExternalLink link={ambientCG} text="ambientCG" />.{"\n"}
        HDRIs downloaded by <ExternalLink link={hdriHaven} text="HDRI Haven" />.
    </pre>
);

export default new Render(
    name,
    link,
    projPath,
    previewImage,
    images,
    year,
    description,
    credits
);
