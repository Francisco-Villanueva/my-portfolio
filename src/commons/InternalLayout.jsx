import React from "react";

export default function InternalLayout({ className = "", children }) {
  return (
    <article className={` flex flex-col  gap-4  h-[90%] ${className}`}>
      {children}
    </article>
  );
}
