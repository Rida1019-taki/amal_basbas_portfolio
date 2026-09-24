import React from "react";
import { X, Printer, Download, Mail, Phone, MapPin } from "lucide-react";
import {
  PERSONAL_INFO,
  SKILL_CATEGORIES,
  PROJECTS,
  EXPERIENCES,
  EDUCATIONS,
  LANGUAGES,
  EXTERNAL_LINKS,
} from "../data/portfolioData";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrintPdf = () => {
    window.print();
  };

  const handleDownloadStandaloneHtmlCv = () => {
    const htmlContent = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>CV — ${PERSONAL_INFO.fullName}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1E1921; line-height: 1.5; max-width: 820px; margin: 32px auto; padding: 0 24px; }
    h1 { font-size: 26px; margin: 0; color: #1E1921; }
    .subtitle { font-size: 15px; color: #7C455A; font-weight: 600; margin-top: 4px; }
    .contact { font-size: 12px; color: #4E4554; margin-top: 8px; padding-bottom: 14px; border-bottom: 2px solid #9A5B73; }
    h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 1.2px; color: #9A5B73; border-bottom: 1px solid #E6DFE2; padding-bottom: 4px; margin-top: 20px; margin-bottom: 10px; }
    p, li { font-size: 12.5px; color: #332C38; margin: 4px 0; }
    .item { margin-bottom: 12px; }
    .item-header { display: flex; justify-content: space-between; font-weight: 600; font-size: 13px; }
    .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 16px; font-size: 12px; }
  </style>
</head>
<body>
  <h1>${PERSONAL_INFO.fullName}</h1>
  <div class="subtitle">${PERSONAL_INFO.officialTitle} — ${PERSONAL_INFO.heroHeadline}</div>
  <div class="contact">
    Email : ${PERSONAL_INFO.email} | Tél : ${PERSONAL_INFO.phoneDisplay} | Localisation : ${PERSONAL_INFO.location} | LinkedIn : ${EXTERNAL_LINKS.linkedin} | GitHub : ${EXTERNAL_LINKS.github}
  </div>

  <h2>Profil</h2>
  ${PERSONAL_INFO.profileParagraphs.map((p) => `<p>${p}</p>`).join("")}

  <h2>Compétences Techniques</h2>
  <div class="skills-grid">
    ${SKILL_CATEGORIES.map(
      (c) => `<div><strong>${c.title} :</strong> ${c.skills.join(", ")}</div>`
    ).join("")}
  </div>

  <h2>Projets</h2>
  ${PROJECTS.map(
    (p) => `<div class="item">
      <div class="item-header"><span>${p.title} — ${p.subtitle} (${p.type})</span></div>
      <div style="font-size:11.5px;color:#7C455A;">Stack : ${p.stack.join(", ")}</div>
      <p>${p.description}</p>
    </div>`
  ).join("")}

  <h2>Expériences Professionnelles</h2>
  ${EXPERIENCES.map(
    (e) => `<div class="item">
      <div class="item-header"><span>${e.role} — ${e.company}, ${e.location}</span><span>${e.period}</span></div>
      <ul>${e.descriptions.map((d) => `<li>${d}</li>`).join("")}</ul>
    </div>`
  ).join("")}

  <h2>Formation</h2>
  ${EDUCATIONS.map(
    (ed) => `<div class="item">
      <div class="item-header"><span>${ed.degree}${ed.option ? ` (${ed.option})` : ""}</span><span>${ed.status || ""}</span></div>
      <p>${ed.institution}, ${ed.location}</p>
    </div>`
  ).join("")}

  <h2>Langues</h2>
  <p>${LANGUAGES.map((l) => `<strong>${l.language} :</strong> ${l.level}`).join(" &nbsp;|&nbsp; ")}</p>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV_Amal_BASBAS.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E1921]/60 p-3 sm:p-6 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="relative my-auto flex max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl border border-[#E6DFE2] bg-[#FAF8F6] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E6DFE2] bg-white px-5 py-4">
          <div>
            <h2
              id="cv-modal-title"
              className="font-serif-editorial text-lg font-medium text-[#1E1921]"
            >
              Curriculum Vitae — {PERSONAL_INFO.fullName}
            </h2>
            <p className="text-xs text-[#7A6F80]">
              Version imprimable A4 (PDF) ou téléchargement direct
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handlePrintPdf}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#1E1921] px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#9A5B73] cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Imprimer / Enregistrer en PDF</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadStandaloneHtmlCv}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#E6DFE2] bg-[#FAF8F6] px-3.5 py-2 text-xs font-medium text-[#1E1921] transition-colors hover:border-[#9A5B73] hover:bg-[#F7EEF1] cursor-pointer"
            >
              <Download className="h-3.5 w-3.5 text-[#9A5B73]" />
              <span>Télécharger le fichier CV</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-[#E6DFE2] p-2 text-[#4E4554] transition-colors hover:border-[#9A5B73] hover:text-[#1E1921] cursor-pointer"
              aria-label="Fermer l'aperçu du CV"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable A4 Sheet Content */}
        <div className="overflow-y-auto p-4 sm:p-8">
          <div
            id="printable-cv-container"
            className="mx-auto max-w-3xl rounded-xl border border-[#E6DFE2] bg-white p-6 sm:p-10 shadow-xs"
          >
            {/* CV Header */}
            <header className="border-b border-[#E6DFE2] pb-5">
              <h1 className="font-serif-editorial text-2xl sm:text-3xl font-semibold text-[#1E1921]">
                {PERSONAL_INFO.fullName}
              </h1>
              <p className="mt-1 font-serif-editorial text-base text-[#9A5B73]">
                {PERSONAL_INFO.officialTitle} • {PERSONAL_INFO.heroHeadline}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-[#4E4554]">
                <span className="inline-flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5 text-[#9A5B73]" />
                  {PERSONAL_INFO.email}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5 text-[#9A5B73]" />
                  {PERSONAL_INFO.phoneDisplay}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-[#9A5B73]" />
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </header>

            {/* CV Profile */}
            <section className="mt-5">
              <h3 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#9A5B73]">
                Profil
              </h3>
              <div className="mt-2 space-y-1.5 text-xs sm:text-sm leading-relaxed text-[#4E4554]">
                {PERSONAL_INFO.profileParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* CV Technical Skills */}
            <section className="mt-6">
              <h3 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#9A5B73]">
                Compétences Techniques
              </h3>
              <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="text-[#4E4554]">
                    <strong className="font-semibold text-[#1E1921]">
                      {cat.title} :
                    </strong>{" "}
                    {cat.skills.join(", ")}
                  </div>
                ))}
              </div>
            </section>

            {/* CV Projects */}
            <section className="mt-6">
              <h3 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#9A5B73]">
                Projets
              </h3>
              <div className="mt-2.5 space-y-3.5">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-semibold text-[#1E1921]">
                        {proj.title} — {proj.subtitle}{" "}
                        <span className="font-normal text-[#7A6F80]">
                          ({proj.type})
                        </span>
                      </h4>
                      <span className="font-mono-tech text-[11px] text-[#9A5B73]">
                        {proj.stack.join(", ")}
                      </span>
                    </div>
                    <p className="mt-1 leading-relaxed text-[#4E4554]">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CV Experiences */}
            <section className="mt-6">
              <h3 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#9A5B73]">
                Expériences Professionnelles
              </h3>
              <div className="mt-2.5 space-y-3.5">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="text-xs">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-semibold text-[#1E1921]">
                        {exp.role} — {exp.company}, {exp.location}
                      </h4>
                      <span className="font-mono-tech text-[11px] text-[#9A5B73]">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="mt-1 list-disc pl-4 space-y-1 text-[#4E4554]">
                      {exp.descriptions.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* CV Education & Languages */}
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-12">
              <section className="sm:col-span-8">
                <h3 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#9A5B73]">
                  Formation
                </h3>
                <div className="mt-2.5 space-y-2.5 text-xs">
                  {EDUCATIONS.map((edu) => (
                    <div key={edu.id}>
                      <div className="flex items-baseline justify-between gap-2">
                        <strong className="text-[#1E1921]">
                          {edu.degree}
                          {edu.option ? ` — ${edu.option}` : ""}
                        </strong>
                        {edu.status && (
                          <span className="font-mono-tech text-[11px] text-[#9A5B73]">
                            {edu.status}
                          </span>
                        )}
                      </div>
                      <p className="text-[#4E4554]">
                        {edu.institution}, {edu.location}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="sm:col-span-4">
                <h3 className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#9A5B73]">
                  Langues
                </h3>
                <ul className="mt-2.5 space-y-1.5 text-xs text-[#4E4554]">
                  {LANGUAGES.map((lang) => (
                    <li key={lang.id}>
                      <strong className="text-[#1E1921]">
                        {lang.language} :
                      </strong>{" "}
                      {lang.level}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
