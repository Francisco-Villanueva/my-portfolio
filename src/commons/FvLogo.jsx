import React from "react";
import { CodeIcon } from "./Icons";

export default function FvLogo({ className = "" }) {
  return (
    <div className={`  flex items-center gap-2   ${className}`}>
      <CodeIcon className="w-9  rounded-full p-1  " />
      <h2 className=" text-3xl  font-bold text-purple ">FV</h2>
    </div>
  );
}
