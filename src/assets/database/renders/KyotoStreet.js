import Render from "../Render";
import ExternalLink from "../../../components/ExternalLink";

const streetViewLink =
  "https://www.google.com/maps/@35.0080722,135.7706522,3a,75y,86.3h,85.44t/data=!3m6!1e1!3m4!1sjrRUzhLvHzww6WicoqGqMw!2e0!7i16384!8i8192";

const teemuLink = "https://teemusphoto.com/work/japan/";

const name = "Kyoto Street";
const link = "/kyoto-street";
const projPath = "/images/renders/Kyoto Street";
const previewImage = "preview.png";
const images = [
  "main shot, 128 samples [final].png",
  "cutout shot, 128 samples [final].png",
];
const year = 2021;
const description = (
  <pre>
    Modeled, lit, and rendered in Blender. Textures made in Substance Painter.
    Graded in Lightroom. Composited in Photoshop.
    {"\n\n"}I wanted something cool to post on my Instagram, so I decided to put
    my 3D skills to the test. I decided to recreate a{" "}
    <ExternalLink link={streetViewLink} text="real street" /> in Kyoto, Japan
    after seeing a photo by{" "}
    <ExternalLink link={teemuLink} text="Teemu Photography" />. All the
    modelling and texturing work was done by me. I'm pretty happy with the end
    result, and managed to fool a good amount of my friends.
  </pre>
);

export default new Render(
  name,
  link,
  projPath,
  previewImage,
  images,
  year,
  description
);
