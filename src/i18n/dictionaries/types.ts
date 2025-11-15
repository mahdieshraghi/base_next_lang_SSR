import type { Locale } from "@/i18n/config";

export type Dictionary = {
  navigation: {
    languageSwitcherLabel: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
  };
  features: {
    title: string;
    items: string[];
  };
  serverInfo: {
    title: string;
    renderedAtLabel: string;
  };
  languages: Record<Locale, string>;
};


