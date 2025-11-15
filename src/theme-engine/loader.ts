import type { ThemeModule } from "./types";
import type { ThemeId } from "@/config/themes";

const themeCache = new Map<ThemeId, ThemeModule>();

export async function loadTheme(theme: ThemeId): Promise<ThemeModule> {
  if (themeCache.has(theme)) {
    return themeCache.get(theme)!;
  }

  try {
    const themeModule = await import(`@/themes/${theme}/index`);
    const loadedTheme: ThemeModule = themeModule.default || themeModule;
    themeCache.set(theme, loadedTheme);
    return loadedTheme;
  } catch (error) {
    console.error(`Failed to load theme: ${theme}`, error);
    // Fallback to classic theme
    if (theme !== "classic") {
      return loadTheme("classic");
    }
    throw new Error(`Theme ${theme} not found and fallback failed`);
  }
}

export async function getThemeConfig(theme: ThemeId): Promise<ThemeModule["config"]> {
  const loadedTheme = await loadTheme(theme);
  return loadedTheme.config;
}

export async function getThemeComponents(theme: ThemeId): Promise<ThemeModule["components"]> {
  const loadedTheme = await loadTheme(theme);
  return loadedTheme.components;
}
