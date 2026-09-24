import React, { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

interface SmartImageProps {
  /** Chemin public de l'image (ex: "/images/amal-hero.jpg") */
  src: string;
  /** Texte alternatif accessible (obligatoire) */
  alt: string;
  /** Classes appliquées au conteneur (forme, taille, bordure, ratio) */
  containerClassName?: string;
  /** Classes appliquées à la balise <img> */
  imageClassName?: string;
  /** Titre affiché dans le placeholder tant que l'image est absente */
  placeholderTitle?: string;
  /** Indication du chemin où déposer le fichier */
  placeholderHint?: string;
}

/**
 * Composant image robuste :
 * - affiche l'image avec `object-fit: cover` une fois chargée ;
 * - affiche un cadre placeholder élégant si le fichier est absent (404) ou en erreur ;
 * - reste entièrement responsive grâce aux classes Tailwind fournies.
 */
export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  containerClassName = "",
  imageClassName = "",
  placeholderTitle = "Photo professionnelle",
  placeholderHint,
}) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  return (
    <div
      className={`relative overflow-hidden bg-[#F3ECEE] ${containerClassName}`}
    >
      {status === "error" ? (
        /* Placeholder affiché tant que la vraie photo n'est pas déposée */
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#F3ECEE] px-5 py-8 text-center"
          role="img"
          aria-label={alt}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8B5BE] bg-white text-[#9A5B73]">
            <ImageIcon className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <div>
            <p className="text-sm font-medium text-[#1E1921]">
              {placeholderTitle}
            </p>
            {placeholderHint && (
              <p className="mt-1 font-mono-tech text-[11px] leading-relaxed text-[#7A6F80]">
                {placeholderHint}
              </p>
            )}
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          } ${imageClassName}`}
        />
      )}
    </div>
  );
};
