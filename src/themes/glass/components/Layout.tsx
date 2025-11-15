import type { ThemeProps } from "@/theme-engine/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageHero } from "@/components/page-hero";
import { PageFeatures } from "@/components/page-features";
import { PageServerInfo } from "@/components/page-server-info";

export function Layout(props: ThemeProps) {
  return (
    <main className="flex min-h-screen flex-col px-6 py-8 text-[var(--text-primary)]">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Header & Hero */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Header {...props} />
            <PageHero {...props} />
          </div>
          
          {/* Right Column - Server Info */}
          <div className="lg:col-span-1">
            <PageServerInfo {...props} />
          </div>
        </div>
        
        {/* Features Section - Full Width */}
        <div className="mt-6">
          <PageFeatures {...props} />
        </div>
      </div>
      <Footer />
    </main>
  );
}

