const fallbackSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function normalizeSiteUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.origin;
  } catch {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `Invalid NEXT_PUBLIC_SITE_URL provided ("${url}"). Using fallback "${fallbackSiteUrl}".`,
      );
    }

    return new URL(fallbackSiteUrl).origin;
  }
}

const siteUrl = normalizeSiteUrl(fallbackSiteUrl);

export function getSiteUrl(): string {
  return siteUrl;
}

export const siteMetadata = {
  title: "Multilingual SSR Demo",
  description:
    "A server-rendered Next.js starter showcasing locale-aware routing for English, Arabic, Chinese, Persian, and Turkish.",
  keywords: [
    "Next.js",
    "Server Side Rendering",
    "Internationalization",
    "Arabic",
    "Chinese",
    "English",
    "Persian",
    "Farsi",
    "Turkish",
    "Türkçe",
  ],
};

