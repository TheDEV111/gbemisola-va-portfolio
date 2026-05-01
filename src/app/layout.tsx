import { Geist, JetBrains_Mono, Playfair_Display } from "next/font/google";

import { Providers } from "@/core/providers";
import { cn } from "@/shared/utils/cn";

import type { Metadata, Viewport } from "next";

import "./globals.css";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gbemisola Oginni — Virtual Assistant & Administrative Expert",
  description:
    "Precision-driven virtual assistant with 5+ years across healthcare administration, supply chain logistics, and executive support. Based in Lagos, Nigeria.",
  keywords: [
    "virtual assistant",
    "administrative support",
    "remote assistant",
    "healthcare administration",
    "Lagos Nigeria",
    "executive assistant",
  ],
  authors: [{ name: "Oluwagbemisola Oginni" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Gbemisola Oginni — Virtual Assistant",
    description: "Where precision meets possibility.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#06060e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("dark", fontSans.variable, fontMono.variable, fontSerif.variable)}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" style={{ background: "#06060e" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
