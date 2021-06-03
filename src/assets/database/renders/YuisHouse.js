import Render from "../Render";

const name = "Yui's House from K-On";
const link = "/yuis-house";
const projPath = "/images/renders/Yui's House";
const previewImage = "Morning.png";
const images = ["Morning.png", "Evening.png", "Night.png"];
const year = 2021;
const description =
  "Modeled, lit, and rendered in Blender. Composited in Photoshop.";

export default new Render(
  name,
  link,
  projPath,
  previewImage,
  images,
  year,
  description
);
