const ProjectProperty = ({ property, value }) => {
  return (
    <p>
      <span className="text-red">{property}</span>: {value}
    </p>
  );
};

export default ProjectProperty;
