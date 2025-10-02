// import contact from '@/assets/images/contact.png';
import WM3DLogoLab from "@/assets/images/3DWMLogoLab.png";

import btnArrow from "@/assets/images/btn-arrow.svg";
import Image from "next/image";
import Link from "next/link";

interface DataType {
  title?: string;
}

const HeroV2 = ({ title }: DataType) => {
  return (
    <>
      <div className="hero-sec about-hero-sec" id="hero">
        <div className="custom-container">
          <div className="hero-inner">
            <Image className="hero-shape" src={WM3DLogoLab} alt="Shape" />
            <div className="hero-top">
              <div className="hero-top-desc">
                <p>{`"At WAKEUPMONSTER, we hold that creativity sparks innovation. As a full-spectrum creative firm, we excel in converting ambitious ideas into engaging results."`}</p>
              </div>
              <div className="author-info">
                <h4>Rajat Khoware</h4>
                <span>Founder</span>
              </div>
            </div>
            <div className="hero-bottom">
              <div className="left">
                <h2>{title ? title : "Not found Page"}</h2>
                <h2>WAKEUPMONSTER</h2>
              </div>
              <Link href="/contact" className="theme-btn">
                {`Let's Connect`}
                <Image src={btnArrow} alt="icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroV2;
