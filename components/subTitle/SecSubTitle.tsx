import Image, { StaticImageData } from "next/image";
import React from "react";

interface Types {
  img: string | StaticImageData;
  text: string;
}

const SecSubTitle = ({ img, text }: Types) => {
  return (
    <span className="section-subtitle">
      <Image src={img} alt="icon" />
      {text}
    </span>
  );
};

export default SecSubTitle;
