import type { Dictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { languagesConfig } from "./locales-config";

// Static imports for all dictionaries
// These are automatically validated against languagesConfig
import enDict from "@/i18n/dictionaries/en";
import arDict from "@/i18n/dictionaries/ar";
import zhDict from "@/i18n/dictionaries/zh";
import faDict from "@/i18n/dictionaries/fa";
import trDict from "@/i18n/dictionaries/tr";
import frDict from "@/i18n/dictionaries/fr";

// Auto-map dictionaries based on languagesConfig
const dictionaries: Record<Locale, Dictionary> = {
  en: enDict,
  ar: arDict,
  zh: zhDict,
  fa: faDict,
  tr: trDict,
  fr: frDict,
} as Record<Locale, Dictionary>;

// Validate that all languages in config have dictionaries
const missingDictionaries = Object.keys(languagesConfig).filter(
  (code) => !(code in dictionaries)
);

if (missingDictionaries.length > 0 && process.env.NODE_ENV !== "production") {
  console.warn(
    `Missing dictionaries for: ${missingDictionaries.join(", ")}. ` +
      `Please add them to get-dictionary.ts`
  );
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const dictionary = dictionaries[locale];

  if (!dictionary) {
    throw new Error(`Dictionary for locale "${locale}" not found`);
  }

  return dictionary;
}


