import SkillCard from "@/commons/SkillCard";
import React from "react";

export default function SkillColumn({
  title,
  iconTitle,
  className = "",
  skills = [],
  description,
}) {
  return (
    <div className="bg-white p-4 rounded-md drop-shadow-2xl">
      <header className="flex flex-col items-center gap-2 text-3xl font-montserrat">
        {iconTitle}
        {title ? <h2 className="font-bold text-blue">{title}</h2> : null}
      </header>
      <article className="border-y-[1px] p-2 my-4">
        <p className="text-dark-blue font-montserrat">{description}</p>
      </article>
      <section className=" max-h-[40vh] overflow-y-auto">
        {skills.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </section>
    </div>
  );
}
