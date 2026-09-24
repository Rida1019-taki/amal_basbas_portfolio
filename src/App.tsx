import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Languages } from "./components/Languages";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CvModal } from "./components/CvModal";

export function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F6] text-[#1E1921] overflow-x-hidden">
      {/* 1. Navbar */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 3. À propos */}
        <About onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 4. Compétences */}
        <Skills />

        {/* 5. Projets */}
        <Projects />

        {/* 6. Expériences */}
        <Experience />

        {/* 7. Formation */}
        <Education />

        {/* 8. Langues */}
        <Languages />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Modal CV (Imprimer PDF / Télécharger) */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}

export default App;
