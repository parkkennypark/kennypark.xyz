import BackHeader from "../BackHeader";
// import LinkButton from "../LinkButton";
import ExternalLink from "../ExternalLink";

const redbubble =
  "https://www.redbubble.com/people/parkkennypark/shop?asc=u&ref=account-nav-dropdown";

const OtherProjects = () => {
  return (
    <div className="centered-div">
      <div className="container">
        <BackHeader link="/" />
        <div className="">
          <h2 className="page-title">OTHER PROJECTS</h2>
        </div>
        <div style={{ textAlign: "center" }}>
          <ExternalLink link={redbubble} text="Stickers" />
        </div>
        <br />
        <p> </p>
      </div>
    </div>
  );
};

export default OtherProjects;
