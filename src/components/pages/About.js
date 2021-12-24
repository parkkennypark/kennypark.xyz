import BackHeader from "../BackHeader";

const About = () => {
    return (
        <div className="centered-div">
            <div className="container">
                <div className="vertical-layout">
                    <BackHeader />
                    <h2 className="page-title">ABOUT</h2>
                    {/* Body */}
                    <div>
                        <p>
                            I'm an undergraduate student at Purdue University
                            studying game development and design.
                        </p>
                        <br />
                        <p>
                            I've been thinking up games since elementary school,
                            back when a friend and I put all our lucrative
                            project ideas in a red folder we labeled "
                            <span className="text-red">TOP SECRET</span>" with a
                            cheap black marker. Since then, I've been working
                            tirelessly on projects, improving my skills with
                            every little idea, abandoned prototype, and rare
                            finished project I've worked on. That red folder is
                            long gone, but my passion for making things is still
                            very much alive.
                        </p>
                        <br />
                        <p>
                            I think personality is what shines through in a good
                            project. That's why I chose to design this website
                            the way I did; I wanted to make something that
                            reflects my tastes and personality, and I knew using
                            a sleek, modern template wouldn't do that. Art is a
                            reflection of its creator, so hopefully you like
                            what you've seen!
                        </p>
                        <br />
                        <div className="float-left">
                            <a href="Park_Kenny_Resume.pdf">resume</a>
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
