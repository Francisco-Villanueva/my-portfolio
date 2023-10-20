"use client";

import React from "react";

export default function NavLink({
  className = "",
  value,
  selected,
  setSelected,
}) {
  return (
    <a
      href={`#${value}`}
      onClick={() => setSelected(value)}
      className={`${className} ${
        selected ? " bg-white" : "bg-gray-600"
      }  px-4 py-1 rounded-md text-dark-blue cursor-pointer transition-all duration-300`}
    >
      {value}
    </a>
  );
}
