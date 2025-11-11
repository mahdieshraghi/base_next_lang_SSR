import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { DEFAULT_LOCALE, getDirection, isLocale } from "@/i18n/config";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Multilingual SSR Demo",
  description:
    "A server-rendered Next.js starter showcasing locale-aware routing for English, Arabic, and Chinese.",
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

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={`${notoSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
