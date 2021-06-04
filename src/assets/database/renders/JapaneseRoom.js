import Render from "../Render";

const name = "Japanese Room";
const link = "/japanese-room";
const projPath = "/images/renders/Japanese Room";
const previewImage = "Still 16-9.png";
const images = ["Still.png", "Safe Final.png", "Clean Final.png"];
const year = 2021;
const description = (
  <pre>
    Modeled, lit, and rendered in Blender. Composited in Photoshop.
    {"\n"}All models by me. Textures provided from CC0Textures.
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
