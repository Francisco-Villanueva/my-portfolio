import Image from "next/image";
import React from "react";

export default function HomePage({ className = "" }) {
  return (
    <section
      className={`${className}   h-[100vh] max-md:grid max-md:place-items-center `}
    >
      <div className="h-full w-full flex   items-center justify-around   p-[3rem] max-md:flex-col max-md:gap-8 max-md:justify-center max-md:h-2/3  ">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2  text-[3rem] max-md:text-[1.5rem]   ">
            <span className="text-purple font-light">
              Hi there, I'm{" "}
              <b className="text-purple font-bold">Francisco Villanueva </b>
            </span>
          </div>
          <div className="flex gap-2   text-xl max-md:text-lg">
            <span className="text-purple font-light"> I'm a </span>
            <b className="text-purple">Full Stack Developer</b>
          </div>
        </div>
        <div className=" relative  w-[50%] h-[60%] max-md:w-full max-md:h-1/2  ">
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
