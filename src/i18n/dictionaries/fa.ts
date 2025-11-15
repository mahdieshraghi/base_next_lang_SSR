import type { Dictionary } from "./types";
import { createLanguagesObject } from "./helpers";

const dictionary: Dictionary = {
  navigation: {
    languageSwitcherLabel: "زبان‌ها",
  },
  hero: {
    title: "نمایش چندزبانه SSR",
    subtitle:
      "صفحه Next.js با رندر سمت سرور و پشتیبانی از زبان‌های انگلیسی، عربی، چینی، فارسی و ترکی.",
    primaryCta: "مشاهده ویژگی‌ها",
  },
  features: {
    title: "چه چیزهایی شامل می‌شود؟",
    items: [
      "Next.js App Router با رندر سمت سرور",
      "مسیریابی چندزبانه با middleware",
      "پشتیبانی از راست به چپ برای عربی و فارسی",
      "لینک‌های تغییر زبان دینامیک",
    ],
  },
  serverInfo: {
    title: "اطلاعات رندر سمت سرور",
    renderedAtLabel: "رندر شده در",
  },
  languages: createLanguagesObject({
    en: "انگلیسی",
    ar: "العربية",
    zh: "中文",
    fa: "فارسی",
    tr: "Türkçe",
  }),
};

export default dictionary;

