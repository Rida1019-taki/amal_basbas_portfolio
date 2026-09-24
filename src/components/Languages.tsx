import React from "react";
import { Languages as LanguagesIcon } from "lucide-react";
import { LANGUAGES } from "../data/portfolioData";

export const Languages: React.FC = () => {
  return (
    <section
      id="langues"
      className="border-b border-[#E6DFE2] bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left 4 columns: Section Title */}
          <div className="lg:col-span-4">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#9A5B73]">
              06 / Communication
            </span>
            <h2 className="mt-2 font-serif-editorial text-2xl font-medium tracking-tight text-[#1E1921] sm:text-3xl">
              Langues
            </h2>
            <p className="mt-2 text-sm text-[#4E4554]">
              Capacité de communication professionnelle et technique en contexte
              multilingue.
            </p>
          </div>

          {/* Right 8 columns: 3 Language Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-8">
            {LANGUAGES.map((lang) => (
              <div
                key={lang.id}
                className="flex items-center justify-between rounded-xl border border-[#E6DFE2] bg-[#FAF8F6] p-5 transition-colors hover:border-[#C8B5BE] hover:bg-white"
              >
                <div>
                  <span className="font-mono-tech text-[11px] font-medium uppercase tracking-widest text-[#9A5B73]">
                    {lang.code}
                  </span>
                  <h3 className="mt-1 font-serif-editorial text-lg font-medium text-[#1E1921]">
                    {lang.language}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#4E4554]">
                    {lang.level}
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E6DFE2] bg-white text-[#9A5B73]">
                  <LanguagesIcon className="h-4 w-4" strokeWidth={1.75} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
