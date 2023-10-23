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
import SectionHeader from "@/commons/SectionHeader";
import SectionLayout from "@/commons/SectionLayout";
import InternalLayout from "@/commons/InternalLayout";
export default function SkillsPage({ className = "", sectionTheme = "" }) {
  return (
    <InternalLayout>
      <SectionLayout className="grid grid-cols-5 gap-2   ">
        <SkillColumn
          skills={skills.front}
          iconTitle={
            <CLIcon className="w-12 bg-purple rounded-full p-2 text-white" />
          }
          title={"Front End"}
          // description="I value simple content structure, clean design patterns, and thoughtful interactions."
        />
        <SkillColumn
          skills={skills.back}
          iconTitle={
            <BackEndIcon className="w-12 bg-purple rounded-full p-2 text-white" />
          }
          title={"Back End"}
          // description="I value simple content structure, clean design patterns, and thoughtful interactions."
        />
        <SkillColumn
          skills={skills.db}
          iconTitle={
            <StackIcon className="w-12 bg-purple rounded-full p-2 text-white" />
          }
          title={"Database"}
          // description="I value simple content structure, clean design patterns, and thoughtful interactions."
        />
        <SkillColumn
          skills={skills.design}
          iconTitle={
            <PenIcon className="w-12 bg-purple rounded-full p-2 text-white" />
          }
          title={"Design"}
          // description="I value simple content structure, clean design patterns, and thoughtful interactions."
        />
        <SkillColumn
          skills={skills.org}
          iconTitle={
            <OrganizationIcon className="w-12 bg-purple rounded-full p-2 text-white" />
          }
          title={"Organization"}
          // description="I value simple content structure, clean design patterns, and thoughtful interactions."
        />
      </SectionLayout>
    </InternalLayout>
  );
}
