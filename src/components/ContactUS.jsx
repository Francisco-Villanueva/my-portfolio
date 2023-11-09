"use client";
import Button from "@/commons/Button";
import DropdownInput from "@/commons/DropdownInput";
import Input from "@/commons/Input";
import InternalLayout from "@/commons/InternalLayout";
import SectionHeader from "@/commons/SectionHeader";
import SectionLayout from "@/commons/SectionLayout";
import Textarea from "@/commons/Textarea";
import React from "react";

export default function ContactUS({ sectionTheme = "" }) {
  return (
    <InternalLayout>
      <SectionLayout className="flex flex-col gap-4   w-[40%] rounded-md p-4 text-white font-montserrat ">
        <p className="text-2xl font-bold">
          I'm excited to learn about yoru proyect. Contact me to get started!
        </p>
        <hr />
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
          <Textarea label={"Description"} />
          <Button
            variant={"secondary"}
            className="w-1/4 m-auto font-bold"
            type="button"
            onClick={() => {
              console.log("algo");
            }}
          >
            Submit
          </Button>
          {/* METER UN SELECT CON EL TIPO DE PROYECTO */}
        </form>
      </SectionLayout>
    </InternalLayout>
  );
}
