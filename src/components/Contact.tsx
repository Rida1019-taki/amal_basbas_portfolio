import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  Copy,
  Check,
  Info,
} from "lucide-react";
import { EXTERNAL_LINKS, PERSONAL_INFO } from "../data/portfolioData";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isPrepared, setIsPrepared] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (isPrepared) {
      setIsPrepared(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Structure prête à être connectée à un endpoint backend / service d'envoi (ex: Formspree, EmailJS, API Spring Boot)
    setIsPrepared(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback silencieux si le presse-papier n'est pas accessible
    }
  };

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(
      `Contact Portfolio — ${formData.name || "Opportunité professionnelle"}`
    );
    const body = encodeURIComponent(
      `Bonjour Amal,\n\n${formData.message}\n\n---\nNom : ${formData.name}\nEmail : ${formData.email}`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="border-b border-[#E6DFE2] bg-[#FAF8F6] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left 5 Columns: Contact Details */}
          <div className="lg:col-span-5">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#9A5B73]">
              07 / Contact
            </span>
            <h2 className="mt-2 font-serif-editorial text-3xl font-medium tracking-tight text-[#1E1921] sm:text-4xl">
              Vous avez un projet ou une opportunité ?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4E4554]">
              N&apos;hésitez pas à me contacter par email ou par téléphone pour
              échanger autour d&apos;une opportunité professionnelle, d&apos;un
              stage ou d&apos;un projet web.
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-8 space-y-3.5">
              {/* Email Card */}
              <div className="flex items-center justify-between rounded-xl border border-[#E6DFE2] bg-white p-4 transition-colors hover:border-[#C8B5BE]">
                <a
                  href={PERSONAL_INFO.emailHref}
                  className="flex items-center gap-3.5 group min-w-0"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E6DFE2] bg-[#FAF8F6] text-[#9A5B73] transition-colors group-hover:border-[#9A5B73] group-hover:bg-[#F7EEF1]">
                    <Mail className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <span className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#7A6F80]">
                      Email
                    </span>
                    <span className="block truncate font-mono-tech text-xs sm:text-sm font-medium text-[#1E1921] group-hover:text-[#9A5B73] transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="ml-2 inline-flex shrink-0 items-center gap-1 rounded-md border border-[#E6DFE2] bg-[#FAF8F6] px-2.5 py-1.5 font-mono-tech text-[11px] text-[#4E4554] transition-colors hover:border-[#9A5B73] hover:text-[#1E1921] cursor-pointer"
                  title="Copier l'adresse email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3 w-3 text-[#2E6B56]" />
                      <span className="text-[#2E6B56]">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 text-[#9A5B73]" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <a
                href={PERSONAL_INFO.phoneHref}
                className="group flex items-center gap-3.5 rounded-xl border border-[#E6DFE2] bg-white p-4 transition-colors hover:border-[#C8B5BE]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E6DFE2] bg-[#FAF8F6] text-[#9A5B73] transition-colors group-hover:border-[#9A5B73] group-hover:bg-[#F7EEF1]">
                  <Phone className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <div>
                  <span className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#7A6F80]">
                    Téléphone
                  </span>
                  <span className="font-mono-tech text-sm font-medium text-[#1E1921] group-hover:text-[#9A5B73] transition-colors">
                    {PERSONAL_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 rounded-xl border border-[#E6DFE2] bg-white p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E6DFE2] bg-[#FAF8F6] text-[#9A5B73]">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <div>
                  <span className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#7A6F80]">
                    Localisation
                  </span>
                  <span className="text-sm font-medium text-[#1E1921]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={EXTERNAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#E6DFE2] bg-white px-4 py-2.5 text-xs font-medium text-[#1E1921] transition-colors hover:border-[#9A5B73] hover:bg-[#F7EEF1] hover:text-[#7C455A]"
                title="Profil LinkedIn (lien configurable dans portfolioData.ts)"
              >
                <span>{PERSONAL_INFO.linkedinLabel}</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#9A5B73]" />
              </a>

              <a
                href={EXTERNAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#E6DFE2] bg-white px-4 py-2.5 text-xs font-medium text-[#1E1921] transition-colors hover:border-[#9A5B73] hover:bg-[#F7EEF1] hover:text-[#7C455A]"
                title="Profil GitHub (lien configurable dans portfolioData.ts)"
              >
                <span>{PERSONAL_INFO.githubLabel}</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#9A5B73]" />
              </a>
            </div>
          </div>

          {/* Right 7 Columns: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E6DFE2] bg-white p-6 sm:p-9 shadow-[0_10px_30px_-15px_rgba(30,25,33,0.05)]">
              <h3 className="font-serif-editorial text-xl font-medium text-[#1E1921]">
                Envoyer un message
              </h3>
              <p className="mt-1 text-xs text-[#7A6F80]">
                Remplissez les informations ci-dessous pour préparer votre
                message.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-[#1E1921]"
                  >
                    Nom
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    className="mt-2 w-full rounded-lg border border-[#E6DFE2] bg-[#FAF8F6] px-4 py-3 text-sm text-[#1E1921] placeholder-[#7A6F80]/70 transition-colors focus:border-[#9A5B73] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-[#1E1921]"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.com"
                    className="mt-2 w-full rounded-lg border border-[#E6DFE2] bg-[#FAF8F6] px-4 py-3 text-sm text-[#1E1921] placeholder-[#7A6F80]/70 transition-colors focus:border-[#9A5B73] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[#1E1921]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre opportunité..."
                    className="mt-2 w-full resize-y rounded-lg border border-[#E6DFE2] bg-[#FAF8F6] px-4 py-3 text-sm text-[#1E1921] placeholder-[#7A6F80]/70 transition-colors focus:border-[#9A5B73] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#1E1921] px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#9A5B73] cursor-pointer"
                  >
                    <span>Envoyer</span>
                    <Send className="h-4 w-4" strokeWidth={1.75} />
                  </button>
                </div>
              </form>

              {/* Honest feedback state when submitted without backend */}
              {isPrepared && (
                <div
                  className="mt-6 rounded-xl border border-[#E2C8D1] bg-[#F7EEF1]/80 p-4 text-xs text-[#4E4554]"
                  role="status"
                >
                  <div className="flex items-start gap-2.5">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#9A5B73]" />
                    <div className="space-y-2.5">
                      <p className="font-medium text-[#1E1921]">
                        Message préparé (structure de formulaire prête à être
                        connectée à un backend).
                      </p>
                      <p className="leading-relaxed">
                        Aucun serveur d&apos;envoi automatique n&apos;étant
                        configuré sur cet environnement statique, cliquez
                        ci-dessous pour transmettre directement votre message
                        pré-rempli à{" "}
                        <strong className="font-mono-tech text-[#1E1921]">
                          {PERSONAL_INFO.email}
                        </strong>{" "}
                        via votre messagerie :
                      </p>
                      <div className="pt-1">
                        <a
                          href={buildMailtoLink()}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-[#9A5B73] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#7C455A]"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          <span>Ouvrir dans mon client mail</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
