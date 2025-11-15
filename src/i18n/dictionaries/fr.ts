import type { Dictionary } from "./types";
import { createLanguagesObject } from "./helpers";

const dictionary: Dictionary = {
  navigation: {
    languageSwitcherLabel: "Langues",
  },
  hero: {
    title: "Démo SSR multilingue",
    subtitle:
      "Découvrez une page Next.js rendue côté serveur avec changement de langue instantané pour l'anglais, l'arabe, le chinois, le persan, le turc et le français.",
    primaryCta: "Explorer les fonctionnalités",
  },
  features: {
    title: "Qu'est-ce qui est inclus ?",
    items: [
      "Next.js App Router avec rendu côté serveur",
      "Routage basé sur la langue avec middleware",
      "Support de la mise en page de droite à gauche pour l'arabe et le persan",
      "Liens de changement de langue dynamiques",
    ],
  },
  serverInfo: {
    title: "Instantané rendu côté serveur",
    renderedAtLabel: "Rendu le",
  },
  languages: createLanguagesObject({
    en: "Anglais",
    ar: "Arabe",
    zh: "Chinois",
    fa: "Persan",
    tr: "Turc",
    fr: "Français",
  }),
};

export default dictionary;

