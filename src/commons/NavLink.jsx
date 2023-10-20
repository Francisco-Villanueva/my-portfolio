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
        selected
          ? scrolling
            ? " bg-purple text-white"
            : "text-white"
          : "bg-none"
      }  px-4 py-1 rounded-md text-dark-blue cursor-pointer transition-all duration-300`}
    >
      {value}
    </a>
  );
}
