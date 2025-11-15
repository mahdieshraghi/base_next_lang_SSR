import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale } from "@/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const pathnameLocale = pathname.split("/").filter(Boolean)[0];

  if (isLocale(pathnameLocale)) {
    return;
  }

  return NextResponse.redirect(
    new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url),
  );
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
