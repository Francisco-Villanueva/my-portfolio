"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import { GithubIcon } from "./Icons";

export default function WorkCard({ project, className = "" }) {
  return (
    <article className="flex max-md:flex-col justify-between gap-4 w-[60%]  max-md:w-full text-black ">
      <div className="w-1/3 max-md:w-full h-[60px] relative ">
        <Image
          src={project.logo}
          fill
          objectFit="contain"
          alt={project.title}
        />
      </div>
      <div className="flex flex-col gap-4 w-2/3 max-md:w-full border-l pl-6">
        <div className="">
          <h2 className=" font-bold text-xl ">{project.title}</h2>
          <div className="font-normal text-black">
            {project.date.start} - {project.date.end}
          </div>
        </div>

        <span className="  text-md max-lg:text-sm ">
          {project.description.short}
        </span>

        <div className="flex gap-2  justify-around   ">
          {project.repos.map((repo) => (
            <Button variant={"primary"}>
              <div className=" flex flex-col items-center  ">
                <a href={project.url}>
                  <GithubIcon className="h-6 " />
                </a>
                <span className="text-xs font-light">{repo.name}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
}
