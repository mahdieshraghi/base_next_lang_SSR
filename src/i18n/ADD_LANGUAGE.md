# راهنمای اضافه کردن زبان جدید

برای اضافه کردن یک زبان جدید به پروژه، فقط **۳ مرحله** ساده کافی است:

## مرحله ۱: اضافه کردن فایل دیکشنری

1. فایل `TEMPLATE.ts` را از پوشه `dictionaries` کپی کنید
2. آن را به نام کد زبان خود تغییر نام دهید (مثلاً `fr.ts` برای فرانسوی)
3. تمام متن‌ها را ترجمه کنید

مثال:
```bash
cp src/i18n/dictionaries/TEMPLATE.ts src/i18n/dictionaries/fr.ts
```

## مرحله ۲: اضافه کردن تنظیمات زبان

فایل `locales-config.ts` را باز کنید و زبان جدید را اضافه کنید:

```typescript
export const languagesConfig: Record<string, LanguageConfig> = {
  // ... زبان‌های موجود
  fr: {
    code: "fr",
    region: "fr-FR",
    rtl: false,
    label: "Français",
  },
};
```

## مرحله ۳: اضافه کردن import در get-dictionary.ts

فایل `get-dictionary.ts` را باز کنید و import و mapping را اضافه کنید:

```typescript
// در بخش imports
import frDict from "@/i18n/dictionaries/fr";

// در بخش dictionaries object
const dictionaries: Record<Locale, Dictionary> = {
  // ... زبان‌های موجود
  fr: frDict,
} as Record<Locale, Dictionary>;
```

**تمام!** 🎉

سیستم به صورت خودکار:
- ✅ زبان را به لیست زبان‌ها اضافه می‌کند
- ✅ مسیر `/fr` را ایجاد می‌کند
- ✅ تنظیمات RTL/LTR را اعمال می‌کند
- ✅ لینک‌های SEO را به‌روز می‌کند
- ✅ زبان را در language switcher نمایش می‌دهد

## نکات مهم

- **کد زبان**: باید یک کد استاندارد ISO 639-1 باشد (مثلاً `en`, `fr`, `de`)
- **region**: کد منطقه برای locale (مثلاً `fr-FR`, `de-DE`)
- **rtl**: `true` برای زبان‌های راست به چپ (عربی، فارسی)، `false` برای بقیه
- **label**: نام زبان به زبان خودش (مثلاً "Français" برای فرانسوی)

## مثال کامل: اضافه کردن زبان فرانسوی

### ۱. ایجاد فایل `fr.ts`:
```typescript
import type { Dictionary } from "./types";
import { createLanguagesObject } from "./helpers";

const dictionary: Dictionary = {
  navigation: {
    languageSwitcherLabel: "Langues",
  },
  hero: {
    title: "Démo SSR multilingue",
    subtitle: "Découvrez une page Next.js rendue côté serveur...",
    primaryCta: "Explorer les fonctionnalités",
  },
  // ... بقیه ترجمه‌ها
  languages: createLanguagesObject(),
};

export default dictionary;
```

### ۲. اضافه کردن به `locales-config.ts`:
```typescript
fr: {
  code: "fr",
  region: "fr-FR",
  rtl: false,
  label: "Français",
},
```

تمام! 🚀

