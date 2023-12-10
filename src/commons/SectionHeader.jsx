import React from "react";

export default function SectionHeader({
  className = "",
  children,
  sectionTheme = "",
}) {
  return (
    <header
      className={` absolute flex items-center gap-4 w-[90%]  top-0  left-[5rem] ${className} `}
    >
      <article
        className={`text-3xl  grid place-items-center shadow-md  z-50  ${
          sectionTheme === "purple" ? "text-white" : "text-purple"
        }  font-bold bg-${sectionTheme} rounded-full h-[4rem]  px-6`}
      >
        {children}
      </article>
    </header>
  );
}
