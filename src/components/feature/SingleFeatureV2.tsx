"use client";
import useHoverEffect from "@/hooks/useHoverEffect";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface DataType {
  id?: number;
  thumb?: string;
  name?: string;
  textFirst?: string;
  textLast?: string;
  info?: string;
  date?: string;
  delay?: number; // ✅ change from string → number
}

const SingleFeatureV2 = ({ features }: { features: DataType }) => {
  const { id, thumb, name, textFirst, textLast, info, date, delay } = features;

  const { containerRef, hoverElementRef } = useHoverEffect();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Build safe AOS props (only when client is ready)
  // const aosProps = isClient
  //   ? {
  //       "data-aos": "fade-up",
  //       ...(delay ? { "data-aos-delay": delay ?? 0 } : {}),
  //     }
  //   : {};

  const aosProps = isClient
    ? {
        "data-aos": "fade-up",
        "data-aos-delay": delay ?? 0,
      }
    : {};

  return (
    <div className="feature-project-single">
      <div className="feature-project" {...aosProps} ref={containerRef}>
        <div className="hover_mouse" ref={hoverElementRef}>
          <Link href={`/project-details/${id}`}>View</Link>
        </div>

        <div className="img-box">
          <Image
            src={`/assets/images/${thumb}`}
            alt={name || "Project image"}
            width={2544}
            height={1336}
          />
        </div>

        <div className="feature-project-infos">
          <div className="feature-project-info-box">
            <span className="title">Project Name:</span>
            <Link href={`/project-details/${id}`}>
              <span className="subtitle">{name}</span>
            </Link>
          </div>

          <div
            className={`feature-project-info-box ${
              !textFirst && !textLast ? "d-none" : ""
            }`}
          >
            <span className="title">Description</span>
            <span className="subtitle">
              {textFirst}
              <br />
              {textLast}
            </span>
            {/* <span className="subtitle">
              {textFirst}
              {textLast && (
                <>
                  <br />
                  {textLast}
                </>
              )}
            </span> */}
          </div>

          <div className="feature-project-info-box">
            <span className="title">Industry:</span>
            <span className="subtitle">{info}</span>
          </div>

          <div className={`feature-project-info-box ${!date ? "d-none" : ""}`}>
            <span className="title">Release Date:</span>
            <span className="subtitle">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeatureV2;
