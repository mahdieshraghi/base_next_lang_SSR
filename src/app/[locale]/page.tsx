import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import {
  DEFAULT_LOCALE,
  alternateLanguageLinks,
  isLocale,
  localeToRegion,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

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

  const formatter = new Intl.DateTimeFormat(localeToRegion[locale], {
    dateStyle: "full",
    timeStyle: "long",
  });
  const renderedAt = formatter.format(new Date());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-blue-50 via-white to-purple-100 px-6 py-16 text-zinc-900">
      <section className="flex w-full max-w-4xl flex-col gap-10">
        <header className="flex flex-col gap-6 rounded-3xl bg-white/90 p-10 shadow-xl ring-1 ring-blue-100 backdrop-blur">
          <LanguageSwitcher
            activeLocale={locale}
            label={dictionary.navigation.languageSwitcherLabel}
            labels={dictionary.languages}
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              {dictionary.hero.title}
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600 sm:text-xl">
              {dictionary.hero.subtitle}
            </p>
            <a
              href="#features"
              className="inline-flex w-fit items-center justify-center rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {dictionary.hero.primaryCta}
            </a>
          </div>
        </header>

        <section
          id="features"
          className="grid gap-6 rounded-3xl bg-white/90 p-10 shadow-lg ring-1 ring-zinc-100 backdrop-blur sm:grid-cols-2"
        >
          <div className="sm:col-span-2">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              {dictionary.features.title}
            </h2>
          </div>
          {dictionary.features.items.map((item, index) => (
            <article
              key={item}
              className="rounded-2xl border border-zinc-200 bg-white p-5 text-base leading-relaxed text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            >
              <span className="mb-2 block text-sm font-semibold text-blue-500">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
              {item}
            </article>
          ))}
        </section>

        <section className="rounded-3xl bg-slate-900 p-10 text-slate-100 shadow-xl">
          <h2 className="text-2xl font-semibold">
            {dictionary.serverInfo.title}
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            {dictionary.serverInfo.renderedAtLabel}:{" "}
            <span className="font-medium text-white">{renderedAt}</span>
          </p>
        </section>
      </section>

      <footer className="mt-12 text-sm text-zinc-500">
        Next.js · Server Side Rendering · i18n
      </footer>
    </main>
  );
}

