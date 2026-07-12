import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { socialLinks, studio } from "@/lib/content";
import { absoluteUrl, imageUrl, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Contact | ${siteName}`,
  description: "Contact Cappuccio Design Studio in Bangkok for lighting, furniture, product, and spatial design collaborations.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: `Contact | ${siteName}`,
    description: "Start a new design conversation with Cappuccio Design Studio.",
    url: absoluteUrl("/contact"),
    images: [{ url: imageUrl("/images/project3.jpg"), width: 1200, height: 1500, alt: "Scacco Matto by Cappuccio Design Studio" }]
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100svh-5rem)]">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 lg:pb-28 lg:pt-20">
        <div className="grid gap-10 border-t border-ivory/10 pt-8 lg:grid-cols-[0.42fr_1fr] lg:gap-20">
          <div className="flex justify-between lg:block">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Contact</p>
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone lg:mt-3">Available worldwide</p>
          </div>
          <h1 className="max-w-4xl font-body text-[clamp(3.4rem,10vw,9.5rem)] font-light leading-[0.8] tracking-[-0.05em] text-ivory">
            Begin a <span className="italic text-stone">conversation.</span>
          </h1>
        </div>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-panel sm:aspect-[16/11] lg:aspect-[4/5]">
            <Image
              src="/images/project3.jpg"
              alt="Scacco Matto portable lamp"
              fill
              priority
              sizes="(min-width: 1024px) 560px, calc(100vw - 40px)"
              className="scale-[1.14] object-contain grayscale contrast-[0.97]"
            />
          </div>
          <div className="flex flex-col justify-between gap-16 border-t border-ivory/10 pt-7 lg:gap-24">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Studio</p>
              <p className="mt-5 max-w-md font-body text-3xl font-light leading-[1.15] text-ivory sm:text-4xl">
                Lighting, furniture, product and spatial design.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Bangkok</p>
                <address className="mt-5 max-w-xs not-italic text-sm leading-7 text-stone">{studio.address}</address>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Follow</p>
                <div className="mt-5 grid gap-3">
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-ivory/10 pb-3 font-mono text-[11px] uppercase tracking-widest text-ivory transition-colors hover:text-stone">
                      {link.label}
                      <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.25} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
