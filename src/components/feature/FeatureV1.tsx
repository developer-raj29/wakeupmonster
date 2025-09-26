import Union from "@/assets/images/Union.svg";
import FeatureV1Data from "@/assets/jsonData/feature/FeatureV1Data.json";
import SingleFeatureV1 from "./SingleFeatureV1";
import SecSubTitle from "../subTitle/SecSubTitle";
import CTAButton1 from "../ctaButtons/CTAButton1";
import btnArrowIcon from "@/assets/images/btn-arrow.svg";

const FeatureV1 = () => {
  return (
    <>
      <div className="feature-sec" id="projects">
        <div className="custom-container">
          <div className="section-header section-header2">
            <SecSubTitle img={Union} text="Our projects" />
            <h2 className="section-title section-title2">
              Featured WOW <span>Projects</span>
            </h2>
            <p className="section-desc">
              Explore our collection of cutting-edge products designed to
              empower your business and elevate your creative potential. <br />
              Each product is meticulously crafted to provide exceptional
              performance, usability, and results.
            </p>
          </div>
          <div className="feature-project-lists">
            {FeatureV1Data.map((feature) => (
              <SingleFeatureV1 feature={feature} key={feature.id} />
            ))}
          </div>
          <div className="feature-more-btn-wrap">
            <CTAButton1 to="/projects" text="View More" img={btnArrowIcon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureV1;
