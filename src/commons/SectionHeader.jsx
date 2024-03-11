import React from "react";

export default function SectionHeader({
  className = "",
  children,
  sectionTheme = "",
}) {
  return (
    <header
      className={` flex items-center justify-center gap-4 w-fill  ${className} `}
    >
      <article
        className={`text-3xl  grid place-items-center  ${
          sectionTheme === "purple" ? "text-white" : "text-purple"
        }  font-bold  `}
      >
        {children}
      </article>
    </header>
  );
}
