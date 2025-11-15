import type { ThemeProps } from "@/theme-engine/types";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Header({ locale, dictionary }: ThemeProps) {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          <span className="text-sm font-semibold text-gray-900">SSR Demo</span>
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

