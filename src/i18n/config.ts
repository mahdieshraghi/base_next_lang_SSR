import { languagesConfig, DEFAULT_LOCALE as DEFAULT_LOCALE_CONFIG } from "./locales-config";

// Auto-generate locales from languagesConfig
export const locales = Object.keys(languagesConfig) as readonly string[];

export type Locale = keyof typeof languagesConfig;

export const DEFAULT_LOCALE = DEFAULT_LOCALE_CONFIG as Locale;

// Auto-generate RTL locales
export const rtlLocales: Locale[] = Object.entries(languagesConfig)
  .filter(([, config]) => config.rtl)
  .map(([code]) => code as Locale);

// Auto-generate localeToRegion
export const localeToRegion: Record<Locale, string> = Object.fromEntries(
  Object.entries(languagesConfig).map(([code, config]) => [code, config.region])
) as Record<Locale, string>;

// Auto-generate alternateLanguageLinks
export const alternateLanguageLinks: Readonly<Record<string, string>> =
  Object.freeze({
    ...Object.fromEntries(
      Object.keys(languagesConfig).map((code) => [code, `/${code}`])
    ),
    "x-default": `/${DEFAULT_LOCALE}`,
  });

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && value in languagesConfig;
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return languagesConfig[locale]?.rtl ? "rtl" : "ltr";
}

