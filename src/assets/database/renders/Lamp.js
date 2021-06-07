import Render from "../Render";

const name = "Lamp";
const link = "/lamp";
const projPath = "/images/renders/Lamp";
const previewImage = "Lamp Edited.png";
const images = ["Lamp Edited.png", "Lamp Trip.png", "Wireframe.png"];
const year = 2020;
const description = (
  <pre>
    Modeled, textured, lit, and rendered in Blender. Composited in Photoshop.
    {"\n\n"}I modeled the lamp following a professor's tutorial. The rest of the
    scene as well as the texturing and lighting was done independently by me.
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