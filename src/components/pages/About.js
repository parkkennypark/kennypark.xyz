import "../../style sheets/about.css";

import BackHeader from "../BackHeader";

const About = () => {
    return (
        <div className="centered-div">
            <div className="container">
                <div className="vertical-layout">
                    <BackHeader />
                    <h2 className="page-title">About</h2>
                    {/* Body */}
                    <div>
                        <p>
                            I'm passionate about creating cohesive projects and
                            implementing cool ideas as a{" "}
                            <span className="text-red">
                                gameplay programmer
                            </span>
                            .
                        </p>
                        <br />
                        <p>
                            I've been thinking up games since elementary school,
                            back when a friend and I put all our lucrative
                            project ideas in a red folder we labeled "
                            <span className="text-red">TOP SECRET</span>" with a
                            cheap black marker. Since then, I've been working
                            tirelessly to improve my skills with every idea,
                            prototype, and project I've worked on. That red
                            folder is sadly long gone, but my passion for making
                            things is still very much alive.
                        </p>
                        {/* <p>
                            I think personality is what shines through in a good
                            project. That's why I chose to design this website
                            the way I did; I wanted to make something that
                            reflects my tastes and personality, and I knew using
                            a sleek, modern template wouldn't do that. Art is a
                            reflection of its creator, so hopefully you like
                            what you've seen!
                        </p> */}
                        <h2 className="page-title">Software</h2>
                        <div id="software-div">
                            <img
                                className="software-icon"
                                src="images/icons/Unity Icon.png"
                                alt="Unity"
                            />
                            <img
                                className="software-icon"
                                src="images/icons/Godot Icon.png"
                                alt="Godot"
                            />
                            <img
                                className="software-icon"
                                src="images/icons/Blender Icon.png"
                                alt="Blender"
                            />
                            <img
                                className="software-icon"
                                src="images/icons/Figma Icon.png"
                                alt="Figma"
                            />
                            <img
                                className="software-icon"
                                src="images/icons/Illustrator Icon.png"
                                alt="Illustrator"
                            />
                            <img
                                className="software-icon"
                                src="images/icons/Photoshop Icon.png"
                                alt="Photoshop"
                            />
                            <img
                                className="software-icon"
                                src="images/icons/Reaper Icon.png"
                                alt="Reaper"
                            />
                        </div>
                        <h2 className="page-title">Skills</h2>
                        <p className="text-center">
                            Gameplay Programming | Rapid Prototyping | Game
                            Design | 3D Modeling
                        </p>
                        <br />
                        <div className="float-left">
                            <a
                                href="Park_Kenny_Resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                resume
                            </a>
                        </div>
                        <div className="float-right">
                            <a href="favorites.txt">my favorite stuff</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second container */}
            <div className="container" style={{ minHeight: "0rem" }}>
                <p>Email: parkkennypark@gmail.com</p>
                <p>Discord: Kenny Park, #6479</p>
            </div>
        </div>
    );
};

export default About;
