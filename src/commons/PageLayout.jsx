import React from "react";

export default function PageLayout({ children, className = "", id }) {
  return (
    <section
      className={` min-h-[100vh] py-[5rem]  w-full  relative flex flex-col justify-center gap-10  ${className} `}
      id={id}
    >
      {children}
    </section>
  );
}
