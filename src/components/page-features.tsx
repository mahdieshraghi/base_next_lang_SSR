import type { ThemeProps } from "@/theme-engine/types";

export function PageFeatures({ dictionary }: ThemeProps) {
  return (
    <section id="features" className="page-features">
      <h2 className="page-features-title">
        {dictionary.features.title}
      </h2>
      <div className="page-features-list">
        {dictionary.features.items.map((item, index) => (
          <article key={item} className="page-feature-item">
            <span className="page-feature-number">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
            {item}
          </article>
        ))}
      </div>
    </section>
  );
}

