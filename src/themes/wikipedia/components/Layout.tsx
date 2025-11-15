import type { ThemeProps } from "@/theme-engine/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageHero } from "@/components/page-hero";
import { PageFeatures } from "@/components/page-features";
import { PageServerInfo } from "@/components/page-server-info";

export function Layout(props: ThemeProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header {...props} />
      
      <div className="flex flex-1">
        {/* Left Sidebar - Wikipedia Style */}
        <aside className="wikipedia-sidebar w-64 bg-white border-r border-gray-300 hidden lg:block">
          <nav className="sticky top-0 p-4 space-y-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Navigation
            </div>
            <a href="#main-content" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              Main page
            </a>
            <a href="#features" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              Features
            </a>
            <div className="pt-4 mt-4 border-t border-gray-200">
              <PageServerInfo {...props} />
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main id="main-content" className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="bg-white rounded border border-gray-300 shadow-sm p-6 mb-6">
              <PageHero {...props} />
            </div>
            
            <div className="bg-white rounded border border-gray-300 shadow-sm p-6">
              <PageFeatures {...props} />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}


