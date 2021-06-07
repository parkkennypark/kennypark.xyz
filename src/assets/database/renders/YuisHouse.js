import Render from "../Render";

const name = "Yui's House";
const link = "/yuis-house";
const projPath = "/images/renders/Yui's House";
const previewImage = "Morning.png";
const images = [
  "Morning.png",
  "Evening.png",
  "Night.png",
  "Clay w wireframe.png",
];
const year = 2021;
const description = (
  <pre>
    Modeled, lit, and rendered in Blender. Composited in Photoshop.
    {"\n\n"}This was a lighting project for a class. The house if from one of my
    favorite anime, "K-On!" Credits are below.
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
