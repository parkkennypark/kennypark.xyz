import "../../index.css";

import BackHeader from "../BackHeader";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="vertical-layout">
          <BackHeader />

          {/* Title */}
          <div className="section">
            <p className="text-big">
              Hi! I'm <span className="text-normal">-</span>
              <span className="text-small">
                {"  "} oh wait, I said that already.
              </span>
            </p>
            <p>. . .</p>
            <p className="text-big">
              <span style={{ fontStyle: "italic" }}>Hello!</span> I'm{" "}
              <span className="text-red">Kenny Park</span>.
              <span className="text-small"> Nailed it.</span>
            </p>
          </div>

          {/* Body */}
          <div>
            <p>
              I'm an undergraduate student at Purdue University studying game
              development and design.
            </p>
            <br />
            <p>
              I've been thinking up games since elementary school, back when a
              friend and I put all our lucrative project ideas in a red folder
              we labeled "<span className="text-red">TOP SECRET</span>" with a
              cheap black marker. Since then, I've been working tirelessly on
              projects, improving my skills with every little idea, abandoned
              prototype, and rare finished project I've worked on. My red folder
              has long been abandoned, but my passion for making things is still
              very much alive.
            </p>
            <br />
            <p>
              I think personality is what shines through in a good project.
              That's why I chose to design this website the way I did; I wanted
              to make something that reflects my tastes and personality, and I
              knew using a sleek, modern template wouldn't do that. Art is a
              reflection of its creator, so hopefully you like what you've seen!
            </p>
          </div>

          {/* Info */}
          <div className="section">
            <p className="text-small">
              This site was made from scratch with ReactJS.
            </p>
          </div>
        </div>
      </div>

      {/* Second container */}
      <div className="container">
        <p>
          Resume: <a href="">view</a>
        </p>
        <p>Email: parkkennypark@gmail.com</p>
      </div>
    </div>
  );
};

export default About;
