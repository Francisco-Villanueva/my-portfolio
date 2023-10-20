import React from "react";

export default function InternalLayout({ className = "", children }) {
  return (
    <article className={` flex flex-col justify-around  h-[90%] ${className}`}>
      {children}
    </article>
  );
}
