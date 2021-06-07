import BackHeader from "../BackHeader";
import ExternalLink from "../ExternalLink";

const sourceLink = "https://github.com/parkkennypark/parkkennypark.github.io";
const fontLink = "https://www.freekoreanfont.com/typo-dodam-m-download";
const sisterLink = "https://parklauren.com";
const brotherLink = "https://ttttt.xyz";

const SiteInfo = () => {
  return (
    <div className="centered-div">
      <div className="container">
        <BackHeader link="/" />
        <h2 className="page-title">SITE INFO</h2>
        <div style={{ textAlign: "center" }}>
          <p>
            This site was made by me with{" "}
            <span className="text-red">React</span>. It is hosted using Github
            Pages.
          </p>
          <br />
          <p>
            If you're interested, the site's full source is available{" "}
            <ExternalLink link={sourceLink} text="here" />.
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
            <ExternalLink link={fontLink} text="Typo Dodam M" />.{<br />} It is
            free for personal use, and I like it a lot.
          </p>
          <br />
          <p>
            My siblings are also very creative people with their own websites.
            {<br />}
            <ExternalLink link={sisterLink} text="Sister Park" />
            {" | "}
            <ExternalLink link={brotherLink} text="Brother Park" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SiteInfo;
