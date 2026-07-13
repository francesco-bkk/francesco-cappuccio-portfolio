import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { socialLinks, studio } from "@/lib/content";
import { absoluteUrl, contactEmail, imageUrl, siteName, socialImage } from "@/lib/seo";

const description =
  "Contact Cappuccio Design Studio in Bangkok for lighting, furniture, product, and spatial design collaborations.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: `Contact | ${siteName}`,
    description,
    url: absoluteUrl("/contact"),
    images: [{ url: imageUrl("/images/project3.jpg"), width: 1200, height: 1500, alt: "Scacco Matto by Cappuccio Design Studio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${siteName}`,
    description,
    images: [imageUrl(socialImage)]
  }
};

export default function ContactPage() {
  return (
    <main>
      <section className="studio-container flex min-h-[calc(100svh-5rem)] items-center py-16 sm:py-20 lg:py-24">
        <div className="grid w-full gap-14 border-t border-ivory/10 pt-8 lg:grid-cols-[0.58fr_1.42fr] lg:gap-20">
          <div className="flex flex-col items-start lg:min-h-[570px]">
            <p className="studio-eyebrow">Get in touch</p>
            <h1 className="studio-page-title mt-8">Contact</h1>
            <address className="mt-12 max-w-sm not-italic text-[0.95rem] leading-7 text-stone lg:mt-16">
              {studio.address}
            </address>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-5 text-[0.95rem] leading-7 text-stone underline decoration-ivory/20 underline-offset-4 transition-colors hover:text-ivory"
            >
              {contactEmail}
            </a>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 lg:mt-auto">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone transition-colors hover:text-ivory"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
