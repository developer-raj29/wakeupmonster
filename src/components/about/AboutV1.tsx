"use client";
import unionIcon from "@/assets/images/Union.svg";
import AnimatedText from "../animated/AnimatedText";
import FactData from "@/assets/jsonData/fact/FactData.json";
import { useState } from "react";
import SecSubTitle from "../subTitle/SecSubTitle";
import { features } from "../utilities/Features";
import { BentoCard, BentoGrid } from "../ui/customBentoGrid";

const AboutV1 = () => {
  const [activeServiceId, setActiveServiceId] = useState(
    FactData[0]?.id || null
  );

  const handleMouseEnter = (id: number) => {
    setActiveServiceId(id);
  };

  const handleMouseLeave = () => {
    // Do nothing on mouse leave to keep the active item
  };

  return (
    <>
      <div className="about-sec" id="about">
        <div className="custom-container">
          <div className="section-header">
            <SecSubTitle img={unionIcon} text={"About Us"} />
            <AnimatedText>
              Founded on the principles of creativity, collaboration, and
              excellence, WAKEUPMONSTER is a diverse team of industry experts
              dedicated to delivering outstanding results...
            </AnimatedText>
          </div>

          <BentoGrid className="grid-rows-[repeat(4,150px)] grid-cols-[repeat(7,minmax(1px,1fr))]">
            {features.map((feature, index) => (
              <BentoCard key={index} {...feature} />
            ))}
          </BentoGrid>

          {/* <div className="funfacts-wrap">
            {FactData.map((fact) => (
              <div
                className={`funfact-box ${
                  activeServiceId === fact.id ? "active" : ""
                }`}
                key={fact.id}
                onMouseEnter={() => handleMouseEnter(fact.id)}
                onMouseLeave={handleMouseLeave}
              >
                <SingleFactV1 fact={fact} />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutV1;

/*



*/
