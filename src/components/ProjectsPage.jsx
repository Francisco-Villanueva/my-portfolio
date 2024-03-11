import InternalLayout from "@/commons/InternalLayout";
import SectionLayout from "@/commons/SectionLayout";
import WorkCard from "@/commons/WorkCard";
import { projects } from "@/utils/projects";
import React from "react";

export default function ProjectsPage() {
  return (
    <InternalLayout className="pt-10 flex flex-col gap-4">
      <SectionLayout className=" grid grid-cols-2  w-[90%] place-items-center max-lg:flex  max-lg:flex-col gap-10 max-lg:items-center  max-md:w-[90%]   ">
        {projects
          .sort((a, b) => a.id - b.id)
          .map((project) => (
            <WorkCard project={project} key={project.id} />
          ))}
      </SectionLayout>
    </InternalLayout>
  );
}
