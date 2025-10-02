"use client";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { StaticImageData } from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ServiceBoxProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface ServiceCardProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  video: string;
  btnText: string;
  heading: string;
  poster: string;
}

const ServiceBox = ({ className, children, ...props }: ServiceBoxProps) => {
  return (
    <div
      className={cn(
        "relative h-fit w-full overflow-hidden rounded-lg flex flex-wrap gap-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const ServiceCard = ({ video, poster, btnText, heading }: ServiceCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div
      className="relative w-[425px] h-[550px] rounded-[10px] bg-[#0c0b0b] group cursor-pointer border-[1px] border-neutral-700 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Learn More Button → moves with mouse */}
      {isPlaying && (
        <button
          className="absolute px-4 py-2 flex gap-1 items-center bg-white text-black text-sm uppercase font-bold rounded-md shadow transition-all duration-150"
          style={{
            top: `${mousePos.y - 20}px`,
            left: `${mousePos.x - 40}px`,
          }}
        >
          {btnText} <FaArrowRight />
        </button>
      )}

      {/* Title → color changes when playing */}
      <div
        className={cn(
          "absolute bottom-6 left-8 text-2xl font-medium transition-colors duration-300",
          isPlaying ? "text-[#ff6224]" : "text-white"
        )}
      >
        {heading}
      </div>
    </div>
  );
};

export { ServiceBox, ServiceCard };
