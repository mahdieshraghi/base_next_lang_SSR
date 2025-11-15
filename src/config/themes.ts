export const themes = ["classic", "glass", "minimal"] as const;

export type ThemeId = (typeof themes)[number];

export const defaultTheme: ThemeId = "classic";

export const themeLabels: Record<ThemeId, string> = {
  classic: "Classic",
  glass: "Glass",
  minimal: "Minimal",
};
