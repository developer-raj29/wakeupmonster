"use client";
import unionIcon from "@/assets/images/Union.svg";
import AnimatedText from "../animated/AnimatedText";
import SingleFactV1 from "./SingleFactV1";
import FactData from "@/assets/jsonData/fact/FactData.json";
import { useState } from "react";
import SecSubTitle from "../subTitle/SecSubTitle";
import Title from "../subTitle/Title";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { GoLocation } from "react-icons/go";
import { Globe } from "../ui/globe";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { Marquee } from "../ui/marquee";
import { cn } from "@/lib/utils";
// import { Calendar } from "@/components/ui/calendar";
// import AnimatedBeamMultipleOutputDemo from "@/registry/example/animated-beam-multiple-outputs";
// import AnimatedListDemo from "@/registry/example/animated-list-demo";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];
const features = [
  {
    id: "1",
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "row-start-1 row-end-4 col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    id: "2",
    Icon: GoLocation,
    name: "Remote",
    description: "AVAILABLE WORLDWIDE",
    href: "/",
    cta: "connect now",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        <Globe />
      </Marquee>
    ),
    className: "row-start-1 row-end-4 col-span-4",
  },
  {
    id: "3",
    Icon: BellIcon,
    name: "",
    description: "",
    href: "#",
    cta: "Learn more",
    className: "col-7 col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        24+
      </Marquee>
    ),
  },
  {
    id: "4",
    Icon: BellIcon,
    name: "",
    description: "",
    href: "#",
    cta: "Learn more",
    className: "col-7 col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        24+
      </Marquee>
    ),
  },
  {
    id: "5",
    Icon: BellIcon,
    name: "",
    description: "",
    href: "#",
    cta: "Learn more",
    className: "col-7 col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        24+
      </Marquee>
    ),
  },
  {
    id: "6",
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-7",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
];

const AboutV1 = () => {
  const [activeServiceId, setActiveServiceId] = useState(
    FactData[0]?.id || null
  );

  const handleMouseEnter = (id: number) => {
    setActiveServiceId(id);
  };

  const handleMouseLeave = () => {
    // Do nothing on mouse leave to keep the active item
  };

  return (
    <>
      <div className="about-sec" id="about">
        <div className="custom-container">
          <div className="section-header">
            <SecSubTitle img={unionIcon} text={"About Us"} />
            <AnimatedText>
              Founded on the principles of creativity, collaboration, and
              excellence, Wake up Monster is a diverse team of industry experts
              dedicated to delivering outstanding results...
            </AnimatedText>
          </div>

          <BentoGrid className="grid-rows-4 grid-cols-7">
            {features.map((feature, index) => (
              <BentoCard key={index} {...feature} />
            ))}
          </BentoGrid>

          {/* <div className="funfacts-wrap">
            {FactData.map((fact) => (
              <div
                className={`funfact-box ${
                  activeServiceId === fact.id ? "active" : ""
                }`}
                key={fact.id}
                onMouseEnter={() => handleMouseEnter(fact.id)}
                onMouseLeave={handleMouseLeave}
              >
                <SingleFactV1 fact={fact} />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutV1;

/*



*/
