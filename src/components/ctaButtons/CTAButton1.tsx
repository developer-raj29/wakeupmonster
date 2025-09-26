import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface DataType {
  to: string;
  text: string;
  img: string | StaticImageData;
}

const CTAButton1 = ({ to, text, img }: DataType) => {
  return (
    <Link href={to} className="theme-btn">
      {text}
      <Image src={img} alt="icon" />
    </Link>
  );
};

export default CTAButton1;
