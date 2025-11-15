import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DEFAULT_LOCALE,
  alternateLanguageLinks,
  isLocale,
  localeToRegion,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getTheme } from "@/lib/get-theme";
import { getThemeComponents } from "@/theme-engine/loader";

export const dynamic = "force-dynamic";

type PageParams = Promise<{ locale?: string }>;

type PageProps = {
  params: PageParams;
};

function resolveLocale(locale?: string): Locale {
  if (isLocale(locale)) {
    return locale;
  }

  if (locale === undefined) {
    return DEFAULT_LOCALE;
  }

  notFound();
}

type GenerateMetadataProps = {
  params: PageParams;
};

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.hero.title,
    description: dictionary.hero.subtitle,
    alternates: {
      canonical: `/${locale}`,
      languages: alternateLanguageLinks,
    },
    openGraph: {
      title: dictionary.hero.title,
      description: dictionary.hero.subtitle,
      url: `/${locale}`,
      locale: localeToRegion[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.hero.title,
      description: dictionary.hero.subtitle,
    },
  };
}

export default async function LocaleHome({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dictionary = await getDictionary(locale);
  const theme = await getTheme();

  const renderedAt = new Intl.DateTimeFormat(localeToRegion[locale], {
    dateStyle: "full",
    timeStyle: "long",
  }).format(new Date());

  const { Layout: ThemeLayout } = await getThemeComponents(theme);

  return (
    <ThemeLayout
      locale={locale}
      dictionary={dictionary}
      renderedAt={renderedAt}
    />
  );
}
