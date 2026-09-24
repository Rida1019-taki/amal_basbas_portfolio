import React, { useState } from "react";
import { ArrowUpRight, FolderGit2, Eye, X, ShieldCheck, Layers } from "lucide-react";
import { PROJECTS, ProjectItem } from "../data/portfolioData";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  return (
    <section
      id="projets"
      className="border-b border-[#E6DFE2] bg-[#FAF8F6] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-[#9A5B73]">
            03 / Réalisations
          </span>
          <h2 className="mt-2 font-serif-editorial text-3xl font-medium tracking-tight text-[#1E1921] sm:text-4xl">
            Projets techniques
          </h2>
          <p className="mt-3 text-base text-[#4E4554]">
            Applications et architectures développées autour de Java, Spring
            Boot et JavaScript.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-[#E6DFE2] bg-white p-6 sm:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C8B5BE] hover:shadow-[0_14px_34px_-16px_rgba(30,25,33,0.08)]"
            >
              <div>
                {/* Top Metadata Row */}
                <div className="flex items-center justify-between gap-2 border-b border-[#E6DFE2] pb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7EEF1] px-3 py-1 font-mono-tech text-[11px] font-medium text-[#9A5B73]">
                    <FolderGit2 className="h-3.5 w-3.5" strokeWidth={1.75} />
                    {project.type}
                  </span>
                  <span className="font-mono-tech text-xs font-medium text-[#7A6F80]">
                    {project.number}
                  </span>
                </div>

                {/* Project Title */}
                <div className="mt-5">
                  <span className="font-mono-tech text-xs font-medium text-[#9A5B73]">
                    {project.subtitle}
                  </span>
                  <h3 className="mt-1 font-serif-editorial text-xl font-medium leading-snug text-[#1E1921] group-hover:text-[#7C455A] transition-colors">
                    {project.title} — {project.subtitle}
                  </h3>
                </div>

                {/* Exact Project Description */}
                <p className="mt-4 text-sm leading-relaxed text-[#4E4554]">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E6DFE2]">
                {/* Tech Stack Badges */}
                <div className="mb-5">
                  <span className="block mb-2 font-mono-tech text-[10px] uppercase tracking-wider text-[#7A6F80]">
                    Stack technique
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[#E6DFE2] bg-[#FAF8F6] px-2.5 py-1 font-mono-tech text-[11px] font-medium text-[#1E1921]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#1E1921] px-4 py-2.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-[#9A5B73]"
                    title="Lien GitHub du projet (configurable dans portfolioData.ts)"
                  >
                    <span>Voir sur GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </a>

                  {project.hasProjectButton && (
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#E6DFE2] bg-white px-4 py-2.5 text-xs font-medium text-[#1E1921] transition-colors duration-200 hover:border-[#9A5B73] hover:bg-[#F7EEF1] hover:text-[#7C455A] cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5 text-[#9A5B73]" strokeWidth={1.75} />
                      <span>Voir le projet</span>
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Overview Modal (for "Voir le projet" on Healthcare) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E1921]/50 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-2xl border border-[#E6DFE2] bg-white p-6 sm:p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E6DFE2] pb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7EEF1] px-2.5 py-0.5 font-mono-tech text-[11px] font-medium text-[#9A5B73]">
                  {selectedProject.type}
                </span>
                <h3
                  id="modal-project-title"
                  className="mt-2 font-serif-editorial text-xl font-medium text-[#1E1921] sm:text-2xl"
                >
                  {selectedProject.title} — {selectedProject.subtitle}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg border border-[#E6DFE2] p-2 text-[#4E4554] transition-colors hover:border-[#9A5B73] hover:text-[#1E1921] cursor-pointer"
                aria-label="Fermer la fiche projet"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 space-y-5">
              <div>
                <h4 className="flex items-center gap-1.5 font-mono-tech text-xs uppercase tracking-wider text-[#7A6F80]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#9A5B73]" />
                  <span>Objectif &amp; Périmètre technique</span>
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#4E4554]">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-1.5 font-mono-tech text-xs uppercase tracking-wider text-[#7A6F80]">
                  <Layers className="h-3.5 w-3.5 text-[#9A5B73]" />
                  <span>Technologies utilisées</span>
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#E6DFE2] bg-[#FAF8F6] px-3 py-1.5 font-mono-tech text-xs font-medium text-[#1E1921]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-end gap-3 border-t border-[#E6DFE2] pt-4">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg border border-[#E6DFE2] bg-white px-4 py-2 text-xs font-medium text-[#4E4554] transition-colors hover:bg-[#FAF8F6] cursor-pointer"
              >
                Fermer
              </button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#1E1921] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#9A5B73]"
              >
                <span>Voir sur GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
