import type { ThemeProps } from "@/theme-engine/types";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Header({ locale, dictionary }: ThemeProps) {
  return (
    <header className="wikipedia-header border-b border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-lg font-semibold text-gray-800 hidden sm:inline">
                Multilingual SSR
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher
              activeLocale={locale}
              label={dictionary.navigation.languageSwitcherLabel}
              labels={dictionary.languages}
            />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}


