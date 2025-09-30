import unionIcon from "@/assets/images/Union.svg";
import Image from "next/image";
import AnimatedText from "../animated/AnimatedText";
import SingleFactV2 from "./SingleFactV2";
import FactData from "@/assets/jsonData/fact/FactData.json";
import SecSubTitle from "../subTitle/SecSubTitle";

const AboutV2 = () => {
  return (
    <>
      <div className="about-sec" id="about">
        <div className="custom-container">
          <div className="section-header">
            <SecSubTitle img={unionIcon} text={"About Us"} />
            <div className="right">
              <AnimatedText>
                Founded on the principles of creativity, collaboration, and
                excellence, WAKE UP MONSTER is a diverse team of industry
                experts dedicated to delivering outstanding results. We are
                committed to pushing the boundaries of what’s possible, working
                together seamlessly to exceed expectations and deliver
                outstanding value to our clients.
              </AnimatedText>
              {/* <AnimatedText>
                We are committed to pushing the boundaries of what’s possible,
                working together seamlessly to exceed expectations and deliver
                outstanding value to our clients.
              </AnimatedText> */}
            </div>
          </div>
          <div className="funfacts-wrap">
            {FactData.map((fact) => (
              <SingleFactV2 fact={fact} key={fact.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV2;
