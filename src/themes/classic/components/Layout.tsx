import type { ThemeProps } from "@/theme-engine/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageHero } from "@/components/page-hero";
import { PageFeatures } from "@/components/page-features";
import { PageServerInfo } from "@/components/page-server-info";

export function Layout(props: ThemeProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 py-16 text-[var(--text-primary)]">
      <section className="flex w-full max-w-4xl flex-col gap-10">
        <header className="flex flex-col gap-6 rounded-3xl p-10 backdrop-blur">
          <Header {...props} />
          <PageHero {...props} />
        </header>
        <PageFeatures {...props} />
        <PageServerInfo {...props} />
      </section>
      <Footer />
    </main>
  );
}

