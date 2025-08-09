import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HerosSection from "@/components/HerosSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillSection from "@/components/SkillSection";
import { Navbar } from "@/components/ui/NavBar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
export default function Home() {
  return (
    <>
      <SmoothCursor />
      <Navbar/>
      <HerosSection/>
      <ExperienceSection/>
      <EducationSection/>
      <ProjectsSection/>
      <SkillSection/>
      <Footer/>
      
    </>
  );
}
