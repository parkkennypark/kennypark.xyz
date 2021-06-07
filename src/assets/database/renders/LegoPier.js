import Render from "../Render";

const name = "Lego Pier";
const link = "/lego-pier";
const projPath = "/images/renders/Lego Pier";
const previewImage = "Edited Render.png";
const images = [
  "Mockup Final.png",
  "Edited Render.png",
  "Front Shot.png",
  "Hanging Man.png",
  "Clay w wireframe.png",
];
const year = 2020;
const description = (
  <pre>
    Modeled, textured, lit, and rendered in Blender. Composited in Photoshop.
    {"\n\n"}This was a project for a modelling class. All models and textures
    were made by me. The Lego figures are based on official Lego sets.
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
