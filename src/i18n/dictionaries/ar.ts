import type { Dictionary } from "./types";

const dictionary: Dictionary = {
  navigation: {
    languageSwitcherLabel: "اللغات",
  },
  hero: {
    title: "عرض متعدد اللغات مع SSR",
    subtitle:
      "جرّب صفحة Next.js مُولدة على الخادم مع تبديل فوري بين الإنجليزية والعربية والصينية.",
    primaryCta: "استكشف المزايا",
  },
  features: {
    title: "ماذا يتضمن؟",
    items: [
      "موجه App Router في Next.js مع توليد على الخادم",
      "توجيه يعتمد على اللغة من خلال middleware",
      "دعم كامل للاتجاه من اليمين إلى اليسار",
      "روابط تغيير لغة ديناميكية",
    ],
  },
  serverInfo: {
    title: "لقطة مولدة على الخادم",
    renderedAtLabel: "وقت التوليد",
  },
  languages: {
    en: "الإنجليزية",
    ar: "العربية",
    zh: "الصينية",
  },
};

export default dictionary;


