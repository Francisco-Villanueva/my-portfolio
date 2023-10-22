import React from "react";
import { CodeIcon } from "./Icons";
import ProjectStatus from "./ProjectStatus";

export default function MyProjectCard({ className = "", project }) {
  return (
    <div
      className={` grid place-items-center p-4 flex-grow  h-[15rem] bg-white rounded-md shadow-sm text-purple ${className}`}
      key={project.id}
    >
      <div className="flex flex-col items-center justify-between h-[90%] ">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center gap-2">
            <CodeIcon className="w-6" />

            <h2 className="text-xl font-bold"> {project.title}</h2>
          </div>
          <span>{project.description}</span>
        </div>

        <ProjectStatus status={project.status} />
      </div>
    </div>
  );
}
