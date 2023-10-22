import Image from "next/image";
import React from "react";

export default function HomePage({ className = "" }) {
  return (
    <section className={`${className}   h-[100vh]  `}>
      <div className="h-full w-full flex  items-center justify-around  p-[3rem] ">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2  text-[3rem] ">
            <span className="text-purple font-light">Hi there, I'm</span>
            <b className="text-purple">Francisco</b>
          </div>
          <div className="flex gap-2   text-xl">
            <span className="text-purple font-light"> I'm a </span>
            <b className="text-purple">Full Stack Developer</b>
          </div>
        </div>
        <div className=" relative  w-[50%] h-[60%]  ">
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
