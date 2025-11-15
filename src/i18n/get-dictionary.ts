import type { Dictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

const dictionaries: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  en: () => import("@/i18n/dictionaries/en"),
  ar: () => import("@/i18n/dictionaries/ar"),
  zh: () => import("@/i18n/dictionaries/zh"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loadDictionary = dictionaries[locale];

  const dictionaryModule = await loadDictionary();

  return dictionaryModule.default;
}


