import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { socialLinks, studio } from "@/lib/content";
import { contactEmail, imageUrl, siteDescription, siteName, siteUrl, socialImage } from "@/lib/seo";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display"
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Lighting Designer`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: [
    "Francesco Cappuccio",
    "lighting design",
    "furniture design",
    "product design",
    "Bangkok designer"
  ],
  applicationName: siteName,
  creator: "Francesco Cappuccio",
  publisher: siteName,
  category: "Design",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} | Lighting Designer`,
    description: siteDescription,
    images: [
      {
        url: imageUrl(socialImage),
        width: 1200,
        height: 630,
        alt: siteName
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Lighting Designer`,
    description: siteDescription,
    images: [imageUrl(socialImage)]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f7f5f0"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#francesco-cappuccio`,
        name: "Francesco Cappuccio",
        jobTitle: studio.profession,
        url: siteUrl,
        email: contactEmail,
        image: imageUrl("/images/studio-portrait.jpg"),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangkok",
          addressCountry: "TH"
        },
        sameAs: socialLinks.map((link) => link.href)
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        description: siteDescription,
        publisher: { "@id": `${siteUrl}/#francesco-cappuccio` },
        inLanguage: "en"
      }
    ]
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-obsidian font-body font-light text-ivory antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
