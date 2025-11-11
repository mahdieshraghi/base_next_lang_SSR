export const locales = ["en", "ar", "zh"] as const;

export type Locale = (typeof locales)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const rtlLocales: Locale[] = ["ar"];

export const localeToRegion: Record<Locale, string> = {
  en: "en-US",
  ar: "ar-EG",
  zh: "zh-CN",
};

export const alternateLanguageLinks: Readonly<Record<string, string>> =
  Object.freeze({
    en: "/en",
    ar: "/ar",
    zh: "/zh",
    "x-default": `/${DEFAULT_LOCALE}`,
  });

export function isLocale(value: string | undefined): value is Locale {
  return (locales as readonly string[]).includes(value ?? "");
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

