"use client";

import { createContext, useContext, useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { type ThemeId } from "@/config/themes";

type ThemeContextType = {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  isPending: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

type ThemeProviderProps = {
  children: React.ReactNode;
  initialTheme: ThemeId;
};

export function ThemeProvider({ children, initialTheme }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeId>(initialTheme);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeId) => {
    if (newTheme === theme) return;
    
    setThemeState(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Use router.refresh() to re-render server components without full page reload
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isPending }}>
      {children}
    </ThemeContext.Provider>
  );
}

