"use client";
import Button from "@/commons/Button";
import { DropDownArrow } from "@/commons/Icons";
import InternalLayout from "@/commons/InternalLayout";
import MyProjectCard from "@/commons/MyProjectCard";
import SectionLayout from "@/commons/SectionLayout";
import WorkCard from "@/commons/WorkCard";
import useModal from "@/hooks/useModal";
import { projects, myProjects } from "@/utils/projects";
import React from "react";

export default function ProjectsPage({ className = "", sectionTheme = "" }) {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <InternalLayout className="pt-10 ">
      <SectionLayout className="grid grid-cols-3 gap-3 ">
        {projects.map((project) => (
          <WorkCard project={project} key={project.id} />
        ))}
      </SectionLayout>

      <div className="bg-purple w-[80%] m-auto rounded-[2rem] flex flex-col items-center gap-4 p-4 ">
        <div className=" flex flex-col items-center text-white gap-4  font-inter">
          <h2 className="text-3xl font-bold">My personal projects</h2>
          <span className="w-2/3 text-center font-medium">
            I'm a bit of a digital product junky. Over the years, I've used
            hundreds of web and mobile apps in different industries and
            verticals. Eventually, I decided that it would be a fun challenge to
            try designing and building my own.
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 w-[90%] ">
          {myProjects.slice(0, 3).map((project) => (
            <MyProjectCard project={project} />
          ))}
        </div>
        {isModalOpen && (
          <div className="grid grid-cols-3 gap-2 w-[90%] ">
            {myProjects.slice(3).map((project) => (
              <MyProjectCard project={project} />
            ))}
          </div>
        )}

        {myProjects.length > 3 && (
          <Button
            variant={"primary"}
            className="font-bold m-auto"
            onClick={isModalOpen ? closeModal : openModal}
          >
            <DropDownArrow
              className={`transition-all duration-150 ${
                isModalOpen ? "rotate-180" : "rotate-360"
              }`}
            />
          </Button>
        )}
      </div>
    </InternalLayout>
  );
}
