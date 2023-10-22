"use client";

import React from "react";

export default function NavLink({
  className = "",
  value,
  selected,
  setSelected,
  scrolling,
}) {
  return (
    <a
      href={`#${value}`}
      onClick={() => setSelected(value)}
      className={`${className} font-semibold ${
        selected ? "text-purple" : "text-light-purple"
      }  px-4 py-1 rounded-md  cursor-pointer transition-all duration-300`}
    >
      {value}
    </a>
  );
}
