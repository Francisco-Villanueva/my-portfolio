import SkillCard from "@/commons/SkillCard";
import React from "react";

export default function SkillColumn({
  title,
  iconTitle,
  skills = [],
  description,
}) {
  return (
    <div className="bg-white p-4 rounded-md drop-shadow-2xl  ">
      <header className="flex flex-col items-center gap-2 text-3xl font-montserrat">
        {iconTitle}
        {title ? <h2 className="font-bold text-purple">{title}</h2> : null}
      </header>
      {description && (
        <article className="border-y-[1px] p-2 my-4">
          <p className="text-purple font-inter font-normal ">{description}</p>
        </article>
      )}
      <section className=" h-[100%]">
        {skills.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </section>
    </div>
  );
}
