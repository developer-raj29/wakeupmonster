"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define Tool type
export interface Tool {
  name: string;
  icon: string;
  weblink: string;
}

interface ToolboxProps {
  tools: Tool[];
}

const Toolbox = ({ tools }: ToolboxProps) => {
  const [transform, setTransform] = useState("translate3d(0,0,0) scale(1)");

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = (currentTarget as HTMLElement).getBoundingClientRect();

    // normalize mouse position [-1, 1]
    const x = ((clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 2;

    // apply translate + scale
    const moveX = x * 15; // sensitivity
    const moveY = y * 15;

    setTransform(`translate3d(${moveX}px, ${moveY}px, 0) scale(1.2)`);
  };

  const resetTransform = () => {
    setTransform("translate3d(0,0,0) scale(1)");
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage:
          "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    >
      <ul
        className="flex gap-4 w-min animate-marquee"
        // onMouseMove={handleMouseMove}
        // onMouseLeave={resetTransform}
      >
        {[...tools, ...tools].map((tool, i) => (
          <li
            key={i}
            style={{ transform }}
            className="flex size-16 items-center justify-center rounded-lg bg-neutral-900 border-1 border-neutral-800 hover:border-[#ff6224] transition-transform duration-300 ease-out"
            title={tool.name}
          >
            <Link href={tool.weblink} target="_blank">
              <Image
                src={tool.icon}
                alt={tool.name}
                width={28}
                height={28}
                className="object-contain"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toolbox;
