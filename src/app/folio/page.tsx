import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Proyects";
import { Contact } from "@/components/Contact";
import { TechCarousel } from "../../components/TechCarousel";

export default function FolioPage() {
  return (
    
     <div className="accent-gradient">
      <div className="p-4">
        <Navbar />
      </div>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <TechCarousel />
      <Contact />

      <footer className="bg-slate-900 text-white py-8 text-center">
        <p className="font-bold">
          © 2026 · Portfolio · Desarrollador Junior Front-end
        </p>
      </footer>
      </div>
    
  );
}
