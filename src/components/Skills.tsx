import React, { useState } from "react";
import {
  Code,
  Server,
  Layout,
  PenTool,
  Database,
  Wrench,
  Globe,
  BarChart3,
  Users,
} from "lucide-react";
import { SKILL_CATEGORIES, SkillCategory } from "../data/portfolioData";

type FilterType = "all" | "engineering" | "data-devops" | "digital-methodology";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  langages: <Code className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />,
  "frameworks-backend": (
    <Server className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />
  ),
  frontend: <Layout className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />,
  design: <PenTool className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />,
  "bases-de-donnees": (
    <Database className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />
  ),
  "outils-devops": (
    <Wrench className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />
  ),
  "cms-creation": (
    <Globe className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />
  ),
  "analyse-marketing": (
    <BarChart3 className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />
  ),
  methodologies: <Users className="h-4 w-4 text-[#9A5B73]" strokeWidth={1.75} />,
};

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredCategories: SkillCategory[] =
    activeFilter === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.domain === activeFilter);

  const filterButtons: { id: FilterType; label: string }[] = [
    { id: "all", label: "Ensemble des compétences" },
    { id: "engineering", label: "Langages, Backend & Frontend" },
    { id: "data-devops", label: "Bases de données & DevOps" },
    { id: "digital-methodology", label: "Marketing, Design & Méthodes" },
  ];

  return (
    <section
      id="competences"
      className="border-b border-[#E6DFE2] bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header + Filter Bar */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#9A5B73]">
              02 / Stack &amp; Savoir-faire
            </span>
            <h2 className="mt-2 font-serif-editorial text-3xl font-medium tracking-tight text-[#1E1921] sm:text-4xl">
              Compétences techniques
            </h2>
            <p className="mt-3 text-base text-[#4E4554]">
              Une boîte à outils structurée autour de l&apos;écosystème Java /
              Spring Boot, du développement web moderne et de l&apos;analyse
              SEO.
            </p>
          </div>

          {/* Domain Filter Tabs */}
          <div
            className="flex flex-wrap gap-1.5 rounded-xl border border-[#E6DFE2] bg-[#FAF8F6] p-1.5"
            role="tablist"
            aria-label="Filtrer les catégories de compétences"
          >
            {filterButtons.map((btn) => {
              const isSelected = activeFilter === btn.id;
              return (
                <button
                  key={btn.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(btn.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-white text-[#9A5B73] shadow-xs border border-[#E6DFE2]"
                      : "text-[#4E4554] hover:text-[#1E1921]"
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 9 Categories Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col justify-between rounded-xl border border-[#E6DFE2] bg-[#FAF8F6]/70 p-6 transition-all duration-200 hover:border-[#C8B5BE] hover:bg-white hover:shadow-[0_10px_30px_-15px_rgba(30,25,33,0.06)]"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-[#E6DFE2] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E6DFE2] bg-white transition-colors group-hover:border-[#9A5B73]/40 group-hover:bg-[#F7EEF1]">
                      {CATEGORY_ICONS[category.id]}
                    </span>
                    <h3 className="text-base font-semibold text-[#1E1921]">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono-tech text-[11px] text-[#7A6F80]">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Skills Pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border border-[#E6DFE2] bg-white px-3 py-1.5 font-mono-tech text-xs font-medium text-[#1E1921] transition-colors group-hover:border-[#C8B5BE] hover:!border-[#9A5B73] hover:!bg-[#F7EEF1] hover:!text-[#7C455A]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
