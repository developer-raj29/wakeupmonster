"use client";
import dynamic from "next/dynamic";
import Union from "@/public/assets/images/Union.svg";
import shape from "@/public/assets/images/shape.png";
import logo1 from "@/public/assets/images/WMLogo.png";
import btnArrow from "@/public/assets/images/btn-arrow.svg";
import Image from "next/image";
import TeamV1Data from "@/public/assets/jsonData/team/TeamV1Data.json";
import SingleTeamV1 from "./SingleTeamV1";
import CTAButton1 from "../ctaButtons/CTAButton1";
import SecSubTitle from "../subTitle/SecSubTitle";

const TeamV1 = () => {
  return (
    <>
      <div className="team-sec" id="team">
        <div className="section-header">
          <SecSubTitle img={Union} text="OUR MEMBERS" />
        </div>

        <div className="team-members">
          {TeamV1Data.map((member) => (
            <SingleTeamV1 member={member} key={member.id} />
          ))}

          {/* Join Us Section */}
          <div className="team-cv-box" data-aos="fade-up" data-aos-delay={400}>
            <Image src={shape} alt="shape" className="overlay" />
            <div className="team-cv-header">
              <Image src={logo1} alt="logo" />
              <h3 className="title">
                Become Our <br />
                Member?
              </h3>
              <p>
                Join the AIXOR community and unlock a world of creative
                possibilities.
              </p>
            </div>
            <div className="team-cv-footer">
              <CTAButton1 to="/contact" text="Apply CV" img={btnArrow} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(TeamV1), { ssr: false });
