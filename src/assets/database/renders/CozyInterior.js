import Render from "../Render";
import ExternalLink from "../../../components/ExternalLink";

const illustLink = "https://www.artstation.com/artwork/baBD8d";
const computer =
    "https://sketchfab.com/3d-models/old-stylised-computer-b576681b31de4723afef244b1b7c2c91";
const laptop =
    "https://sketchfab.com/3d-models/laptop-dc3daa4c867a4582b6aaeeb484ca7bf4";
const books =
    "https://sketchfab.com/3d-models/vintage-books-7a9bedf1e85c4f85b1b384dbdadadee9";
const soda =
    "https://sketchfab.com/3d-models/soda-can-1b63dd4832144e89955ecf2f70e8af4b";
const chair =
    "https://sketchfab.com/3d-models/office-chair-well-used-29c10eb4b62e464caae5d62ac7dd19f8";
const radio =
    "https://sketchfab.com/3d-models/radio-d21d6bf783154170bfa6dc7ce0a208f1";
const boxes =
    "https://sketchfab.com/3d-models/cardboard-boxes-713484d8f2284528bbd28ad41e197b24";
const boots =
    "https://sketchfab.com/3d-models/soviet-military-boots-kirza-6e16fa9f2d3944088913ff5e0505d192";
const clothes =
    "https://sketchfab.com/3d-models/japanese-clothes-a87d993c197749e3a243fac636f23485";
const sweatshirt =
    "https://sketchfab.com/3d-models/hangers-w-clothes-6df08ef8a8504504911ef520cd870aa8";
const accessories =
    "https://sketchfab.com/3d-models/room-accessories-fd15a1985a3b48c59e8a96a7522d4eaf";

const ambientCG = "https://ambientcg.com/";
const hdriHaven = "https://hdrihaven.com/";

const name = "Cozy Interior";
const link = "/cozy-interior";
const projPath = "/images/renders/Cozy Interior";
const previewImage = "Cozy Interior thumbnail.png";
const images = [
    "Relaxed Final Tagged.png",
    "Safe Final Tagged.png",
    "Clean Final Tagged.png",
    "Clay w wireframe.png",
];
const year = 2021;
const description = (
    <pre>
        Lit and rendered in Blender. Composited in Photoshop.
        {"\n\n"}Most of the models were downloaded from Sketchfab, and they were
        laid out based on an illustration - credits are below.
    </pre>
);

const credits = (
    <pre className="p2">
        Based on an <ExternalLink link={illustLink} text="illustration" /> by
        Anastasia Ermakova{"\n"}
        <ExternalLink link={computer} text="Old Computer" /> by Alien Dev (CC
        Attribution){"\n"}
        <ExternalLink link={laptop} text="Laptop" /> by VISIONNEW (CC
        Attribution)
        {"\n"}
        <ExternalLink link={books} text="Books" /> by feivelyn (CC Attribution
        Non-Commercial){"\n"}
        <ExternalLink link={soda} text="Soda can" /> by junhyde (CC Attribution)
        {"\n"}
        <ExternalLink link={chair} text="Office chair" /> by iedalton (CC
        Attribution){"\n"}
        <ExternalLink link={radio} text="Radio" /> by TraianDumbrava (CC
        Attribution){"\n"}
        <ExternalLink link={boxes} text="Cardboard boxes" /> by Juan Carlos CR.
        (CC Attribution)
        {"\n"}
        <ExternalLink link={boots} text="Boots" /> by KIFIR (CC Attribution
        Non-Commercial){"\n"}
        <ExternalLink link={clothes} text="Japanese clothes" /> by Takeru (CC
        Attribution){"\n"}
        <ExternalLink link={sweatshirt} text="Sweatshirt" /> by melaamory (CC
        Attribution){"\n"}
        <ExternalLink link={accessories} text="Various room accessories" /> by
        Matt Lemoine (CC Attribution Non-Commercial Share-A-Like){"\n"}
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
