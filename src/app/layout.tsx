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

const BASE_URL = "https://gbemisola-va-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Gbemisola Oginni | Virtual Assistant & Administrative Expert",
    template: "%s | Gbemisola Oginni",
  },
  description:
    "Hire Gbemisola Oginni, a precision-driven Virtual Assistant based in Lagos, Nigeria with 5+ years across healthcare administration, supply chain logistics, and executive support. Available for remote contracts and full-time roles.",
  keywords: [
    "virtual assistant Nigeria",
    "remote virtual assistant Lagos",
    "executive assistant Lagos",
    "healthcare virtual assistant",
    "administrative support Nigeria",
    "hire virtual assistant Africa",
    "Gbemisola Oginni",
    "pharmacy virtual assistant",
    "email management",
    "calendar management",
    "project coordination",
  ],
  authors: [{ name: "Oluwagbemisola Oginni", url: BASE_URL }],
  creator: "Oluwagbemisola Oginni",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "profile",
    url: BASE_URL,
    siteName: "Gbemisola Oginni",
    title: "Gbemisola Oginni | Virtual Assistant & Administrative Expert",
    description:
      "5+ years in healthcare operations and government logistics, now channelled into keeping your business organised. Based in Lagos, Nigeria. Available for remote work.",
    locale: "en_NG",
    firstName: "Oluwagbemisola",
    lastName: "Oginni",
    username: "gbemisola-oginni",
    gender: "female",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gbemisola Oginni | Virtual Assistant & Administrative Expert",
    description:
      "5+ years in healthcare operations and government logistics, now channelled into keeping your business organised. Available for remote contracts.",
    creator: "@gbemisolaoginni",
  },
};

export const viewport: Viewport = {
  themeColor: "#06060e",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Oluwagbemisola Oginni",
      alternateName: "Gbemisola Oginni",
      url: BASE_URL,
      jobTitle: "Virtual Assistant",
      description:
        "Precision-driven Virtual Assistant with 5+ years across healthcare administration, supply chain logistics, and executive support. Licensed Pharmacist. Based in Lagos, Nigeria.",
      email: "gbemisola299@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      sameAs: ["https://linkedin.com/in/oluwagbemisola-oginni"],
      knowsAbout: [
        "Virtual Assistance",
        "Email Management",
        "Calendar Management",
        "Project Coordination",
        "Healthcare Administration",
        "Supply Chain Logistics",
        "Data Entry",
        "Administrative Support",
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "Bachelor of Pharmacy (B.Pharm)",
        credentialCategory: "degree",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "Gbemisola Oginni — Virtual Assistant Services",
      provider: { "@id": `${BASE_URL}/#person` },
      url: BASE_URL,
      description:
        "Professional virtual assistant services including email management, calendar management, travel coordination, data entry, research, and project coordination.",
      areaServed: { "@type": "Place", name: "Remote / Worldwide" },
      serviceType: "Virtual Assistant",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${BASE_URL}#contact`,
        servicePhone: "",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("dark", fontSans.variable, fontMono.variable, fontSerif.variable)}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" style={{ background: "#06060e" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
