import PageLayout from "@/commons/PageLayout";
import ContactUS from "@/components/ContactUS";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import ProjectsPage from "@/components/ProjectsPage";
import SkillsPage from "@/components/SkillsPage";

export default function Home() {
  return (
    <main className="relative h-full  w-full  flex flex-col gap-4 items-center">
      <Navbar className="fixed  rounded-md" />

      <PageLayout id="Home">
        <HomePage />
      </PageLayout>
      <PageLayout id="Skills">
        <SkillsPage />
      </PageLayout>
      <PageLayout id="Projects">
        <ProjectsPage />
      </PageLayout>
      <PageLayout id="ConactUs">
        <ContactUS />
      </PageLayout>
    </main>
  );
}
