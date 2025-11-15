# راهنمای ساخت تم جدید

این راهنما به شما نشان می‌دهد چطور یک تم جدید برای پروژه بسازید.

## گام 1: ایجاد پوشه تم

```bash
mkdir -p src/themes/my-theme/components
```

**نکته**: نام پوشه باید با نام تم در `config.ts` یکسان باشد.

## گام 2: ایجاد فایل config.ts

```typescript
// src/themes/my-theme/config.ts
import type { ThemeConfig } from "@/theme-engine/types";

export const config: ThemeConfig = {
  name: "my-theme",        // باید با نام پوشه یکسان باشد
  label: "My Theme",       // نام نمایشی در Theme Switcher
  description: "توضیحات تم شما",
  version: "1.0.0",
  author: "نام شما",       // اختیاری
};
```

## گام 3: ایجاد کامپوننت Layout (اجباری)

```typescript
// src/themes/my-theme/components/Layout.tsx
import type { ThemeProps } from "@/theme-engine/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
// کامپوننت‌های محتوایی مشترک هستند
import { PageHero } from "@/components/page-hero";
import { PageFeatures } from "@/components/page-features";
import { PageServerInfo } from "@/components/page-server-info";

export function Layout(props: ThemeProps) {
  return (
    <main className="min-h-screen p-4">
      <Header {...props} />
      <PageHero {...props} />
      <PageFeatures {...props} />
      <PageServerInfo {...props} />
      <Footer />
    </main>
  );
}
```

**نکته مهم**: 
- `Layout` اجباری است و باید `ThemeProps` را دریافت کند
- Header و Footer در هر تم می‌توانند طراحی متفاوتی داشته باشند
- کامپوننت‌های محتوایی (Hero، Features، ServerInfo) مشترک هستند

## گام 4: ایجاد کامپوننت‌های Header و Footer (اختیاری اما توصیه می‌شود)

**نکته مهم**: Header و Footer در هر تم می‌توانند طراحی کاملاً متفاوتی داشته باشند، مثل وردپرس!

### Header.tsx
```typescript
// src/themes/my-theme/components/Header.tsx
import type { ThemeProps } from "@/theme-engine/types";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Header({ locale, dictionary }: ThemeProps) {
  return (
    <header className="p-4 border-b bg-white sticky top-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          <span className="text-sm font-semibold">My Site</span>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher
            activeLocale={locale}
            label={dictionary.navigation.languageSwitcherLabel}
            labels={dictionary.languages}
          />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
```

### Footer.tsx
```typescript
// src/themes/my-theme/components/Footer.tsx
export function Footer() {
  return (
    <footer className="mt-12 text-center text-sm text-gray-500 border-t pt-4">
      Next.js · Server Side Rendering · i18n · My Theme
    </footer>
  );
}
```

**نکته**: کامپوننت‌های محتوایی (Hero، Features، ServerInfo) مشترک هستند و در `src/components/` قرار دارند.

## گام 5: ایجاد فایل styles.css (اختیاری)

```css
/* src/themes/my-theme/styles.css */

/* CSS Variables برای تم شما */
[data-theme="my-theme"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --accent: #3b82f6;
}

/* استایل‌های مخصوص تم */
[data-theme="my-theme"] main {
  background: var(--bg-primary);
  color: var(--text-primary);
}

[data-theme="my-theme"] header {
  background: var(--bg-secondary);
  border-bottom: 1px solid #e5e5e5;
}
```

## گام 6: Export کردن تم در index.ts

```typescript
// src/themes/my-theme/index.ts
import type { ThemeModule } from "@/theme-engine/types";
import { config } from "./config";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./styles.css";

const myTheme: ThemeModule = {
  config,
  components: {
    Layout,      // اجباری
    Header,      // اختیاری - می‌تواند طراحی متفاوتی داشته باشد
    Footer,      // اختیاری - می‌تواند طراحی متفاوتی داشته باشد
  },
};

export default myTheme;
```

## گام 7: ثبت تم در themes.ts

```typescript
// src/config/themes.ts
export const themes = ["classic", "glass", "my-theme"] as const;

export type ThemeId = (typeof themes)[number];

export const defaultTheme: ThemeId = "classic";

export const themeLabels: Record<ThemeId, string> = {
  classic: "Classic",
  glass: "Glass",
  "my-theme": "My Theme", // اضافه کنید
};
```

## گام 8: تست تم

1. سرور را restart کنید:
```bash
npm run dev
```

2. در مرورگر، Developer Tools را باز کنید و cookie را تنظیم کنید:
```javascript
document.cookie = "theme=my-theme; path=/; max-age=31536000; SameSite=Lax";
window.location.reload();
```

یا از Theme Switcher در صفحه استفاده کنید.

## ساختار نهایی

```
src/
  components/                  ← کامپوننت‌های محتوایی مشترک
    ├── page-hero.tsx         ✅ (مشترک)
    ├── page-features.tsx     ✅ (مشترک)
    └── page-server-info.tsx  ✅ (مشترک)

  themes/
    my-theme/
      ├── config.ts              ✅
      ├── index.ts               ✅
      ├── styles.css             ✅ (استایل‌های تم)
      └── components/
          ├── Layout.tsx          ✅ (اجباری - چیدمان)
          ├── Header.tsx         ✅ (اختیاری - طراحی متفاوت)
          └── Footer.tsx         ✅ (اختیاری - طراحی متفاوت)
```

**مزایا**:
- Header و Footer در هر تم می‌توانند طراحی کاملاً متفاوتی داشته باشند
- کامپوننت‌های محتوایی مشترک هستند (کمتر تکرار کد)
- فقط استایل‌ها و Layout در هر تم متفاوت هستند

## نکات مهم

1. **Layout اجباری است**: هر تم باید `Layout.tsx` داشته باشد
2. **ThemeProps**: همه کامپوننت‌ها `ThemeProps` را دریافت می‌کنند که شامل:
   - `locale`: زبان فعلی (en, ar, zh)
   - `dictionary`: دیکشنری ترجمه‌ها
   - `renderedAt`: زمان رندر شدن صفحه
3. **SSR Support**: همه کامپوننت‌ها باید Server-Side Rendering را پشتیبانی کنند
4. **Dynamic Import**: تم‌ها به صورت خودکار لود می‌شوند
5. **Fallback**: اگر تمی لود نشود، به تم Classic برمی‌گردد

## مثال‌های موجود

- **Classic Theme**: `src/themes/classic/` - طراحی کلاسیک و ساده
- **Glass Theme**: `src/themes/glass/` - طراحی glassmorphism

می‌توانید از این تم‌ها به عنوان الگو استفاده کنید.

