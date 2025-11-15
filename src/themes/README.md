# Theme System Documentation

این سیستم Theme Engine مشابه وردپرس عمل می‌کند و به شما امکان ساخت تم‌های کاملاً سفارشی با Layout، Components و Styles مختلف را می‌دهد.

## ساختار یک تم

هر تم باید در پوشه `src/themes/[theme-name]/` قرار بگیرد و شامل فایل‌های زیر باشد:

```
themes/
  [theme-name]/
    index.ts          # Export اصلی تم
    config.ts         # تنظیمات تم (نام، نسخه، نویسنده)
    components/       # کامپوننت‌های تم
      Layout.tsx      # Layout اصلی (اجباری)
      Header.tsx      # Header (اختیاری)
      Hero.tsx        # Hero section (اختیاری)
      Features.tsx    # Features section (اختیاری)
      ServerInfo.tsx  # Server info (اختیاری)
      Footer.tsx      # Footer (اختیاری)
    styles.css        # استایل‌های مخصوص تم (اختیاری)
```

## مثال: ساخت تم جدید

### 1. ایجاد پوشه تم

```bash
mkdir -p src/themes/my-theme/components
```

### 2. ایجاد فایل config.ts

```typescript
import type { ThemeConfig } from "@/theme-engine/types";

export const config: ThemeConfig = {
  name: "my-theme",
  label: "My Theme",
  description: "توضیحات تم شما",
  version: "1.0.0",
  author: "نام شما",
};
```

### 3. ایجاد کامپوننت Layout

```typescript
// src/themes/my-theme/components/Layout.tsx
import type { ThemeProps } from "@/theme-engine/types";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Features } from "./Features";

export function Layout(props: ThemeProps) {
  return (
    <main className="my-custom-layout">
      <Header {...props} />
      <Hero {...props} />
      <Features {...props} />
    </main>
  );
}
```

### 4. ایجاد کامپوننت‌های دیگر

هر کامپوننت `ThemeProps` را دریافت می‌کند که شامل:
- `locale`: زبان فعلی
- `dictionary`: دیکشنری ترجمه‌ها
- `renderedAt`: زمان رندر شدن صفحه

```typescript
// src/themes/my-theme/components/Hero.tsx
import type { ThemeProps } from "@/theme-engine/types";

export function Hero({ dictionary }: ThemeProps) {
  return (
    <div className="hero-section">
      <h1>{dictionary.hero.title}</h1>
      <p>{dictionary.hero.subtitle}</p>
    </div>
  );
}
```

### 5. Export کردن تم

```typescript
// src/themes/my-theme/index.ts
import type { ThemeModule } from "@/theme-engine/types";
import { config } from "./config";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";

const myTheme: ThemeModule = {
  config,
  components: {
    Layout,
    Header,
    Hero,
    Features,
  },
};

export default myTheme;
```

### 6. ثبت تم در سیستم

تم را به `src/config/themes.ts` اضافه کنید:

```typescript
export const themes = ["classic", "glass", "my-theme"] as const;
```

## ویژگی‌های تم

### Layout های متفاوت

هر تم می‌تواند Layout کاملاً متفاوتی داشته باشد:
- Grid layout
- Flexbox layout
- Masonry layout
- Sidebar layout
- و هر چیدمان دیگری

### کامپوننت‌های سفارشی

هر تم می‌تواند کامپوننت‌های خودش را داشته باشد:
- Header با طراحی متفاوت
- Hero با استایل متفاوت
- Features با چیدمان متفاوت
- Footer با محتوای متفاوت

### استایل‌های مخصوص

هر تم می‌تواند استایل‌های CSS مخصوص خودش را داشته باشد:
- رنگ‌های متفاوت
- فونت‌های متفاوت
- انیمیشن‌های متفاوت
- افکت‌های متفاوت

### محتوای سفارشی

هر تم می‌تواند محتوای متفاوتی نمایش دهد:
- استفاده از `dictionary` برای محتوای چندزبانه
- اضافه کردن بخش‌های جدید
- تغییر ترتیب بخش‌ها

## نکات مهم

1. **Layout اجباری است**: هر تم باید کامپوننت `Layout` داشته باشد
2. **ThemeProps**: همه کامپوننت‌ها `ThemeProps` را دریافت می‌کنند
3. **SSR Support**: تم‌ها باید با Server-Side Rendering سازگار باشند
4. **Dynamic Import**: تم‌ها به صورت دینامیک لود می‌شوند
5. **Fallback**: اگر تمی لود نشود، به تم Classic برمی‌گردد

## مثال‌های موجود

- **Classic Theme**: طراحی کلاسیک و ساده
- **Glass Theme**: طراحی glassmorphism با Layout متفاوت

برای دیدن مثال‌های کامل، به پوشه‌های `classic/` و `glass/` مراجعه کنید.

## تست تم

بعد از ساخت تم، می‌توانید با تغییر theme در cookie یا استفاده از ThemeSwitcher تم را تست کنید.

```javascript
document.cookie = "theme=my-theme; path=/; max-age=31536000; SameSite=Lax";
window.location.reload();
```

