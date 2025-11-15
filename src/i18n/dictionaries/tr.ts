import type { Dictionary } from "./types";
import { createLanguagesObject } from "./helpers";

const dictionary: Dictionary = {
  navigation: {
    languageSwitcherLabel: "Diller",
  },
  hero: {
    title: "Çok Dilli SSR Demo",
    subtitle:
      "İngilizce, Arapça, Çince, Farsça ve Türkçe için anında dil değiştirme ile sunucu tarafından render edilmiş Next.js sayfasını deneyimleyin.",
    primaryCta: "Özellikleri Keşfet",
  },
  features: {
    title: "Neler dahil?",
    items: [
      "Sunucu Tarafı Render ile Next.js App Router",
      "Middleware destekli dil farkındalıklı yönlendirme",
      "Arapça ve Farsça için sağdan sola düzen desteği",
      "Dinamik dil değiştirici bağlantılar",
    ],
  },
  serverInfo: {
    title: "Sunucu tarafından render edilmiş anlık görüntü",
    renderedAtLabel: "Render edildi",
  },
  languages: createLanguagesObject({
    en: "İngilizce",
    ar: "العربية",
    zh: "中文",
    fa: "فارسی",
    tr: "Türkçe",
  }),
};

export default dictionary;

