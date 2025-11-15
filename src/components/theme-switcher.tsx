"use client";

import { useTheme } from "./theme-provider";
import { themes, themeLabels } from "@/config/themes";

export function ThemeSwitcher() {
  const { theme, setTheme, isPending } = useTheme();

  return (
    <div className="flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 p-1 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/80">
      {themes.map((t) => {
        const isActive = t === theme;
        return (
          <button
            key={t}
            onClick={() => setTheme(t)}
            disabled={isPending}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            } ${isPending ? "opacity-50 cursor-wait" : ""}`}
            aria-label={`Switch to ${themeLabels[t]} theme`}
            aria-pressed={isActive}
          >
            {themeLabels[t]}
          </button>
        );
      })}
    </div>
  );
}

