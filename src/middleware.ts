import { type NextRequest, NextResponse } from "next/server";

// The portfolio root is fully public — only /dashboard requires auth
const PROTECTED_PREFIXES = ["/dashboard"];
const AUTH_PATHS = new Set(["/auth/login", "/auth/register", "/auth/forgot-password"]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Static assets and Next.js internals — pass through immediately
  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const hasSession = request.cookies.has("auth-session");
  const isProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));
  const isAuthPage = AUTH_PATHS.has(pathname);

  if (isProtected && !hasSession) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthPage && hasSession) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|gif|webp|pdf)).*)"],
};
