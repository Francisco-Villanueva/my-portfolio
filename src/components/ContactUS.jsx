import Input from "@/commons/Input";
import InternalLayout from "@/commons/InternalLayout";
import SectionLayout from "@/commons/SectionLayout";
import React from "react";

export default function ContactUS() {
  return (
    <InternalLayout>
      <SectionLayout className="bg-white rounded-md p-4">
        <form action="submit">
          <Input type={"text"} placeholder={"Name"} />
          <Input type={"email"} placeholder={"Email"} />
          <Input type={"text"} placeholder={"Phone Number"} />
        </form>
      </SectionLayout>
    </InternalLayout>
  );
}
