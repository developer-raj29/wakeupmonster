import aixorBigLogo from "@/assets/images/aixor-big-logo.svg";
import Image from "next/image";

const Preloader = () => {
  return (
    <>
      <div className="preloader-wrap">
        {/* <video loop muted autoPlay>
          <source src="/assets/video/hero-video.mp4" type="video/mp4" />
        </video> */}
        {/* <Image src={aixorBigLogo} alt="Logo" /> */}
        <h3 className="text">
          WakeUpMonster<sup>®</sup>
        </h3>
      </div>
    </>
  );
};

export default Preloader;
