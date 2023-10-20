"use client";
import InternalLayout from "@/commons/InternalLayout";
import SectionHeader from "@/commons/SectionHeader";
import SectionLayout from "@/commons/SectionLayout";
import WorkCard from "@/commons/WorkCard";
import projects from "@/utils/projects";
import React, { useState } from "react";

export default function ProjectsPage({ className = "" }) {
  return (
    <InternalLayout>
      <SectionHeader>PROJECTS</SectionHeader>

      <SectionLayout className="grid grid-cols-3 gap-3 ">
        {projects.map((project) => (
          <WorkCard project={project} key={project.id} />
        ))}
      </SectionLayout>
    </InternalLayout>
  );
}
