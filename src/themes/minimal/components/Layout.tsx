import type { ThemeProps } from "@/theme-engine/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageHero } from "@/components/page-hero";
import { PageFeatures } from "@/components/page-features";
import { PageServerInfo } from "@/components/page-server-info";

export function Layout(props: ThemeProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sidebar Layout */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-64 bg-gray-50 border-r border-gray-200 p-6 hidden lg:block">
          <div className="sticky top-6">
            <PageServerInfo {...props} />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          <Header {...props} />
          <div className="flex-1 px-6 py-8 max-w-4xl mx-auto w-full">
            <PageHero {...props} />
            <PageFeatures {...props} />
          </div>
          {/* <Footer /> */}
        </main>
      </div>
    </div>
  );
}

