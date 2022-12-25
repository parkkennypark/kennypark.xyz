import Render from "../Render";
import ExternalLink from "../../../components/ExternalLink";

const illustLink =
    "https://twitter.com/ArsXC/status/1282684359972130818/photo/3";

const name = "Japanese Room";
const link = "/japanese-room";
const projPath = "/images/renders/Japanese Room";
const previewImage = "Japanese Room thumbnail.png";
const images = ["Interior.mp4", "Still.png"];
const year = 2021;
const description = (
    <pre>
        Modeled, lit, and rendered in Blender.
        {"\n\n"}All models are by me. Textures are from CC0Textures.com. Based
        on an <ExternalLink link={illustLink} text="illustration" />.
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
