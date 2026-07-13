import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { socialLinks, studio } from "@/lib/content";
import { contactEmail, imageUrl, siteDescription, siteName, siteUrl } from "@/lib/seo";
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
  keywords: [
    "Francesco Cappuccio",
    "Cappuccio Design Studio",
    "lighting design",
    "furniture design",
    "product design",
    "Bangkok design studio"
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
    title: `${siteName} | Francesco Cappuccio`,
    description: siteDescription,
    images: [
      {
        url: imageUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: siteName
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Francesco Cappuccio`,
    description: siteDescription,
    images: [imageUrl("/og.png")]
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
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#studio`,
        name: siteName,
        alternateName: studio.name,
        description: siteDescription,
        url: siteUrl,
        email: contactEmail,
        image: imageUrl("/og.png"),
        founder: { "@id": `${siteUrl}/#francesco-cappuccio` },
        address: {
          "@type": "PostalAddress",
          streetAddress: "2/1, Soi Ramkhamhaeng 12, Yeak 4, Hua Mak, Bangkapi",
          addressLocality: "Bangkok",
          postalCode: "10240",
          addressCountry: "TH"
        },
        areaServed: "Worldwide",
        sameAs: socialLinks.map((link) => link.href)
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#francesco-cappuccio`,
        name: "Francesco Cappuccio",
        jobTitle: "Designer and Architect",
        worksFor: { "@id": `${siteUrl}/#studio` },
        sameAs: socialLinks.map((link) => link.href)
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        description: siteDescription,
        publisher: { "@id": `${siteUrl}/#studio` },
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
