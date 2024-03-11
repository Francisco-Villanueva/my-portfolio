import Image from "next/image";
import React from "react";

export default function HomePage({ className = "" }) {
  return (
    <section
      className={`${className}   h-[100vh] max-md:grid max-md:place-items-center  `}
    >
      <div className="h-full w-full flex   items-center justify-around   p-[3rem] max-md:flex-col max-md:gap-8 max-md:justify-center max-md:h-3/3 max-md:p-0 ">
        <div className="flex flex-col gap-4 text-purple">
          <div className="flex gap-2 items-center text-[3rem] max-md:text-xl    ">
            <span className=" font-light text-3xl max-md:text-lg">
              Hi there, I'm
            </span>
            <b className=" font-bold text-purple">Francisco Villanueva </b>
          </div>
          <div className="flex gap-2   text-xl max-md:text-lg">
            <span className=" font-semibold">Full Stack Developer</span>
          </div>
        </div>
        <div className=" relative  w-[50%] h-[60%] max-md:w-full max-md:h-1/3 max-sm:h-1/4 ">
          <Image
            src="/dev.png"
            fill
            objectFit="contain"
            style={{
              filter: "drop-shadow(10px 10px 2px #000);",
            }}
          />
        </div>
      </div>
    </section>
  );
}
