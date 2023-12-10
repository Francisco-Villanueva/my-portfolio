import React from "react";

export default function PageLayout({ children, className = "", id }) {
  return (
    <section
      className={` min-h-[100vh] py-[3rem]  w-full  relative   ${className} `}
      id={id}
    >
      {children}
    </section>
  );
}
