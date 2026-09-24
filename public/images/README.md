# Dossier des photos du portfolio — Amal BASBAS

Ce dossier est prévu pour accueillir **exactement 2 photos professionnelles**.
Déposez vos fichiers aux emplacements et noms **exacts** ci-dessous pour que le
portfolio les affiche automatiquement (aucune modification de code nécessaire).

| Fichier attendu                  | Utilisation                        | Forme dans le site            | Texte alternatif (alt)                              |
| -------------------------------- | ---------------------------------- | ----------------------------- | --------------------------------------------------- |
| `amal-hero.jpg`                  | Section Hero (en-tête)             | Portrait arrondi / cercle     | `Amal BASBAS - Développeuse Web Full Stack`         |
| `amal-about.jpg`                 | Section « À propos »               | Rectangle à coins arrondis    | `Amal BASBAS - Profil professionnel`                |

## Recommandations

- **Format** : `.jpg` (ou `.png` / `.webp` possible en renommant le chemin dans le code).
- **Poids** : idéalement moins de 400 Ko par image (optimisez avant l'ajout).
- **Dimensions conseillées** :
  - `amal-hero.jpg` : format portrait, environ **900 × 1100 px**.
  - `amal-about.jpg` : format paysage ou portrait, environ **1200 × 900 px**.
- **Rendu** : les images utilisent `object-fit: cover` ; elles seront recadrées
  proprement quel que soit le ratio source.

## Comportement par défaut

Tant que les fichiers ne sont pas présents à ces emplacements, le portfolio
affiche un cadre placeholder neutre indiquant précisément où déposer chaque
photo. Dès que vous ajoutez le fichier au bon nom, la photo remplace
automatiquement le placeholder.

## Où modifier les chemins (optionnel)

Les chemins sont centralisés dans `src/data/portfolioData.ts` :

```ts
export const IMAGES = {
  hero: "/images/amal-hero.jpg",
  about: "/images/amal-about.jpg",
};
```
