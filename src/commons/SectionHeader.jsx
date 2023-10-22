import React from "react";

export default function SectionHeader({ className = "", children }) {
  return (
    <header
      className={`${className} flex items-center gap-4 w-[90%] m-auto translate-y-[-50%] `}
    >
      <article className=" text-3xl  grid place-items-center text-purple font-bold bg-white rounded-full h-[4rem]  px-6">
        {children}
      </article>
      {/* <div className="border bg-white rounded-full  h-[.2rem] flex-grow"></div> */}
    </header>
  );
}
