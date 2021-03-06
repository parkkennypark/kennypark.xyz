import BackHeader from "../BackHeader";
import ExternalLink from "../ExternalLink";

const sourceLink = "https://github.com/parkkennypark/parkkennypark.github.io";
const fontLink = "https://www.freekoreanfont.com/typo-dodam-m-download";
const sisterLink = "https://parklauren.com";
const brotherLink = "https://ttttt.xyz";

const SiteInfo = () => {
    return (
        <div className="centered-div">
            <div className="container" style={{ maxWidth: "30rem" }}>
                <BackHeader link="/" />
                <h2 className="page-title">Site Info</h2>
                <div>
                    <p>
                        This site was made by me with{" "}
                        <font color="#db3d42">React</font>. It is hosted on
                        NearlyFreeSpeech.
                    </p>
                    <p className="p2">
                        Tim Park gave me a lot of help since this was my first
                        site.
                    </p>
                    <br />
                    <p>
                        If you're interested, the site's full source is
                        available <ExternalLink link={sourceLink} text="here" />
                        .
                    </p>
                    <br />
                    {/* <p>
            I had a number of references when building it. Namely, Derek Yu's
            website, William Enders' website, the Google Play Store, and Brother
            Park's website.
          </p>
          <br /> */}
                    <p>
                        The sole font used in this site is called{" "}
                        <ExternalLink link={fontLink} text="Typo Dodam M" />.
                        {<br />} It is free for personal use, and I like it a
                        lot.
                    </p>
                    <br />
                    <p>
                        My siblings are also very creative people with their own
                        websites.
                        {<br />}
                        <ExternalLink link={sisterLink} text="Lauren Park" />
                        {" | "}
                        <ExternalLink link={brotherLink} text="Tim Park" />
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default SiteInfo;
