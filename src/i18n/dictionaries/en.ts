import type { Dictionary } from "./types";

const dictionary: Dictionary = {
  navigation: {
    languageSwitcherLabel: "Languages",
  },
  hero: {
    title: "Multilingual SSR Demo",
    subtitle:
      "Experience a server-rendered Next.js page with instant locale switching for English, Arabic, and Chinese.",
    primaryCta: "Explore Features",
  },
  features: {
    title: "What is included?",
    items: [
      "Next.js App Router with Server-Side Rendering",
      "Locale-aware routing backed by middleware",
      "Right-to-left layout support for Arabic",
      "Dynamic language switcher links",
    ],
  },
  serverInfo: {
    title: "Server-rendered snapshot",
    renderedAtLabel: "Rendered on",
  },
  languages: {
    en: "English",
    ar: "العربية",
    zh: "中文",
  },
};

export default dictionary;

