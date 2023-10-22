"use client";

import FvLogo from "@/commons/FvLogo";
import NavLink from "@/commons/NavLink";
import SectionLayout from "@/commons/SectionLayout";
import React, { useEffect, useState } from "react";

export default function Navbar({ className = "" }) {
  const [navState, setNavState] = useState("Home");
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={` ${className} w-full  m-auto py-4   z-40  rounded-none `}>
      <div className="w-[90%] flex justify-between m-auto">
        <section>
          <FvLogo />
        </section>
        <section className="flex items-center gap-4 ">
          <NavLink
            value="Home"
            selected={navState === "Home"}
            setSelected={setNavState}
            scrolling={scrolling}
          />
          <NavLink
            value="Skills"
            selected={navState === "Skills"}
            setSelected={setNavState}
            scrolling={scrolling}
          />
          <NavLink
            value="Projects"
            selected={navState === "Projects"}
            setSelected={setNavState}
            scrolling={scrolling}
          />
          <NavLink
            value="ConactUs"
            selected={navState === "ConactUs"}
            setSelected={setNavState}
            scrolling={scrolling}
          />
        </section>
      </div>
    </nav>
  );
}
