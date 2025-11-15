/**
 * Language Configuration
 * 
 * To add a new language:
 * 1. Create a dictionary file in dictionaries/ folder (e.g., fr.ts)
 * 2. Add the language config here
 * 
 * That's it! Everything else is automatic.
 */

export interface LanguageConfig {
  code: string;
  region: string; // e.g., "en-US", "ar-EG"
  rtl: boolean;
  label: string; // Native name of the language
}

export const languagesConfig: Record<string, LanguageConfig> = {
  en: {
    code: "en",
    region: "en-US",
    rtl: false,
    label: "English",
  },
  ar: {
    code: "ar",
    region: "ar-EG",
    rtl: true,
    label: "العربية",
  },
  zh: {
    code: "zh",
    region: "zh-CN",
    rtl: false,
    label: "中文",
  },
  fa: {
    code: "fa",
    region: "fa-IR",
    rtl: true,
    label: "فارسی",
  },
  tr: {
    code: "tr",
    region: "tr-TR",
    rtl: false,
    label: "Türkçe",
  },
  fr: {
    code: "fr",
    region: "fr-FR",
    rtl: false,
    label: "Français",
  },
} as const;

export const DEFAULT_LOCALE = "en" as const;

