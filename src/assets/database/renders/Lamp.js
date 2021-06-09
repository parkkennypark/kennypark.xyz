import Render from "../Render";
import ExternalLink from "../../../components/ExternalLink";

const sketchfab =
  "https://sketchfab.com/3d-models/lamp-0f97601335ed48ba9bb796a97a0780a0";

const name = "Lamp";
const link = "/lamp";
const projPath = "/images/renders/Lamp";
const previewImage = "Lamp thumbnail.png";
const images = ["Lamp Edited.png", "Lamp Trip.png", "Wireframe.png"];
const year = 2020;
const description = (
  <pre>
    Modeled, textured, lit, and rendered in Blender. Composited in Photoshop.
    {"\n\n"}I modeled the lamp following a professor's tutorial. The rest of the
    scene as well as the texturing and lighting was done independently by me.
    The lamp model can be viewed on{" "}
    <ExternalLink link={sketchfab} text="Sketchfab" />.
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
