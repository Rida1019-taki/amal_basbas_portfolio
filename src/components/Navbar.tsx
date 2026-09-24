import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, PERSONAL_INFO } from "../data/portfolioData";

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("accueil");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      const sectionIds = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-[#FAF8F6]/95 backdrop-blur-md border-b border-[#E6DFE2] shadow-[0_4px_20px_-12px_rgba(30,25,33,0.06)]"
          : "bg-[#FAF8F6]/85 backdrop-blur-sm border-b border-[#E6DFE2]/70"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Brand Logo / Name */}
          <a
            href="#accueil"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Amal BASBAS - Retour à l'accueil"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E6DFE2] bg-white font-serif-editorial text-sm font-semibold tracking-wider text-[#1E1921] transition-colors duration-200 group-hover:border-[#9A5B73] group-hover:bg-[#F7EEF1] group-hover:text-[#9A5B73]">
              AB
            </span>
            <div className="flex flex-col">
              <span className="font-serif-editorial text-base font-medium tracking-tight text-[#1E1921]">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="font-mono-tech text-[11px] text-[#7A6F80]">
                Java / Spring Boot • Marketing
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2"
            aria-label="Navigation principale"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#9A5B73] bg-[#F7EEF1]/70"
                      : "text-[#4E4554] hover:text-[#1E1921] hover:bg-[#F3ECEE]/50"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-3 right-3 h-[1.5px] rounded-full bg-[#9A5B73]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <button
              type="button"
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 rounded-lg border border-[#E6DFE2] bg-white px-3.5 py-2 text-xs font-medium text-[#1E1921] transition-all duration-200 hover:border-[#9A5B73] hover:bg-[#F7EEF1]/60 hover:text-[#7C455A] cursor-pointer"
            >
              <FileText className="h-3.5 w-3.5 text-[#9A5B73]" strokeWidth={1.75} />
              <span>Télécharger le CV</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#1E1921] px-4 py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-[#9A5B73]"
            >
              <span>Me contacter</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg border border-[#E6DFE2] bg-white p-2.5 text-[#1E1921] transition-colors hover:border-[#9A5B73] hover:text-[#9A5B73] focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" strokeWidth={1.75} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="border-b border-[#E6DFE2] bg-[#FAF8F6] px-4 pt-2 pb-6 lg:hidden">
          <nav className="flex flex-col space-y-1" aria-label="Menu mobile">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#F7EEF1] text-[#9A5B73]"
                      : "text-[#4E4554] hover:bg-[#F3ECEE]/60 hover:text-[#1E1921]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9A5B73]" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 flex flex-col gap-2.5 border-t border-[#E6DFE2] pt-4">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#E6DFE2] bg-white px-4 py-2.5 text-sm font-medium text-[#1E1921] transition-colors hover:border-[#9A5B73] hover:bg-[#F7EEF1]"
            >
              <FileText className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />
              <span>Télécharger le CV</span>
            </button>

            <a
              href="#contact"
              onClick={handleNavClick}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1E1921] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#9A5B73]"
            >
              <span>Me contacter</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
