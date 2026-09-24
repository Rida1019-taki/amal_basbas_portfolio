import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { EXPERIENCES } from "../data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section
      id="experiences"
      className="border-b border-[#E6DFE2] bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-[#9A5B73]">
            04 / Parcours professionnel
          </span>
          <h2 className="mt-2 font-serif-editorial text-3xl font-medium tracking-tight text-[#1E1921] sm:text-4xl">
            Expériences professionnelles
          </h2>
          <p className="mt-3 text-base text-[#4E4554]">
            Expériences terrain en référencement naturel (SEO), stratégie de
            contenu, gestion de communautés et relation client.
          </p>
        </div>

        {/* Modern Editorial Timeline */}
        <div className="mt-12 max-w-4xl">
          <div className="relative border-l border-[#E6DFE2] pl-6 sm:pl-10 space-y-10">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Node */}
                <span
                  className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#9A5B73] bg-white transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#9A5B73]"
                  aria-hidden="true"
                />

                {/* Experience Card */}
                <article className="rounded-2xl border border-[#E6DFE2] bg-[#FAF8F6]/70 p-6 sm:p-8 transition-all duration-200 hover:border-[#C8B5BE] hover:bg-white hover:shadow-[0_10px_30px_-15px_rgba(30,25,33,0.06)]">
                  {/* Top Row: Period & Location */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E6DFE2] pb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-[#F7EEF1] px-3 py-1 font-mono-tech text-xs font-medium text-[#9A5B73]">
                      <Calendar className="h-3.5 w-3.5" strokeWidth={1.75} />
                      {exp.period}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7A6F80]">
                      <MapPin
                        className="h-3.5 w-3.5 text-[#9A5B73]"
                        strokeWidth={1.75}
                      />
                      {exp.company}, {exp.location}
                    </span>
                  </div>

                  {/* Role & Company Heading */}
                  <div className="mt-5 flex items-start gap-3">
                    <div className="mt-1 hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E6DFE2] bg-white text-[#9A5B73]">
                      <Briefcase className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-serif-editorial text-xl font-medium text-[#1E1921] sm:text-2xl">
                        {exp.role} — {exp.company}, {exp.location}
                      </h3>
                    </div>
                  </div>

                  {/* Exact Descriptions */}
                  <ul className="mt-5 space-y-3">
                    {exp.descriptions.map((paragraph, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[#4E4554]"
                      >
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9A5B73]"
                          aria-hidden="true"
                        />
                        <span>{paragraph}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
