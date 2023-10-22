import React from "react";
import { PenIcon, CLIcon, BranchIcon, ToolsIcon, IdeaIcon } from "./Icons";

export default function ProjectStatus({ className = "", status, year = "" }) {
  const statusName = {
    develop: {
      msg: "In Development",
      className: "bg-[#574d55] text-white",
      icon: <BranchIcon className="w-3" color={"#fff"} />,
    },
    validating: {
      msg: "Validating Idea",
      className: "bg-[#7f84d9] text-white",
      icon: <IdeaIcon className="w-3" color={"#fff"} />,
    },
    prototype: {
      msg: "Prototyping",
      className: "bg-[#732c05] text-white",
      icon: <ToolsIcon className="w-3" color={"#fff"} />,
    },
    acquired: {
      msg: `Acquired in ${year}`,
      className: "bg-[#95d296] text-white",
      icon: <CLIcon className="w-3" />,
    },
  };
  return (
    <div
      className={`p-2 flex text-sm items-center gap-2 rounded-sm  ${statusName[status].className} ${className}`}
    >
      {statusName[status].icon}

      {statusName[status].msg}
    </div>
  );
}
