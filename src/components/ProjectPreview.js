import "../style sheets/projectPreview.css";

const ProjectPreview = ({ icon, title, description, subDescription }) => {
  return (
    <div className="horizontal-layout">
      <img className="project-icon" src={icon} alt="Wreck The Halls Icon" />
      <div className="vertical-layout text-div">
        <h2 className="text-red">{title}</h2>
        <p className="p2">{description}</p>
        <br />
        <p className="p2">{subDescription}</p>
      </div>
    </div>
  );
};

export default ProjectPreview;
