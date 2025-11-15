import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";

export interface ThemeConfig {
  name: string;
  label: string;
  description: string;
  version: string;
  author?: string;
  screenshot?: string;
}

export interface ThemeProps {
  locale: Locale;
  dictionary: Dictionary;
  renderedAt: string;
  children?: ReactNode;
}

export interface ThemeComponent {
  Layout: (props: ThemeProps) => ReactNode;
  Header?: (props: ThemeProps) => ReactNode;
  Footer?: () => ReactNode;
}

export interface ThemeModule {
  config: ThemeConfig;
  components: ThemeComponent;
}
