import { cookies } from "next/headers";
import { type ThemeId, defaultTheme, themes } from "@/config/themes";

export async function getTheme(): Promise<ThemeId> {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme");
  
  if (themeCookie?.value && themes.includes(themeCookie.value as ThemeId)) {
    return themeCookie.value as ThemeId;
  }
  
  return defaultTheme;
}

