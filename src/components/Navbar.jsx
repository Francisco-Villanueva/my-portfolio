"use client";

import FvLogo from "@/commons/FvLogo";
import NavLink from "@/commons/NavLink";
import React, { useState } from "react";

export default function Navbar({ className = "" }) {
  const [navState, setNavState] = useState("Home");
  return (
    <nav className={` ${className}  p-3 flex justify-between w-full z-40`}>
      <section>
        <FvLogo />
      </section>
      <section className="flex items-center gap-4 text-white">
        <NavLink
          value="Home"
          selected={navState === "Home"}
          setSelected={setNavState}
        />
        <NavLink
          value="Skills"
          selected={navState === "Skills"}
          setSelected={setNavState}
        />
        <NavLink
          value="Projects"
          selected={navState === "Projects"}
          setSelected={setNavState}
        />
        <NavLink
          value="Contact Us"
          selected={navState === "Contact Us"}
          setSelected={setNavState}
        />
      </section>
    </nav>
  );
}
