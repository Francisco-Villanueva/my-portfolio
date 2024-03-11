import React from "react";
import { CodeIcon } from "./Icons";

export default function FvLogo({ className = "" }) {
  return (
    <div className={`  flex items-center    ${className}`}>
      <CodeIcon className="w-9  rounded-full p-1  text-white " />
      <h2 className=" text-3xl  font-bold text-white  ">FV</h2>
    </div>
  );
}
