"use client";
import { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";

interface DataType {
  number: string;
  thumb: string;
  alt: string;
  name: string;
  designation: string;
  description: string;
  delay: number;
}

const SingleProcessV1 = ({ process }: { process: DataType }) => {
  const { number, thumb, name, designation, description, delay } = process;

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
        <div
            className="team-member-box process-box"
            data-aos="fade-up"
            data-aos-delay={delay ?? 0}
            suppressHydrationWarning
        >
            <div className="img-box">
               <span className="number">{number}</span>
               <Image
                 src={`/assets/images/${thumb}`}
                 alt={name || "Process"}
                 width={745}
                 height={760}
               />
            </div>
            <div className="content">
              <span className="name">{name}</span>
              <span className="designation">{designation}</span>
              <div className="shape">
                <span />
              </div>
              <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleProcessV1;
