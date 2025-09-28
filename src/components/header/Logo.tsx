import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface type {
  logo1: string | StaticImageData;
}

const Logo = ({ logo1 }: type) => {
  return (
    <Link href="/" className="box">
      <div className="logo">
        <Image src={logo1} alt="logo" />
      </div>

      <div className="text">
        <div>WAKEUP</div>
        <div>MONSTER</div>
      </div>
    </Link>
  );
};

export default Logo;
