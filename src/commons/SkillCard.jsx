import Image from "next/image";
import Container from "./Container";

export default function SkillCard({ className = "", skill }) {
  return (
    <article
      className={`flex items-center gap-2 p-3 ${className} rounded-md  `}
    >
      <Image src={skill.img} width={20} height={20} />
      <span className="text-blue font-semibold">{skill.skill}</span>
    </article>
  );
}
