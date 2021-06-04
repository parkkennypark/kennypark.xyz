import Render from "../Render";

const name = "Cozy Interior";
const link = "/cozy-interior";
const projPath = "/images/renders/Cozy Interior";
const previewImage = "Relaxed Final Tagged.png";
const images = [
  "Relaxed Final Tagged.png",
  "Safe Final Tagged.png",
  "Clean Final Tagged.png",
  "Clay w wireframe.png",
];
const year = 2021;
const description = (
  <pre>
    Modeled, lit, and rendered in Blender. Composited in Photoshop.
    {"\n"}Credits
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
