import BackHeader from "../BackHeader";
import ExternalLink from "../ExternalLink";
const ggqfbDocs =
    "https://docs.google.com/document/d/18T5FZ8AJpwSW50QfMg56hI3y-6UL4rvLyymAA8fkJH4/edit?usp=sharing";
const bnaGDD =
    "https://docs.google.com/document/d/1ik0WnfbtjIfdT2cyz838gQ3DmHR8QaN1tIu9eChApsc/edit?usp=sharing";
const bnaTaskList =
    "https://docs.google.com/spreadsheets/d/1d_l47UbLsRsE2y-hsbCm0CDT2o_n2mj8TgWFh4lHa6U/edit#gid=2044647417";
const TechnicalDocuments = () => {
    return (
        <div className="centered-div">
            <div className="container">
                <BackHeader link="/" />
                <h2 className="page-title">Documents</h2>
                <div>
                    <p className="text-red">Gawr Gura: Quest For Bread</p>
                    <div style={{ flexDirection: "row" }}>
                        {/* <ExternalLink
                            link={ggqfbDocs}
                            text="Systems Documentation"
                        /> */}
                        <a href={ggqfbDocs} target="_blank" rel="noreferrer">
                            <img
                                src="/images/games/GGQFB/Systems Documentation Banner.png"
                                alt="Systems Documentation Banner"
                                style={{ width: "100%" }}
                            />
                        </a>
                    </div>
                </div>
                <pre> </pre>
                <div>
                    <p className="text-red">Be Not Afraid</p>
                    <div>
                        {/* <p>
                            <ExternalLink
                                link={bnaGDD}
                                text="Game Design Document"
                            />
                        </p> */}
                        <a href={bnaGDD} target="_blank" rel="noreferrer">
                            <img
                                src="/images/games/Be Not Afraid/GDD Banner.png"
                                alt="Systems Documentation Banner"
                                style={{ width: "100%" }}
                            />
                        </a>
                        <p>
                            <ExternalLink
                                link={bnaTaskList}
                                text="Project Management Sheet"
                            />
                        </p>
                    </div>
                </div>
                <pre> </pre>
                <a href="Park_Kenny_Resume.pdf">Resume</a>
            </div>
        </div>
    );
};
export default TechnicalDocuments;
