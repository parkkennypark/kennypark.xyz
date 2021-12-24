import BackHeader from "../BackHeader";
import ExternalLink from "../ExternalLink";
const ggqfbDocs =
    "https://docs.google.com/document/d/18T5FZ8AJpwSW50QfMg56hI3y-6UL4rvLyymAA8fkJH4/edit?usp=sharing";
const TechnicalDocuments = () => {
    return (
        <div className="centered-div">
            <div className="container">
                <BackHeader link="/" />
                <h2 className="page-title">TECHNICAL DOCUMENTS</h2>
                <div>
                    <p className="text-red">Gawr Gura: Quest For Bread</p>
                    <div
                        className="horizontal-layout"
                        style={{ flexDirection: "row" }}
                    >
                        {/* <pre>{"     "}</pre> */}
                        <ExternalLink
                            link={ggqfbDocs}
                            text="Systems Documentation"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TechnicalDocuments;
