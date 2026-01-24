import { Navbar } from "@/app/folio/Navbar";
import { Hero } from "@/app/folio/Hero";
import { About } from "@/app/folio/About";
import { Skills } from "@/app/folio/Skills";
import { Projects } from "@/app/folio/Proyects";
import { Contact } from "@/app/folio/Contact";

export default function FolioPage() {
  return (
    <>
      <div className="p-4">
        <Navbar />
      </div>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="bg-slate-900 text-white py-8 text-center">
        <p className="font-bold">
          © 2026 · Portfolio · Desarrollador Junior Front-end
        </p>
      </footer>
    </>
  );
}
