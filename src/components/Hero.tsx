import React from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  FileText,
  Layers,
  Server,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { EXTERNAL_LINKS, IMAGES, PERSONAL_INFO } from "../data/portfolioData";
import { SmartImage } from "./SmartImage";

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden border-b border-[#E6DFE2] bg-architectural-grid pt-10 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-24"
    >
      {/* Subtle warm ambient radial accent — very delicate, not flashy */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-[#F3ECEE]/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Editorial 2×2 grid.
            Mobile order : intro → photo → actions → pillars
            (la photo apparaît donc sous le titre et la description).
            Desktop : intro (gauche) / photo (droite) puis actions (gauche) / pillars (droite). */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-12">
          {/* ── Intro : badge, nom, titre, description ── */}
          <div className="order-1 flex flex-col justify-center md:col-span-2 lg:col-span-7">
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 self-start rounded-full border border-[#E6DFE2] bg-white px-3.5 py-1.5 shadow-[0_2px_10px_-4px_rgba(30,25,33,0.04)]">
              <span className="h-2 w-2 rounded-full bg-[#9A5B73]" />
              <span className="font-mono-tech text-xs font-medium text-[#4E4554]">
                {PERSONAL_INFO.officialTitle}
              </span>
              <span className="text-[#E6DFE2]">•</span>
              <span className="inline-flex items-center gap-1 text-xs text-[#7A6F80]">
                <MapPin className="h-3 w-3 text-[#9A5B73]" strokeWidth={1.75} />
                {PERSONAL_INFO.location}
              </span>
            </div>

            <h1 className="font-serif-editorial text-4xl font-medium tracking-tight text-[#1E1921] sm:text-5xl lg:text-[52px] lg:leading-[1.08]">
              {PERSONAL_INFO.fullName}
            </h1>

            <p className="mt-4 font-serif-editorial text-xl font-normal leading-snug text-[#7C455A] sm:text-2xl lg:text-[26px]">
              Développeuse Web Full Stack Java/Spring Boot
              <span className="block sm:inline"> &amp; Marketing Digital</span>
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4E4554] sm:text-[17px]">
              Diplômée en Marketing et Logistique, j&apos;allie rigueur
              architecturale et vision stratégique pour concevoir des
              applications web robustes, performantes et centrées sur
              l&apos;utilisateur.
            </p>
          </div>

          {/* ── PHOTO 1 (Hero) ── */}
          <div className="order-2 md:col-span-1 lg:col-span-5">
            <SmartImage
              src={IMAGES.hero}
              alt="Amal BASBAS - Développeuse Web Full Stack"
              containerClassName="aspect-[4/5] mx-auto w-full max-w-xs rounded-3xl border border-[#E6DFE2] shadow-[0_16px_40px_-20px_rgba(30,25,33,0.12)] md:max-w-none lg:aspect-auto lg:h-full lg:min-h-[360px]"
              placeholderTitle="Photo professionnelle — Amal BASBAS"
              placeholderHint="Déposez votre portrait ici : /public/images/amal-hero.jpg"
            />
          </div>

          {/* ── Actions : boutons, badges, contact ── */}
          <div className="order-3 flex flex-col justify-center md:col-span-1 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#projets"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E1921] px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#9A5B73] hover:-translate-y-0.5"
              >
                <span>Voir mes projets</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E6DFE2] bg-white px-6 py-3.5 text-sm font-medium text-[#1E1921] transition-all duration-200 hover:border-[#9A5B73] hover:bg-[#F7EEF1]/60 hover:text-[#7C455A]"
              >
                <span>Me contacter</span>
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent px-4 py-3.5 text-sm font-medium text-[#4E4554] transition-colors hover:bg-[#F3ECEE]/70 hover:text-[#1E1921]"
              >
                <FileText className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />
                <span className="underline decoration-[#C8B5BE] underline-offset-4">
                  Télécharger le CV
                </span>
              </button>
            </div>

            {/* Hero Technical Badges */}
            <div className="mt-8 border-t border-[#E6DFE2] pt-6">
              <p className="mb-3 font-mono-tech text-[11px] uppercase tracking-widest text-[#7A6F80]">
                Technologies &amp; Domaines clés
              </p>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-md border border-[#E6DFE2] bg-[#F3ECEE]/80 px-3 py-1.5 font-mono-tech text-xs font-medium text-[#1E1921] transition-colors hover:border-[#9A5B73]/50 hover:bg-[#F7EEF1]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Contact & Social Links Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#4E4554]">
              <a
                href={PERSONAL_INFO.emailHref}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#9A5B73]"
              >
                <Mail className="h-3.5 w-3.5 text-[#9A5B73]" strokeWidth={1.75} />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={PERSONAL_INFO.phoneHref}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#9A5B73]"
              >
                <Phone className="h-3.5 w-3.5 text-[#9A5B73]" strokeWidth={1.75} />
                <span>{PERSONAL_INFO.phoneDisplay}</span>
              </a>

              <a
                href={EXTERNAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#1E1921] transition-colors hover:text-[#9A5B73]"
                title="Profil LinkedIn (lien configurable dans portfolioData.ts)"
              >
                <span>{PERSONAL_INFO.linkedinLabel}</span>
                <ExternalLink className="h-3 w-3 text-[#9A5B73]" strokeWidth={1.75} />
              </a>

              <a
                href={EXTERNAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#1E1921] transition-colors hover:text-[#9A5B73]"
                title="Profil GitHub (lien configurable dans portfolioData.ts)"
              >
                <span>{PERSONAL_INFO.githubLabel}</span>
                <ExternalLink className="h-3 w-3 text-[#9A5B73]" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* ── Pillars : Architecture & Vision ── */}
          <div className="order-4 md:col-span-2 lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border border-[#E6DFE2] bg-white p-6 sm:p-7 shadow-[0_12px_36px_-16px_rgba(30,25,33,0.06)]">
              <div className="flex items-center justify-between border-b border-[#E6DFE2] pb-4">
                <div>
                  <span className="font-mono-tech text-[11px] uppercase tracking-widest text-[#9A5B73]">
                    Architecture &amp; Vision
                  </span>
                  <h2 className="mt-1 font-serif-editorial text-lg font-medium text-[#1E1921]">
                    Profil Hybride &amp; Complémentaire
                  </h2>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F7EEF1] font-mono-tech text-xs font-medium text-[#9A5B73]">
                  FS
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-[#E6DFE2]/80 bg-[#FAF8F6] p-4 transition-colors hover:border-[#C8B5BE]">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E6DFE2] bg-white text-[#9A5B73]">
                      <Server className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1E1921]">
                        Ingénierie Backend &amp; API REST
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#4E4554]">
                        Socles applicatifs sécurisés avec Java, Spring Boot,
                        Spring Data JPA, Hibernate, JWT et Docker.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#E6DFE2]/80 bg-[#FAF8F6] p-4 transition-colors hover:border-[#C8B5BE]">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E6DFE2] bg-white text-[#9A5B73]">
                      <Layers className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1E1921]">
                        Développement Frontend &amp; UI
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#4E4554]">
                        Interfaces modernes et responsives avec JavaScript
                        (ES6+), HTML5, CSS3, Tailwind CSS et Figma.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#E6DFE2]/80 bg-[#FAF8F6] p-4 transition-colors hover:border-[#C8B5BE]">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E6DFE2] bg-white text-[#9A5B73]">
                      <TrendingUp className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1E1921]">
                        Marketing Digital, SEO &amp; Logistique
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#4E4554]">
                        Master ENCG Marketing &amp; Logistique, audits SEO
                        (Semrush, Search Console) et compréhension des flux
                        métiers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
