import PageLayout from "@/commons/PageLayout";
import ContactUS from "@/components/ContactUS";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import ProjectsPage from "@/components/ProjectsPage";
import SkillsPage from "@/components/SkillsPage";

export default function Home() {
  return (
    <main className="relative h-full  w-full  flex flex-col  items-center">
      <Navbar className="absolute  rounded-md" />

      <PageLayout id="Home" className="bg-white">
        <HomePage />
      </PageLayout>
      <PageLayout id="Skills" className="bg-purple ">
        <SkillsPage sectionTheme="purple" />
      </PageLayout>
      <PageLayout id="Projects" className="bg-white">
        <ProjectsPage sectionTheme="white" />
      </PageLayout>
      <PageLayout id="Contact" className="bg-purple ">
        <ContactUS sectionTheme="purple" />
      </PageLayout>
    </main>
  );
}
