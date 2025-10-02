"use client";
import sidebarbg from "@/assets/images/sidebarbg.png";
import Image from "next/image";
import SocialShareV1 from "../social/SocialShareV1";
import { useEffect, useRef, useState } from "react";
import logo1 from "@/assets/images/WMLogo2.png";
import useNotchScrollLink from "@/hooks/useNotchScrollLink";
import Navigation from "./Navigation";
import navigationLinks from "@/assets/jsonData/navigation/navigationData1.json";

const HeaderV3 = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isHamburgActive, setIsHamburgActive] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsHamburgActive(window.scrollY >= 100);
    };

    // Attach event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHamburgClick = () => {
    setIsSidebarActive(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseClick = () => {
    setIsSidebarActive(false);
    document.body.style.overflow = "auto";
  };

  useNotchScrollLink(".notch-bar-menu-wrap", "a[href^='#']");

  // ✅ Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isSidebarActive
      ) {
        handleCloseClick();
      }
    };

    if (isSidebarActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarActive]);

  return (
    <>
      {/* hamburg-menu */}
      <div className="scroll-to-show-menu">
        <span
          className={`hamburg-menu ${isHamburgActive ? "active" : ""}`}
          onClick={handleHamburgClick}
        >
          <span />
          <span />
          <span />
        </span>
      </div>

      {/* Sidebar */}
      <div className={`header-sidebar-wrap ${isSidebarActive ? "active" : ""}`}>
        <div className="header-sidebar-content" ref={sidebarRef}>
          <span className="close-header-sidebar" onClick={handleCloseClick}>
            <i className="las la-times" />
          </span>

          {/* Sidebar image */}
          <Image src={sidebarbg} alt="sidebar" className="sidebar-shape" />
          <div className="header-sidebar-top">
            <ul>
              <li>
                <span>Based in India,</span>
                <a href="mailto:hello@wakeupmonster.com">
                  E: hello@wakeupmonster.com
                </a>
              </li>
              <li>
                <span>Indore</span>
                <a href="tel:+91 6260002320">+91 6260002320</a>
              </li>
            </ul>
          </div>

          {/* Sidebar menu */}
          <nav className="sidebar-menu">
            <ul className="menu" id="sidebar-menu-id">
              <li>
                <a href="#about" onClick={handleCloseClick}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={handleCloseClick}>
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleCloseClick}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#awards" onClick={handleCloseClick}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#team" onClick={handleCloseClick}>
                  Members
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={handleCloseClick}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleCloseClick}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-sidebar-bottom">
            <ul>
              <SocialShareV1 />
            </ul>
          </div>
        </div>
      </div>

      {/* Notch Bar Menu Wrap */}
      <div className="notch-bar-menu-wrap">
        <ul>
          <li>
            <a className="anchor active" href="#hero">
              Hero
            </a>
          </li>
          <li>
            <a className="anchor" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="anchor" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="anchor" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="anchor" href="#awards">
              Awards
            </a>
          </li>
          <li>
            <a className="anchor" href="#team">
              Team
            </a>
          </li>
          <li>
            <a className="anchor" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a className="anchor" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Sidebar 2 */}
      <div className={`header-sidebar-wrap ${isSidebarActive ? "active" : ""}`}>
        <div className="header-sidebar-content">
          <span className="close-header-sidebar" onClick={handleCloseClick}>
            <i className="las la-times" />
          </span>

          {/* Sidebar image */}
          <Image src={sidebarbg} alt="sidebar" className="sidebar-shape" />
          <div className="header-sidebar-top">
            <ul>
              <li>
                <span>Based in India,</span>
                <a href="mailto:hello@wakeupmonster.com">
                  E: hello@wakeupmonster.com
                </a>
              </li>
              <li>
                <span>Indore</span>
                <a href="tel:+91 6260002320">+91 6260002320</a>
              </li>
            </ul>
          </div>

          {/* Sidebar menu */}
          <nav className="sidebar-menu">
            <ul className="menu" id="sidebar-menu-id">
              <li>
                <a href="#about" onClick={handleCloseClick}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={handleCloseClick}>
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleCloseClick}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#awards" onClick={handleCloseClick}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#team" onClick={handleCloseClick}>
                  Members
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={handleCloseClick}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleCloseClick}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-sidebar-bottom">
            <ul>
              <SocialShareV1 />
            </ul>
          </div>
        </div>
      </div>

      {/* header-menu-wrap */}
      <header className="header-menu-wrap">
        <div className="custom-container">
          <div className="custom-row">
            <Navigation navigationLinks={navigationLinks} logo1={logo1} />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderV3;
