import { Globe } from "../ui/globe";
import { NumberTicker } from "../ui/number-ticker";

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

export const features = [
  {
    id: "1",
    className: "row-start-1 row-end-4 col-span-2",
    background: (
      <div className="relative flex flex-col items-center justify-around w-full h-full">
        <div className="w-[226px] h-[321px] flex items-center justify-center transition duration-300 hover:scale-105">
          <img
            src="/assets/images/framer-logo.png"
            alt="Framer Logo"
            className="w-full h-full mx-auto"
          />
        </div>
        <div className="mt-1 w-10/12 flex flex-col gap-1 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          <h3 className="text-lg">Framer Pro Expert & Partner</h3>
          <a
            href="#"
            className="text-sm text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            Learn More →
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "2",
    className: "row-start-1 row-end-4 col-span-4",
    background: (
      <div>
        {/* <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">
          Based in Quebec, Canada
        </div>
        <p className="flex items-center font-semibold justify-center gap-2 text-sm text-neutral-400">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          AVAILABLE WORLDWIDE
        </p> */}
        <div className="relative flex items-center justify-center w-full h-full">
          <Globe className="top-28" />
        </div>
      </div>
    ),
  },
  {
    id: "3",
    className: "row-start-1 row-end-2 col-start-7 col-span-1",
    background: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-[38px] font-medium text-white">
          <NumberTicker
            value={12}
            className="tracking-tighter whitespace-pre-wrap text-white"
          />
          <span>+</span>
        </div>
        <h4>Years Experience</h4>
      </div>
    ),
  },
  {
    id: "4",
    className: "row-start-2 row-end-3 col-start-7 col-span-1",
    background: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-[38px] font-medium text-white">
          <NumberTicker
            value={25}
            className="tracking-tighter whitespace-pre-wrap text-white"
          />
          <span>+</span>
        </div>
        <h4>Completed Projects</h4>
      </div>
    ),
  },
  {
    id: "5",
    className: "row-start-3 row-end-4 col-start-7 col-span-1",
    background: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-[38px] font-medium text-white">
          <NumberTicker
            value={110}
            className="tracking-tighter whitespace-pre-wrap text-white"
          />
          <span>+</span>
        </div>
        <h4>Award Winning</h4>
      </div>
    ),
  },
  {
    id: "6",
    className: "col-span-7",
    background: <>24+</>,
  },
];

// export const features = [
//   {
//     id: "1",
//     Icon: FileTextIcon,
//     name: "Save your files",
//     description: "We automatically save your files as you type.",
//     href: "#",
//     cta: "Learn more",
//     className: "row-start-1 row-end-4 col-span-2",
//     background: (
//       <Marquee
//         pauseOnHover
//         className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
//       >
//         {files.map((f, idx) => (
//           <figure
//             key={idx}
//             className={cn(
//               "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
//               "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//               "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//               "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
//             )}
//           >
//             <div className="flex flex-row items-center gap-2">
//               <div className="flex flex-col">
//                 <figcaption className="text-sm font-medium dark:text-white">
//                   {f.name}
//                 </figcaption>
//               </div>
//             </div>
//             <blockquote className="mt-2 text-xs">{f.body}</blockquote>
//           </figure>
//         ))}
//       </Marquee>
//     ),
//   },
//   {
//     id: "2",
//     Icon: GoLocation,
//     name: "Remote",
//     description: "AVAILABLE WORLDWIDE",
//     href: "/",
//     cta: "connect now",
//     background: (
//       <>
//         <div className="bg-background relative flex size-full max-w-xl max-h-full items-center justify-center overflow-hidden rounded-lg border px-40 pt-8 pb-40 md:pb-60">
//           <Globe className="top-2" />
//           <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
//         </div>
//       </>
//     ),
//     className: "row-start-1 row-end-4 col-span-4",
//   },
//   {
//     id: "3",
//     Icon: BellIcon,
//     name: "",
//     description: "",
//     href: "#",
//     cta: "Learn more",
//     className: "col-7 col-span-1",
//     background: <>24+</>,
//   },
//   {
//     id: "4",
//     Icon: BellIcon,
//     name: "",
//     description: "",
//     href: "#",
//     cta: "Learn more",
//     className: "col-7 col-span-1",
//     background: <>24+</>,
//   },
//   {
//     id: "5",
//     Icon: BellIcon,
//     name: "",
//     description: "",
//     href: "#",
//     cta: "Learn more",
//     className: "col-7 col-span-1",
//     background: <>24+</>,
//   },
//   {
//     id: "6",
//     Icon: Share2Icon,
//     name: "Integrations",
//     description: "Supports 100+ integrations and counting.",
//     href: "#",
//     cta: "Learn more",
//     className: "col-span-7",
//     background: (
//       <Marquee
//         pauseOnHover
//         className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
//       >
//         {files.map((f, idx) => (
//           <figure
//             key={idx}
//             className={cn(
//               "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
//               "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//               "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//               "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
//             )}
//           >
//             <div className="flex flex-row items-center gap-2">
//               <div className="flex flex-col">
//                 <figcaption className="text-sm font-medium dark:text-white">
//                   {f.name}
//                 </figcaption>
//               </div>
//             </div>
//             <blockquote className="mt-2 text-xs">{f.body}</blockquote>
//           </figure>
//         ))}
//       </Marquee>
//     ),
//   },
// ];
