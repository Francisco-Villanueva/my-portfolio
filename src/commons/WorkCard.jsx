"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function WorkCard({ project }) {
  const [showInfo, setShowInfo] = useState(false);
  const handleHover = () => {
    setShowInfo(true);
  };
  const handleHoverOut = () => {
    setShowInfo(false);
  };
  return (
    <article
      onMouseOver={handleHover}
      onMouseOut={handleHoverOut}
      className=" relative w-[25rem] max-w-[25rem] h-[20rem] flex-grow   bg-white rounded-[50px]  transition-all duration-300 cursor-pointer hover:bg-dark-blue hover:rounded-[30px]  "
    >
      <Image
        src={project.logo}
        fill
        objectFit="contain"
        alt={project.title}
        className="scale-75"
      />

      {showInfo ? (
        <span className="absolute p-4  bottom-0 rounded-[30px] bg-[rgba(0,0,0,.75)] text-white">
          {project.description.short}
        </span>
      ) : null}
    </article>
  );
}
