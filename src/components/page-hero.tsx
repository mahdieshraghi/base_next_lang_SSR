import type { ThemeProps } from "@/theme-engine/types";

export function PageHero({ dictionary }: ThemeProps) {
  return (
    <div className="page-hero">
      <h1 className="page-hero-title">
        {dictionary.hero.title}
      </h1>
      <p className="page-hero-subtitle">
        {dictionary.hero.subtitle}
      </p>
      <a
        href="#features"
        className="page-hero-button"
      >
        {dictionary.hero.primaryCta}
      </a>
    </div>
  );
}

