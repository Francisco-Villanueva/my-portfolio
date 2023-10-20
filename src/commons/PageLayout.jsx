import React from "react";

export default function PageLayout({ children, className = "", id }) {
  return (
    <section
      className={`min-h-[100vh] h-[100vh] w-full flex flex-col justify-center  ${className} `}
      id={id}
    >
      {children}
    </section>
  );
}
