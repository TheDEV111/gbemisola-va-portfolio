import { type NextRequest, NextResponse } from "next/server";

// GitHub usernames allowed to access the Keystatic admin panel
const KEYSTATIC_ALLOWED_USERS = (process.env["KEYSTATIC_ALLOWED_GITHUB_USERS"] ?? "")
  .split(",")
  .map((u) => u.trim().toLowerCase())
  .filter(Boolean);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Pass through Next.js internals and static assets
  if (pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  // Keystatic admin — verify GitHub username from session cookie if allowlist is configured
  if (pathname.startsWith("/keystatic") || pathname.startsWith("/api/keystatic")) {
    if (KEYSTATIC_ALLOWED_USERS.length > 0) {
      const ksSession = request.cookies.get("keystatic-gh-session")?.value;
      if (ksSession) {
        try {
          // Keystatic stores the GitHub login in the session JSON
          const parsed = JSON.parse(Buffer.from(ksSession.split(".")[1] ?? "", "base64").toString());
          const login = (parsed?.login ?? "").toLowerCase();
          if (!KEYSTATIC_ALLOWED_USERS.includes(login)) {
            return new NextResponse("Forbidden", { status: 403 });
          }
        } catch {
          // Session unreadable — let Keystatic handle its own auth
        }
      }
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|gif|webp|pdf)).*)"],
};
