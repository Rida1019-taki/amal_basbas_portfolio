// ============================================================================
// CONFIGURATION DES LIENS & DONNÉES DU PORTFOLIO — AMAL BASBAS
// Remplacez simplement les URLs ci-dessous par vos vrais liens GitHub / LinkedIn
// ============================================================================

export const EXTERNAL_LINKS = {
  // Remplacer par le vrai profil LinkedIn d'Amal BASBAS (ex: "https://www.linkedin.com/in/amal-basbas")
  linkedin: "https://www.linkedin.com/in/amal-basbas",
  // Remplacer par le vrai profil GitHub d'Amal BASBAS (ex: "https://github.com/amal-basbas")
  github: "https://github.com/amal-basbas",
  // Liens GitHub spécifiques aux projets (facilement modifiables)
  projects: {
    healthcareGithub: "https://github.com/amal-basbas/healthcare-management-system",
    healthcareLiveOrDoc: "#projet-healthcare-details",
    smartParkingGithub: "https://github.com/amal-basbas/smart-parking",
    logitrackGithub: "https://github.com/amal-basbas/logitrack-solutions",
  },
  // Chemin vers le fichier CV PDF dans le dossier public/ (si vous déposez votre PDF dans public/CV_Amal_BASBAS.pdf)
  cvPdfPath: "/CV_Amal_BASBAS.pdf",
};

// ============================================================================
// CHEMINS DES PHOTOS (2 photos professionnelles)
// Déposez vos fichiers dans /public/images/ aux noms exacts ci-dessous.
// Tant que le fichier est absent, un cadre placeholder élégant s'affiche.
// ============================================================================
export const IMAGES = {
  hero: "/images/amal-hero.jpg",
  about: "/images/amal-about.jpg",
};

export interface SkillCategory {
  id: string;
  title: string;
  domain: "engineering" | "data-devops" | "digital-methodology";
  skills: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  type: string;
  stack: string[];
  description: string;
  githubUrl: string;
  projectUrl?: string;
  hasProjectButton?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  descriptions: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  option?: string;
  institution: string;
  location: string;
  status?: string;
}

export interface LanguageItem {
  id: string;
  language: string;
  level: string;
  code: string;
}

