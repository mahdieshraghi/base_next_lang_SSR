import type { ThemeProps } from "@/theme-engine/types";

export function PageServerInfo({ dictionary, renderedAt }: ThemeProps) {
  return (
    <section className="page-server-info">
      <h2 className="page-server-info-title">
        {dictionary.serverInfo.title}
      </h2>
      <p className="page-server-info-text">
        {dictionary.serverInfo.renderedAtLabel}:{" "}
        <span className="page-server-info-time">{renderedAt}</span>
      </p>
    </section>
  );
}

