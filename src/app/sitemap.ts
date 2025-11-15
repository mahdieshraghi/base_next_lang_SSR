import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const localizedEntries = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: locale === "en" ? 1 : 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...localizedEntries,
  ];
}