export const PERSONAL_INFO = {
  fullName: "Amal BASBAS",
  firstName: "Amal",
  lastName: "BASBAS",
  officialTitle: "Marketing Digital & Développement Web Junior",
  heroHeadline: "Développeuse Web Full Stack Java/Spring Boot & Marketing Digital",
  email: "amalbasbas55@gmail.com",
  emailHref: "mailto:amalbasbas55@gmail.com",
  phoneDisplay: "0708-077222",
  phoneHref: "tel:0708077222",
  location: "Beni Mellal, Maroc",
  linkedinLabel: "LinkedIn",
  githubLabel: "GitHub",
  heroBadges: ["Java", "Spring Boot", "JavaScript", "MySQL", "Docker", "SEO"],
  profileParagraphs: [
    "Développeuse Web Full Stack (Java/Spring Boot), diplômée en Marketing et Logistique.",
    "J'allie rigueur architecturale et vision stratégique pour concevoir des applications web robustes, performantes et centrées sur l'utilisateur.",
    "Orientée résultats et innovation, je transforme la complexité en solutions durables.",
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "langages",
    title: "Langages",
    domain: "engineering",
    skills: ["Java", "JavaScript"],
  },
  {
    id: "frameworks-backend",
    title: "Frameworks & Backend",
    domain: "engineering",
    skills: ["Spring Boot", "Spring Data JPA", "JDBC"],
  },
  {
    id: "frontend",
    title: "Frontend",
    domain: "engineering",
    skills: ["HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "bases-de-donnees",
    title: "Bases de données",
    domain: "data-devops",
    skills: ["MySQL", "MySQL Workbench"],
  },
  {
    id: "outils-devops",
    title: "Outils & DevOps",
    domain: "data-devops",
    skills: ["Docker", "CI/CD", "Postman", "Git", "GitHub", "IntelliJ IDEA"],
  },
  {
    id: "design",
    title: "Design",
    domain: "digital-methodology",
    skills: ["Figma"],
  },
  {
    id: "cms-creation",
    title: "CMS & Création",
    domain: "digital-methodology",
    skills: ["WordPress", "Canva", "Pack Office"],
  },
  {
    id: "analyse-marketing",
    title: "Analyse & Marketing",
    domain: "digital-methodology",
    skills: ["SEO", "Semrush", "Google Search Console", "Stratégie digitale"],
  },
  {
    id: "methodologies",
    title: "Méthodologies",
    domain: "digital-methodology",
    skills: ["Agile", "Scrum", "Trello", "Travail collaboratif"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "healthcare",
    number: "01",
    title: "Système de Gestion Médicale",
    subtitle: "Healthcare",
    type: "Projet personnel",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "JWT",
      "BCrypt",
      "Postman",
      "Docker",
    ],
    description:
      "Développer le socle technique d'un système de gestion médicale sécurisé en mettant en place l'authentification des utilisateurs et la gestion des référentiels patients, tout en documentant les points d'accès via Swagger.",
    githubUrl: EXTERNAL_LINKS.projects.healthcareGithub,
    projectUrl: EXTERNAL_LINKS.projects.healthcareLiveOrDoc,
    hasProjectButton: true,
  },
  {
    id: "smart-parking",
    number: "02",
    title: "Stationnement Intelligent",
    subtitle: "Smart Parking",
    type: "Projet personnel",
    stack: ["JavaScript (ES6+)", "HTML5", "CSS3", "JSON"],
    description:
      "Créer une application de gestion intelligente simulant les flux de véhicules avec une attribution automatisée des places et un calcul instantané des frais basé sur la durée de stationnement.",
    githubUrl: EXTERNAL_LINKS.projects.smartParkingGithub,
    hasProjectButton: false,
  },
  {
    id: "logitrack",
    number: "03",
    title: "Gestion Logistique",
    subtitle: "LogiTrack Solutions",
    type: "Projet personnel",
    stack: ["Java", "Spring Boot", "Hibernate", "Docker"],
    description:
      "Bâtir une API REST de gestion logistique permettant d'automatiser et de fluidifier les flux de commandes entre les clients et les entrepôts.",
    githubUrl: EXTERNAL_LINKS.projects.logitrackGithub,
    hasProjectButton: false,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "digilacom",
    role: "Community Management",
    company: "DigiLacom",
    location: "Casablanca",
    period: "Juillet 2023 — Octobre 2023",
    descriptions: [
      "Gérer la présence numérique et la stratégie d'influence sur les réseaux sociaux pour accroître la visibilité de la marque et engager les communautés cibles.",
      "Assurer le développement commercial via la prospection active, la gestion de la relation client et l'administration des commandes en ligne.",
    ],
  },
  {
    id: "maroc-seo",
    role: "SEO Référencement Web",
    company: "Maroc SEO",
    location: "Casablanca",
    period: "Janvier 2023 — Mai 2023",
    descriptions: [
      "Optimiser le positionnement organique de sites web à travers des audits techniques et sémantiques approfondis utilisant des outils comme Semrush et Google Search Console.",
      "Concevoir des stratégies de contenu performantes et assurer l'intégration technique sur WordPress pour maximiser le trafic et la performance des mots-clés cibles.",
    ],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: "enaa",
    degree: "Formation en Développement Web Full Stack",
    institution: "École Numérique Ahmed Alhansali",
    location: "Beni Mellal",
    status: "En cours",
  },
  {
    id: "encg",
    degree: "Master en Sciences de Gestion",
    option: "Option Marketing et Logistique",
    institution: "École de Commerce et de Gestion (ENCG)",
    location: "El Jadida",
  },
  {
    id: "fsjes",
    degree: "Licence en Sciences économiques et Gestion",
    institution: "Faculté des sciences juridiques, économiques et sociales",
    location: "El Jadida",
  },
];

export const LANGUAGES: LanguageItem[] = [
  {
    id: "arabe",
    language: "Arabe",
    level: "Langue maternelle",
    code: "AR",
  },
  {
    id: "francais",
    language: "Français",
    level: "Courant",
    code: "FR",
  },
  {
    id: "anglais",
    language: "Anglais",
    level: "B2 — Intermédiaire",
    code: "EN",
  },
];

export const NAV_ITEMS = [
  { id: "accueil", label: "Accueil", href: "#accueil" },
  { id: "a-propos", label: "À propos", href: "#a-propos" },
  { id: "competences", label: "Compétences", href: "#competences" },
  { id: "projets", label: "Projets", href: "#projets" },
  { id: "experiences", label: "Expériences", href: "#experiences" },
  { id: "formation", label: "Formation", href: "#formation" },
  { id: "contact", label: "Contact", href: "#contact" },
];
