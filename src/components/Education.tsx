import React from "react";
import { GraduationCap, MapPin, Clock } from "lucide-react";
import { EDUCATIONS } from "../data/portfolioData";

export const Education: React.FC = () => {
  return (
    <section
      id="formation"
      className="border-b border-[#E6DFE2] bg-[#FAF8F6] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-[#9A5B73]">
            05 / Cursus académique
          </span>
          <h2 className="mt-2 font-serif-editorial text-3xl font-medium tracking-tight text-[#1E1921] sm:text-4xl">
            Formation
          </h2>
          <p className="mt-3 text-base text-[#4E4554]">
            Une double formation alliant l&apos;ingénierie logicielle Full Stack
            et un Master en Sciences de Gestion (Marketing &amp; Logistique).
          </p>
        </div>

        {/* Education Timeline & Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {EDUCATIONS.map((edu, idx) => (
            <article
              key={edu.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-[#E6DFE2] bg-white p-6 sm:p-8 transition-all duration-200 hover:border-[#C8B5BE] hover:shadow-[0_12px_32px_-16px_rgba(30,25,33,0.07)]"
            >
              <div>
                {/* Top Header with Index & Optional Status */}
                <div className="flex items-center justify-between gap-2 border-b border-[#E6DFE2] pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E6DFE2] bg-[#FAF8F6] text-[#9A5B73]">
                      <GraduationCap className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <span className="font-mono-tech text-xs text-[#7A6F80]">
                      0{idx + 1}
                    </span>
                  </div>

                  {edu.status && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E2C8D1] bg-[#F7EEF1] px-3 py-1 font-mono-tech text-[11px] font-medium text-[#9A5B73]">
                      <Clock className="h-3 w-3" strokeWidth={1.75} />
                      {edu.status}
                    </span>
                  )}
                </div>

                {/* Degree Title & Option */}
                <div className="mt-5">
                  <h3 className="font-serif-editorial text-xl font-medium leading-snug text-[#1E1921]">
                    {edu.degree}
                  </h3>
                  {edu.option && (
                    <p className="mt-1.5 font-mono-tech text-xs font-medium text-[#9A5B73]">
                      {edu.option}
                    </p>
                  )}
                </div>
              </div>

              {/* Institution & Location Footer */}
              <div className="mt-6 border-t border-[#E6DFE2] pt-4">
                <p className="text-sm font-medium text-[#4E4554]">
                  {edu.institution}
                </p>
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-[#7A6F80]">
                  <MapPin
                    className="h-3.5 w-3.5 text-[#9A5B73]"
                    strokeWidth={1.75}
                  />
                  <span>{edu.location}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
