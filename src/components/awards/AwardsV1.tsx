"use client";
import Union from "@/assets/images/Union.svg";
import AwardsV1Data from "@/assets/jsonData/awards/AwardsV1Data.json";
import SingleAwardV1 from "./SingleAwardV1";
import { useState } from "react";
import SecSubTitle from "../subTitle/SecSubTitle";

const AwardsV1 = () => {
  const [activeServiceId, setActiveServiceId] = useState(
    AwardsV1Data[0]?.id || null
  );

  const handleMouseEnter = (id: number) => {
    setActiveServiceId(id);
  };

  const handleMouseLeave = () => {
    // Do nothing on mouse leave to keep the active item
  };

  return (
    <>
      <div className="awards-sec" id="awards">
        <div className="section-header">
          <SecSubTitle img={Union} text=" OUR AWARDS" />
        </div>
        <div className="awards-list">
          {AwardsV1Data.map((award) => (
            <div
              className={`awards-box ${
                activeServiceId === award.id ? "active" : ""
              }`}
              key={award.id}
              onMouseEnter={() => handleMouseEnter(award.id)}
              onMouseLeave={handleMouseLeave}
            >
              <SingleAwardV1 award={award} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AwardsV1;
