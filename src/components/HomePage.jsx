import Image from "next/image";
import React from "react";

export default function HomePage({ className = "" }) {
  return (
    <section className={`${className}   h-full `}>
      <div className="h-full w-full flex  items-center justify-around  p-[3rem] ">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2  text-[3rem] ">
            <span className="text-grey">Hi there, I'm</span>
            <b className="text-white">Francisco</b>
          </div>
          <div className="flex gap-2   text-xl">
            <span className="text-grey"> I'm a </span>
            <b className="text-white">Full Stack Developer</b>
          </div>
        </div>
        <div className=" relative  w-[50%] h-[60%]  ">
          <Image
            src="/dev.png"
            fill
            objectFit="contain"
            style={{
              filter: "drop-shadow(30px 10px 2px #000);",
            }}
          />
        </div>
      </div>
    </section>
  );
}
