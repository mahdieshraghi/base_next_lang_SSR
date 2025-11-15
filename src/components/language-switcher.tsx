"use client";

import { useRouter, usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { languagesConfig } from "@/i18n/locales-config";

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
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    const currentPath = pathname.replace(`/${activeLocale}`, "");
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <div className="relative">
      <label htmlFor="language-select" className="sr-only">
        {label}
      </label>
      <select
        id="language-select"
        value={activeLocale}
        onChange={handleLanguageChange}
        className="appearance-none bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-zinc-700 dark:text-zinc-300 cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-w-[140px]"
        aria-label={label}
      >
        {locales.map((locale) => {
          const config = languagesConfig[locale];
          return (
            <option key={locale} value={locale}>
              {config.flag} {labels[locale]}
            </option>
          );
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          className="h-4 w-4 text-zinc-500 dark:text-zinc-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}


