"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import btnArrow from "@/assets/images/btn-arrow.svg";
import footerLinks from "@/assets/jsonData/data/footerLinks.json";
import footerSocials from "@/assets/jsonData/data/footerSocials.json";

const Footer3 = () => {
  return (
    <footer className="relative w-full flex flex-col items-center text-white overflow-hidden">
      {/* ================= BLACK FOOTER ================= */}
      <div className="relative z-[2] w-full bg-black flex items-center justify-center py-10 px-6">
        <div className="w-full max-w-[1400px] flex flex-col gap-10">
          {/* -------- Top Section -------- */}
          <div className="flex justify-between w-full text-sm">
            {/* ========Contact======= */}
            <div className="w-min flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <p className="uppercase text-base tracking-wider text-gray-400">
                  (Email)
                </p>
                <h3 className="text-4xl font-semibold text-[#FF4422] cursor-pointer duration-300">
                  hello@wakeupmonster.com
                </h3>
              </div>

              <div className="flex items-center gap-6">
                <p className="uppercase text-base tracking-wider text-gray-400">
                  (Phone)
                </p>
                <p className="text-3xl font-semibold hover:text-[#FF4422] cursor-pointer duration-300">
                  +91 6260002320
                </p>
              </div>
            </div>

            <div className="w-full max-w-[60%] flex justify-between">
              <div className="flex gap-8">
                {/* ========(Links)========= */}
                <div>
                  <p className="uppercase text-[16px] tracking-wider text-gray-400 mb-4">
                    (Links)
                  </p>
                  <ul className="space-y-6 text-[24px] font-medium">
                    {footerLinks.map((i, index) => (
                      <li key={index} className="w-max">
                        <Link
                          href={i.path}
                          data-aos="slide-up"
                          data-aos-duration={700}
                          className="with-border flex items-center gap-2"
                        >
                          <Image
                            src={btnArrow}
                            loading="lazy"
                            className="w-3 h-3 block"
                            alt="icon"
                          />
                          {i.page}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ========(Socials)======= */}
                <div>
                  <p className="uppercase text-[16px] tracking-wider text-gray-400 mb-4">
                    (Socials)
                  </p>
                  <ul className="space-y-6 text-[24px] font-medium">
                    {footerSocials.map((i, index) => (
                      <li key={index}>
                        <Link
                          href={i.path}
                          data-aos="slide-up"
                          data-aos-duration={700}
                          className="with-border flex items-center gap-2"
                        >
                          <Image
                            src={btnArrow}
                            loading="lazy"
                            className="w-3 h-3 block"
                            alt="icon"
                          />
                          {i.page}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* === Newsletter === */}
              <div className="w-full max-w-[390px] flex flex-col justify-start">
                <p className="text-[16px] font-semibold mb-4 leading-tight text-gray-300">
                  Sign up for our newsletter to <br />
                  get latest insights and updates
                </p>

                <p className="uppercase text-[16px] tracking-wider text-gray-400 mb-3">
                  Enter email address
                </p>

                <div className="flex flex-col gap-4 items-start border-gray-700 overflow-hidden w-full">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="flex-1 w-full bg-transparent border-b-[1px] px-1 py-3 text-lg outline-none text-white placeholder-gray-500"
                  />

                  <Link href="/contact" className="theme-btn w-full text-xl font-bold">
                    {`SUBSCRIBE`}
                    <Image
                      src={btnArrow}
                      loading="lazy"
                      className="w-3 h-3 block"
                      alt="icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* -------- Bottom Row -------- */}
          <div className="flex flex-col items-start text-[13px] text-gray-400 text-center">
            <p className="uppercase tracking-wider text-gray-400/90">
              &copy;{new Date().getFullYear()} WAKE UP MONSTER ALL RIGHTS
              RESERVED
            </p>

            <div className="flex items-center gap-2 mt-2">
              <a
                href="#"
                className="text-[#ffff] hover:text-[#FF4422] duration-300 font-medium"
              >
                Privacy Policy
              </a>
              <span className="border-2 rounded-xl"></span>
              <a
                href="#"
                className="text-[#ffff] hover:text-[#FF4422] duration-300 font-medium"
              >
                Terms of Service
              </a>
            </div>
            {/* <p className="mt-3 md:mt-0 text-gray-500">
              MADE BY{" "}
              <span className="text-white font-medium">VELOX THEMES</span>
            </p> */}
          </div>
        </div>
      </div>

      {/* ================= ORANGE BACKGROUND ================= */}
      <div className="relative z-[1] w-full h-[55vh] bg-[#FF4422] px-10 flex items-center justify-center text-black">
        <h1 className="text-[165px] font-sans font-extrabold leading-none tracking-tighter uppercase">
          Wake Up<sup className="text-[30px] align-super"> ®</sup> monster
        </h1>
        <h3 className="text-5xl md:text-6xl w-max max-w-64 font-bold mt-6 text-end">
          Beyond Visuals. Built with Vision.
        </h3>
      </div>
    </footer>
  );
};

// Disable SSR if you plan to add scroll / motion effects later
export default dynamic(() => Promise.resolve(Footer3), { ssr: false });
