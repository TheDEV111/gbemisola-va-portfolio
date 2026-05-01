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
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
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
