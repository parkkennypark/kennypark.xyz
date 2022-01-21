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
                <h2 className="page-title">Technical Documents</h2>
                <div>
                    <p className="text-red">Gawr Gura: Quest For Bread</p>
                    <div style={{ flexDirection: "row" }}>
                        <ExternalLink
                            link={ggqfbDocs}
                            text="Systems Documentation"
                        />
                    </div>
                </div>
                <pre> </pre>
                <div>
                    <p className="text-red">Be Not Afraid</p>
                    <div>
                        <p>
                            <ExternalLink
                                link={bnaGDD}
                                text="Game Design Document"
                            />
                        </p>
                        <p>
                            <ExternalLink link={bnaTaskList} text="Task List" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TechnicalDocuments;
