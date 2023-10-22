import React from "react";

export default function PageLayout({ children, className = "", id }) {
  return (
    <section
      className={` min-h-[100vh]   w-full flex flex-col pb-[5rem]   ${className} `}
      id={id}
    >
      {children}
    </section>
  );
}
