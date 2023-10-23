import React from "react";

export default function PageLayout({ children, className = "", id }) {
  return (
    <section
      className={` min-h-[100vh] pb-[3rem]  w-full  relative   ${className} `}
      id={id}
    >
      {children}
    </section>
  );
}
