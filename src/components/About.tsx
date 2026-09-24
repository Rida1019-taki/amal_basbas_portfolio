import React from "react";
import {
  Code2,
  Compass,
  GitBranch,
  MapPin,
  Mail,
  Phone,
  FileText,
} from "lucide-react";
import { IMAGES, PERSONAL_INFO } from "../data/portfolioData";
import { SmartImage } from "./SmartImage";

interface AboutProps {
  onOpenCvModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCvModal }) => {
  return (
    <section
      id="a-propos"
      className="border-b border-[#E6DFE2] bg-[#FAF8F6] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-[#9A5B73]">
            01 / Profil
          </span>
          <h2 className="mt-2 font-serif-editorial text-3xl font-medium tracking-tight text-[#1E1921] sm:text-4xl">
            À propos
          </h2>
        </div>

        {/* Main Editorial Grid : photo (gauche) + profil (droite) */}
        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
          {/* ── PHOTO 2 (À propos) ── */}
          <div className="order-1 lg:col-span-5">
            <SmartImage
              src={IMAGES.about}
              alt="Amal BASBAS - Profil professionnel"
              containerClassName="aspect-[4/5] mx-auto w-full max-w-sm rounded-xl border border-[#E6DFE2] shadow-[0_14px_38px_-20px_rgba(30,25,33,0.12)] lg:max-w-none"
              placeholderTitle="Photo professionnelle — Amal BASBAS"
              placeholderHint="Déposez votre photo ici : /public/images/amal-about.jpg"
            />

            {/* Subtle caption strip under the photo */}
            <div className="mt-4 flex items-center justify-between rounded-xl border border-[#E6DFE2] bg-white px-4 py-3">
              <div>
                <p className="font-mono-tech text-[10px] uppercase tracking-widest text-[#7A6F80]">
                  Basée à
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#1E1921]">
                  {PERSONAL_INFO.location}
                </p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E6DFE2] bg-[#FAF8F6] font-serif-editorial text-xs font-semibold text-[#9A5B73]">
                AB
              </span>
            </div>
          </div>

          {/* ── Profil : 3 énoncés + 3 piliers ── */}
          <div className="order-2 lg:col-span-7">
            <div className="flex h-full flex-col rounded-2xl border border-[#E6DFE2] bg-white p-6 sm:p-9 shadow-[0_8px_28px_-14px_rgba(30,25,33,0.04)]">
              <div className="space-y-5">
                <p className="font-serif-editorial text-xl font-normal leading-relaxed text-[#1E1921] sm:text-2xl">
                  {PERSONAL_INFO.profileParagraphs[0]}
                </p>
                <p className="text-base leading-relaxed text-[#4E4554] sm:text-[17px]">
                  {PERSONAL_INFO.profileParagraphs[1]}
                </p>
                <p className="border-l-2 border-[#9A5B73] pl-4 text-base font-medium leading-relaxed text-[#1E1921] sm:text-[17px]">
                  {PERSONAL_INFO.profileParagraphs[2]}
                </p>
              </div>

              {/* Three Authentic Value Pillars */}
              <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#E6DFE2] pt-7 sm:grid-cols-3">
                <div className="rounded-xl border border-[#E6DFE2]/70 bg-[#FAF8F6] p-4">
                  <Code2 className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />
                  <h3 className="mt-2.5 text-xs font-semibold uppercase tracking-wider text-[#1E1921]">
                    Rigueur Technique
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#4E4554]">
                    Développement structuré autour de Java, Spring Boot, JPA et
                    des bonnes pratiques d&apos;API REST.
                  </p>
                </div>

                <div className="rounded-xl border border-[#E6DFE2]/70 bg-[#FAF8F6] p-4">
                  <Compass className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />
                  <h3 className="mt-2.5 text-xs font-semibold uppercase tracking-wider text-[#1E1921]">
                    Vision Stratégique
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#4E4554]">
                    Approche orientée utilisateur, référencement naturel (SEO) et
                    visibilité digitale.
                  </p>
                </div>

                <div className="rounded-xl border border-[#E6DFE2]/70 bg-[#FAF8F6] p-4">
                  <GitBranch className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />
                  <h3 className="mt-2.5 text-xs font-semibold uppercase tracking-wider text-[#1E1921]">
                    Culture Métier
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#4E4554]">
                    Compréhension des flux logistiques, de la gestion et du
                    travail collaboratif Agile/Scrum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fiche synthétique — bandeau horizontal pleine largeur */}
        <div className="mt-10 rounded-2xl border border-[#E6DFE2] bg-[#F3ECEE]/50 p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-9">
              <h3 className="font-mono-tech text-xs font-medium uppercase tracking-widest text-[#9A5B73]">
                Fiche synthétique
              </h3>

              <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
                <div>
                  <dt className="text-xs text-[#7A6F80]">Nom complet</dt>
                  <dd className="mt-0.5 text-sm font-medium text-[#1E1921]">
                    {PERSONAL_INFO.fullName}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-[#7A6F80]">Domaine</dt>
                  <dd className="mt-0.5 text-sm font-medium text-[#1E1921]">
                    {PERSONAL_INFO.officialTitle}
                  </dd>
                </div>

                <div>
                  <dt className="inline-flex items-center gap-1.5 text-xs text-[#7A6F80]">
                    <MapPin className="h-3.5 w-3.5 text-[#9A5B73]" />
                    <span>Localisation</span>
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium text-[#1E1921]">
                    {PERSONAL_INFO.location}
                  </dd>
                </div>

                <div className="min-w-0">
                  <dt className="inline-flex items-center gap-1.5 text-xs text-[#7A6F80]">
                    <Mail className="h-3.5 w-3.5 text-[#9A5B73]" />
                    <span>Email</span>
                  </dt>
                  <dd className="mt-0.5 min-w-0">
                    <a
                      href={PERSONAL_INFO.emailHref}
                      className="block truncate font-mono-tech text-xs font-medium text-[#1E1921] underline decoration-[#C8B5BE] underline-offset-4 transition-colors hover:text-[#9A5B73] sm:text-sm"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="inline-flex items-center gap-1.5 text-xs text-[#7A6F80]">
                    <Phone className="h-3.5 w-3.5 text-[#9A5B73]" />
                    <span>Téléphone</span>
                  </dt>
                  <dd className="mt-0.5">
                    <a
                      href={PERSONAL_INFO.phoneHref}
                      className="font-mono-tech text-xs font-medium text-[#1E1921] underline decoration-[#C8B5BE] underline-offset-4 transition-colors hover:text-[#9A5B73] sm:text-sm"
                    >
                      {PERSONAL_INFO.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-3">
              <button
                type="button"
                onClick={onOpenCvModal}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#E6DFE2] bg-white px-4 py-3.5 text-sm font-medium text-[#1E1921] transition-all duration-200 hover:border-[#9A5B73] hover:bg-[#F7EEF1] hover:text-[#7C455A]"
              >
                <FileText className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />
                <span>Consulter / Télécharger le CV</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
