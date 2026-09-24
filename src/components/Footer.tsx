import React from "react";
import { Mail, MapPin, ExternalLink, ArrowUp } from "lucide-react";
import { EXTERNAL_LINKS, PERSONAL_INFO, NAV_ITEMS } from "../data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#1E1921]">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-[#E6DFE2] pb-10 md:grid-cols-12">
          {/* Brand & Identity */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E6DFE2] bg-[#FAF8F6] font-serif-editorial text-sm font-semibold text-[#9A5B73]">
                AB
              </span>
              <span className="font-serif-editorial text-xl font-medium text-[#1E1921]">
                {PERSONAL_INFO.fullName}
              </span>
            </div>

            <p className="mt-3 max-w-md text-sm font-medium text-[#4E4554]">
              {PERSONAL_INFO.heroHeadline}
            </p>

            <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#7A6F80]">
              <MapPin
                className="h-3.5 w-3.5 text-[#9A5B73]"
                strokeWidth={1.75}
              />
              <span>{PERSONAL_INFO.location}</span>
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h3 className="font-mono-tech text-xs uppercase tracking-widest text-[#7A6F80]">
              Navigation
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-[#4E4554]">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-[#9A5B73]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Links: Email, LinkedIn, GitHub */}
          <div className="md:col-span-3">
            <h3 className="font-mono-tech text-xs uppercase tracking-widest text-[#7A6F80]">
              Liens &amp; Contact
            </h3>
            <ul className="mt-3 space-y-2.5 text-xs">
              <li>
                <a
                  href={PERSONAL_INFO.emailHref}
                  className="inline-flex items-center gap-1.5 font-medium text-[#1E1921] transition-colors hover:text-[#9A5B73]"
                >
                  <Mail
                    className="h-3.5 w-3.5 text-[#9A5B73]"
                    strokeWidth={1.75}
                  />
                  <span>Email ({PERSONAL_INFO.email})</span>
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#1E1921] transition-colors hover:text-[#9A5B73]"
                  title="Profil LinkedIn (lien configurable dans portfolioData.ts)"
                >
                  <span>{PERSONAL_INFO.linkedinLabel}</span>
                  <ExternalLink
                    className="h-3 w-3 text-[#9A5B73]"
                    strokeWidth={1.75}
                  />
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#1E1921] transition-colors hover:text-[#9A5B73]"
                  title="Profil GitHub (lien configurable dans portfolioData.ts)"
                >
                  <span>{PERSONAL_INFO.githubLabel}</span>
                  <ExternalLink
                    className="h-3 w-3 text-[#9A5B73]"
                    strokeWidth={1.75}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to top */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[#7A6F80]">
            © 2026 {PERSONAL_INFO.fullName}. Tous droits réservés.
          </p>

          <a
            href="#accueil"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E6DFE2] bg-[#FAF8F6] px-3 py-1.5 text-xs font-medium text-[#4E4554] transition-colors hover:border-[#9A5B73] hover:text-[#1E1921]"
          >
            <span>Haut de page</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#9A5B73]" />
          </a>
        </div>
      </div>
    </footer>
  );
};
