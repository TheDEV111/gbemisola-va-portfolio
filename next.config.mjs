/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ------------------------------------------------------------------ */
  /* React                                                                */
  /* ------------------------------------------------------------------ */
  reactStrictMode: true,

  /* ------------------------------------------------------------------ */
  /* Compiler                                                             */
  /* ------------------------------------------------------------------ */
  compiler: {
    // Remove console.* calls in production (keep .error / .warn)
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  /* ------------------------------------------------------------------ */
  /* Experimental                                                         */
  /* ------------------------------------------------------------------ */
  experimental: {
    // Enable React 19 `use` hook and Server Actions
    serverActions: {
      bodySizeLimit: "2mb",
    },
    // Optimise package imports to reduce bundle size
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-toast",
      "@radix-ui/react-tooltip",
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Images                                                               */
  /* ------------------------------------------------------------------ */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Add trusted image domains here
      // { protocol: 'https', hostname: 'cdn.example.com' },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Headers                                                              */
  /* ------------------------------------------------------------------ */
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Next.js requires unsafe-inline for its runtime styles; fonts from Google
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              // Next.js image optimisation and external scripts
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "connect-src 'self'",
              "img-src 'self' data: blob:",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
      {
        // Keystatic admin — allow its own frames and relax script restrictions for the UI bundle
        source: "/keystatic/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "style-src 'self' 'unsafe-inline'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "connect-src 'self' https://api.github.com https://github.com",
              "img-src 'self' data: blob: https://avatars.githubusercontent.com",
              "frame-src 'self'",
              "frame-ancestors 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },

  /* ------------------------------------------------------------------ */
  /* Redirects                                                            */
  /* ------------------------------------------------------------------ */
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
