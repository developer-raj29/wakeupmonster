"use client";
import { useEffect } from "react";
// import { ScrollToTop } from "react-simple-scroll-up";
import AOS from "aos";
import MagicCursor from "../animated/MagicCursor";
import dynamic from "next/dynamic";


const ScrollToTop = dynamic(
  () => import("react-simple-scroll-up").then((mod) => mod.ScrollToTop),
  { ssr: false }
);

const Dependency = () => {
  useEffect(() => {
    // Initialize AOS with configuration
    AOS.init({
      // easing: "ease-out-back",
      duration: 1000,
      once: true,
    });

    // Cleanup to refresh AOS on component unmount
    // return () => AOS.refresh();
  }, []);

  useEffect(() => {
    const loadBootstrap = async () => {
      await import("bootstrap/dist/js/bootstrap.bundle.min.js");
    };

    loadBootstrap();
  }, []);

  return (
    <>
      <MagicCursor />
      {/* <ScrollToTop
        symbol={<i className="fas fa-long-arrow-up" aria-hidden="true"></i>}
        aria-hidden="true"
      /> */}
      <ScrollToTop
        symbol={<i className="fas fa-long-arrow-up" aria-hidden="true"></i>}
        aria-hidden="true"
        //showUnder={160} // show button after 160px scroll
        bgColor="#000" // background color for circle
        strokeWidth={2} // stroke width (fixes NaN issue)
      />
    </>
  );
};

export default Dependency;
