"use client";
import WorkCard from "@/commons/WorkCard";
import projects from "@/utils/projects";
import React, { useState } from "react";

export default function ProjectsPage({ className = "" }) {
  return (
    <section
      className={`flex flex-wrap justify-center w-full gap-3   max-h-[80vh] overflow-y-auto  ${className} `}
    >
      {projects.map((project) => (
        <WorkCard project={project} key={project.id} />
      ))}
    </section>
  );
}
