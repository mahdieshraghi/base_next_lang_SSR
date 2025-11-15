import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";

type LanguageSwitcherProps = {
  activeLocale: Locale;
  labels: Record<Locale, string>;
  label: string;
};

export function LanguageSwitcher({
  activeLocale,
  labels,
  label,
}: LanguageSwitcherProps) {
  return (
    <nav aria-label={label} className="flex items-center gap-2">
      {locales.map((locale) => {
        const isActive = locale === activeLocale;

        return (
          <Link
            key={locale}
            href={`/${locale}`}
            className={`rounded-full border px-3 py-1 text-sm transition ${
              isActive
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-zinc-400 text-zinc-700 hover:border-blue-600 hover:text-blue-600"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {labels[locale]}
          </Link>
        );
      })}
    </nav>
  );
}


