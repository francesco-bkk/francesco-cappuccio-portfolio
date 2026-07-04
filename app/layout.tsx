import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Inter } from "next/font/google";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { socialLinks, studio } from "@/lib/content";
import { imageUrl, siteDescription, siteName, siteUrl } from "@/lib/seo";
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
    default: `${siteName} | Francesco Cappuccio`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  applicationName: siteName,
  creator: "Francesco Cappuccio",
  publisher: siteName,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} | Francesco Cappuccio`,
    description: siteDescription,
    images: [
      {
        url: imageUrl("/images/hero-studio.jpg"),
        width: 1200,
        height: 800,
        alt: siteName
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Francesco Cappuccio`,
    description: siteDescription,
    images: [imageUrl("/images/hero-studio.jpg")]
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    alternateName: studio.name,
    url: siteUrl,
    founder: {
      "@type": "Person",
      name: "Francesco Cappuccio"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "2/1, Soi Ramkhamhaeng 12, Yeak 4, Hua Mak, Bangkapi",
      addressLocality: "Bangkok",
      postalCode: "10240",
      addressCountry: "TH"
    },
    sameAs: socialLinks.map((link) => link.href)
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
        <CursorSpotlight />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
