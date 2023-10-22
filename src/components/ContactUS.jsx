import Button from "@/commons/Button";
import DropdownInput from "@/commons/DropdownInput";
import Input from "@/commons/Input";
import InternalLayout from "@/commons/InternalLayout";
import SectionHeader from "@/commons/SectionHeader";
import SectionLayout from "@/commons/SectionLayout";
import React from "react";

export default function ContactUS({ sectionTheme = "" }) {
  return (
    <InternalLayout>
      <SectionHeader sectionTheme={sectionTheme}>Contact Me</SectionHeader>
      <SectionLayout className="  h-[80vh] rounded-md p-4 text-white font-montserrat w-1/2">
        <p className="text-2xl font-bold">
          I'm excited to learn about yoru proyect. Contact me to get started!
        </p>
        <form action="submit" className="flex flex-col gap-4">
          <div className="flex gap-2 ">
            <Input
              type={"text"}
              title={"Name"}
              className=" flex-grow"
              outline={true}
            />
            <Input
              type={"email"}
              title={"Email"}
              outline={true}
              className=" flex-grow"
            />
          </div>
          <Input type={"text"} title={"Phone Number"} outline={true} />
          <Input type={"text"} title={"Description"} outline={true} size={6} />
          <Button variant={"secondary"} className="w-1/4 m-auto font-bold">
            Submit
          </Button>
          {/* METER UN SELECT CON EL TIPO DE PROYECTO */}
        </form>
      </SectionLayout>
    </InternalLayout>
  );
}
