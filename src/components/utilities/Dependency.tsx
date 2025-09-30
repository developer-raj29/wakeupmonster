"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import MagicCursor from "../animated/MagicCursor";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed p-3 bottom-6 right-6 rounded-full border-1 bg-black text-white shadow-lg hover:bg-gray-800 transition"
        aria-label="Scroll to top"
      >
        <FaArrowUp fontSize={20} />
      </button>
    )
  );
};

const Dependency = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true });
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
      <ScrollToTop />
    </>
  );
};

export default Dependency;
