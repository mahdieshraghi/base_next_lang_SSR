import { languagesConfig } from "../locales-config";
import type { Locale } from "../config";

/**
 * Helper function to create languages object for dictionaries
 * This ensures all dictionaries have consistent language labels
 */
export function createLanguagesObject(
  customLabels?: Partial<Record<Locale, string>>
): Record<Locale, string> {
  const languages: Record<string, string> = {};
  
  for (const [code, config] of Object.entries(languagesConfig)) {
    languages[code] = customLabels?.[code as Locale] ?? config.label;
  }
  
  return languages as Record<Locale, string>;
}


