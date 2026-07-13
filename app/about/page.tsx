import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { awards, studio } from "@/lib/content";
import { absoluteUrl, imageUrl, siteName } from "@/lib/seo";

const description =
  "The practice, philosophy, and international recognition of Francesco Cappuccio and Cappuccio Design Studio.";

export const metadata: Metadata = {
  title: "About Francesco Cappuccio",
  description,
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: `About | ${siteName}`,
    description,
    url: absoluteUrl("/about"),
    images: [{ url: imageUrl("/images/studio-portrait.jpg"), width: 1200, height: 1500, alt: "Francesco Cappuccio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `About Francesco Cappuccio | ${siteName}`,
    description,
    images: [imageUrl("/og.png")]
  }
};

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 lg:pb-28 lg:pt-20">
        <div className="grid gap-10 border-t border-ivory/10 pt-8 lg:grid-cols-[0.42fr_1fr] lg:gap-20">
          <div className="flex justify-between lg:block">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">About</p>
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone lg:mt-3">Bangkok · Global</p>
          </div>
          <h1 className="studio-display-title max-w-4xl">
            Light, form <span className="italic text-stone">&amp;</span> lasting beauty.
          </h1>
        </div>

        <div className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-[1.28fr_0.72fr] lg:items-end">
          <div className="relative aspect-[4/5] overflow-hidden bg-panel sm:aspect-[16/10] lg:aspect-[1.28/1]">
            <Image
              src="/images/studio-portrait.jpg"
              alt="Francesco Cappuccio in the studio"
              fill
              priority
              sizes="(min-width: 1024px) 760px, calc(100vw - 40px)"
              className="object-cover object-[50%_14%] grayscale contrast-[0.96]"
            />
          </div>
          <div className="border-t border-ivory/10 pt-7">
            <ArrowDownRight aria-hidden="true" size={28} strokeWidth={1} className="text-stone" />
            <p className="mt-16 font-body text-2xl font-light leading-[1.22] text-ivory sm:text-[2rem] lg:mt-24">{studio.intro}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-ivory/10 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.42fr_1fr] lg:gap-20 lg:py-28">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">The practice</p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest2 text-stone">Since 1993</p>
          </div>
          <div className="grid max-w-3xl gap-8 text-base font-light leading-8 text-stone sm:text-lg sm:leading-8">
            {studio.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "text-ivory" : undefined}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex items-end justify-between gap-8 border-t border-ivory/10 pt-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Recognition</p>
            <h2 className="studio-section-title mt-5">Major awards</h2>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-stone">35 international awards</span>
        </div>
        <div className="mt-12 grid border-t border-ivory/10 md:grid-cols-4">
          {awards.map((award) => (
            <a key={award.title} href={award.href} target="_blank" rel="noreferrer" className="group border-b border-ivory/10 py-8 md:border-r md:px-6 md:last:border-r-0">
              <div className="relative h-20 w-full grayscale opacity-70 transition duration-300 group-hover:opacity-100">
                <Image src={award.logo} alt={`${award.title} logo`} fill sizes="240px" className="object-contain object-left" />
              </div>
              <h3 className="mt-10 font-body text-xl font-light leading-tight text-ivory">{award.title}</h3>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest2 text-stone">{award.work} · {award.year}</p>
            </a>
          ))}
        </div>
        <Link href="/contact" className="group mt-20 flex items-end justify-between gap-8 border-b border-ivory/20 pb-5 font-body text-[clamp(2.7rem,6vw,5.5rem)] font-light leading-[0.9] tracking-[-0.04em] text-ivory transition-colors duration-500 hover:text-stone">
          Let&apos;s collaborate
          <ArrowRight aria-hidden="true" size={42} strokeWidth={1} className="shrink-0 transition-transform duration-500 group-hover:translate-x-2" />
        </Link>
      </section>
    </main>
  );
}
