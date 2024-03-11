import Image from "next/image";
import { GithubIcon } from "./Icons";
export default function WorkCard({ project }) {
  return (
    <article className="flex max-md:flex-col items-center justify-between gap-4 w-full max-lg:w-[60%]  max-md:w-full text-black  border p-4 rounded-xl ">
      <div className="w-1/3 max-md:w-full h-[60px] relative ">
        <Image
          src={project.logo}
          fill
          objectFit="contain"
          alt={project.title}
        />
      </div>
      <div className="flex flex-col gap-4 w-2/3 max-md:w-full border-l pl-6 shadow-sm">
        <div className="">
          <h2 className=" font-bold text-xl ">{project.title}</h2>
          <div className="font-normal text-black">
            {project.date.start} - {project.date.end}
          </div>
        </div>

        <span className="  text-md max-lg:text-sm ">
          {project.description.short}
        </span>

        <div className="flex gap-2  justify-around   ">
          {project.repos.map((repo) => (
            <a
              href={repo.url}
              className="border w-full grid p-1 rounded-md bg-purple text-white"
            >
              <div className=" flex flex-col items-center  ">
                <GithubIcon className="h-6 " />
                <span className="text-xs font-light">{repo.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
