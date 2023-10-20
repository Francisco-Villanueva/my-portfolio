import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import ProjectsPage from "@/components/ProjectsPage";
import SkillsPage from "@/components/SkillsPage";

export default function Home() {
  return (
    <main className="relative h-full  w-full  flex flex-col gap-4 items-center">
      <Navbar className="fixed  rounded-md" />

      <section className="h-[100vh] w-[90vw] " id="Home">
        <HomePage />
      </section>

      <section className="min-h-[100vh] w-[90vw] " id="Skills">
        <SkillsPage />
      </section>

      <section className="min-h-[100vh] w-full  bg-purple" id="Projects">
        <ProjectsPage className="w-[90vw] mx-auto bg-grey" />
      </section>
    </main>
  );
}
