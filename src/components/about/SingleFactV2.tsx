"use client";
import { useEffect } from "react";
import Image from "next/image";
import angleIcon from "@/assets/images/angle-icon-1.svg";
import AOS from "aos";

interface DataType {
  activeClass: string;
  thumb: string;
  delay: string;
  title: string;
  end: string;
}

const SingleFactV2 = ({ fact }: { fact: DataType }) => {
  const { activeClass, thumb, delay, title, end } = fact;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay ?? 0}
      className={`funfact-box ${activeClass}`}
      suppressHydrationWarning
    >
      <Image
        src={thumb ? `/assets/images/${thumb}` : "/assets/images/fallback.png"}
        alt="funfact"
        className="overlay"
        width={512}
        height={512}
      />
      <div className="funfact-header">
        <span className="title">{title}</span>
      </div>
      <div className="funfact-footer">
        <span className="number">
          {end}
          <span>+</span>
        </span>
        <Image src={angleIcon} alt="icon" />
      </div>
    </div>
  );
};

export default SingleFactV2;
