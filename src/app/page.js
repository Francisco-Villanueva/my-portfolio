import PageLayout from "@/commons/PageLayout";
import SectionHeader from "@/commons/SectionHeader";
import ContactUS from "@/components/ContactUS";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import ProjectsPage from "@/components/ProjectsPage";
import SkillsPage from "@/components/SkillsPage";

export default function Home() {
  return (
    <main className="relative h-full  w-full  flex flex-col  items-center">
      <Navbar className="absolute  rounded-md" />

      <PageLayout id="Home" className="bg-white  ">
        <HomePage />
      </PageLayout>
      <PageLayout id="Skills" className="bg-purple     ">
        <SectionHeader sectionTheme={"purple"}>SKILLS</SectionHeader>
        <SkillsPage sectionTheme="purple" />
      </PageLayout>
      <PageLayout id="Projects" className="bg-white  ">
        <SectionHeader sectionTheme={"white"}>PROJECTS</SectionHeader>

        <ProjectsPage sectionTheme="white" />
      </PageLayout>
      <PageLayout id="Contact" className="bg-purple   ">
        <SectionHeader sectionTheme={"purple"}>Contact Me</SectionHeader>

        <ContactUS sectionTheme="purple" />
      </PageLayout>
    </main>
  );
}
