import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { DEFAULT_LOCALE, getDirection, isLocale } from "@/i18n/config";
import { getSiteUrl, siteMetadata } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { getTheme } from "@/lib/get-theme";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
};

type LayoutParams = Promise<{ locale?: string }>;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: LayoutParams;
}>) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const direction = getDirection(locale);
  const theme = await getTheme();

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning data-theme={theme}>
      <body className={`${notoSans.variable} font-sans antialiased`}>
        <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
