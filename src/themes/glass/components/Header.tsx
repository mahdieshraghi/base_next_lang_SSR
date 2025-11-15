import type { ThemeProps } from "@/theme-engine/types";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Header({ locale, dictionary }: ThemeProps) {
  return (
    <header className="glass-card rounded-2xl p-6 backdrop-blur text-gray-900">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <LanguageSwitcher
          activeLocale={locale}
          label={dictionary.navigation.languageSwitcherLabel}
          labels={dictionary.languages}
        />
        <ThemeSwitcher />
      </div>
    </header>
  );
}

