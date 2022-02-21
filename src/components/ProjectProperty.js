const ProjectProperty = ({ property, value }) => {
    return (
        <p>
            <span style={{ fontFamily: "typoDodamM" }} className="text-red">
                {property}
            </span>
            : {value}
        </p>
    );
};

export default ProjectProperty;
