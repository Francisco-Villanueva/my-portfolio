import React from "react";
import { skills } from "../utils/skills";
import SkillCard from "@/commons/SkillCard";
import {
  BackEndIcon,
  CLIcon,
  CodeIcon,
  OrganizationIcon,
  PenIcon,
  StackIcon,
} from "@/commons/Icons";
import SkillColumn from "./SkillColumn";
import SectionLayout from "@/commons/SectionLayout";
import InternalLayout from "@/commons/InternalLayout";
export default function SkillsPage() {
  return (
    <InternalLayout>
      <SectionLayout className="grid grid-cols-5 max-xl:grid-cols-3  gap-2 max-md:grid-cols-2  max-sm:flex max-sm:flex-col max-sm:gap-2  ">
        <SkillColumn
          skills={skills.front}
          iconTitle={
            <CLIcon className="w-12 bg-purple rounded-full p-2 text-white" />
          }
          title={"Front End"}
        />
        <SkillColumn
          skills={skills.back}
          iconTitle={
            <BackEndIcon className="w-12 bg-purple rounded-full p-2 text-white" />
          }
          title={"Back End"}
        />
        <SkillColumn
          skills={skills.db}
          iconTitle={
            <StackIcon className="w-12 bg-purple rounded-full p-2 text-white" />
          }
          title={"Database"}
        />
        <SkillColumn
          skills={skills.design}
          iconTitle={
            <PenIcon className="w-12 bg-purple rounded-full p-2 text-white" />
          }
          title={"Design"}
        />
        <SkillColumn
          skills={skills.org}
          iconTitle={
            <OrganizationIcon className="w-12 bg-purple rounded-full p-2 text-white" />
          }
          title={"Organization"}
        />
      </SectionLayout>
    </InternalLayout>
  );
}
