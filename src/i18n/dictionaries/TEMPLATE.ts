/**
 * Template for creating a new language dictionary
 * 
 * To add a new language:
 * 1. Copy this file and rename it to [language-code].ts (e.g., fr.ts for French)
 * 2. Add the language config to locales-config.ts
 * 3. Translate all the strings below
 * 
 * That's it! Everything else is automatic.
 */

import type { Dictionary } from "./types";
import { createLanguagesObject } from "./helpers";

const dictionary: Dictionary = {
  navigation: {
    languageSwitcherLabel: "Languages", // Translate this
  },
  hero: {
    title: "Multilingual SSR Demo", // Translate this
    subtitle:
      "Experience a server-rendered Next.js page with instant locale switching.", // Translate this
    primaryCta: "Explore Features", // Translate this
  },
  features: {
    title: "What is included?", // Translate this
    items: [
      "Next.js App Router with Server-Side Rendering", // Translate this
      "Locale-aware routing backed by middleware", // Translate this
      "Right-to-left layout support for RTL languages", // Translate this
      "Dynamic language switcher links", // Translate this
    ],
  },
  serverInfo: {
    title: "Server-rendered snapshot", // Translate this
    renderedAtLabel: "Rendered on", // Translate this
  },
  languages: createLanguagesObject({
    // Optionally override language names in this language
    // For example, if this is French (fr.ts), you might want:
    // en: "Anglais",
    // ar: "Arabe",
    // etc.
  }),
};

export default dictionary;

