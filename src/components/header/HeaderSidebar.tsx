"use client";
import sidebarbg from "@/assets/images/sidebarbg.png";
import Image from "next/image";
import SocialShareV1 from "../social/SocialShareV1";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import navigationLinks from "@/assets/jsonData/navigation/navigationData2.json";

const HeaderSidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isHamburgActive, setIsHamburgActive] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsHamburgActive(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);

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

  console.log("sidebarRef.current: ", sidebarRef.current);

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
              {navigationLinks.map((item) => (
                <li key={item.id}>
                  <Link href={item.path} onClick={handleCloseClick}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-sidebar-bottom">
            <ul>
              <SocialShareV1 />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSidebar;
