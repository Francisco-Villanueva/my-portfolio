import React from "react";

export default function SectionLayout({ children, className = "" }) {
  return (
    <section className={`${className} w-[80%] m-auto `}>{children}</section>
  );
}
