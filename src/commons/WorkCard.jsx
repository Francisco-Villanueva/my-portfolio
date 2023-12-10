"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import { GithubIcon } from "./Icons";

export default function WorkCard({ project, className = "" }) {
  const [showInfo, setShowInfo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setShowInfo(true);
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setShowInfo(false);
    setIsHovered(false);
  };
  return (
    <article
      onMouseOver={handleHover}
      onMouseOut={handleHoverOut}
      className={`relative h-[20rem] rounded-[5px] 
       overflow-hidden hover:border  transition-all duration-200 ${className}`}
    >
      <Image
        src={project.logo}
        fill
        objectFit="contain"
        alt={project.title}
        className={`  scale-75 transition-all duration-300 ${
          isHovered ? "transform scale-[4]" : ""
        }`}
        style={{
          filter: "drop-shadow(2px 10px 4px rgba(0,0,0,.5)",
        }}
      />

      {showInfo ? (
        <span className="grid place-items-center  absolute p-4 h-full  w-full  bg-[rgba(255,255,255,.95)] cursor-pointer ">
          <div className=" flex flex-col justify-between items-center h-[80%]  font-bold text-purple font-montserrat ">
            <span className=" w-3/4 text-md ">{project.description.short}</span>
            <div className="flex gap-2 border justify-center">
              {project.repos.map((repo) => (
                <Button
                  variant={"primary"}
                  className=" flex flex-col items-center w-[60px]"
                >
                  <a href={project.url}>
                    <GithubIcon className="h-6 " />
                  </a>
                  <span className="text-xs font-light">{repo.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </span>
      ) : null}
    </article>
  );
}
