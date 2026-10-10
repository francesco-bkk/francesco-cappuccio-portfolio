import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { awards, studio } from "@/lib/content";
import { absoluteUrl, imageUrl, siteName, socialImage } from "@/lib/seo";

import { getImageDescription, imagePageStructuredData, profileImages, serializeStructuredData } from "@/lib/image-seo";

const description =
  "The practice, philosophy, and international recognition of Francesco Cappuccio and Cappuccio Design Studio.";

function renderEmphasis(text: string) {
  return text.split(/(\*[^*]+\*)/g).map((part, index) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>
    ) : (
      part
    )
  );
}

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: `About ${siteName}`,
    description,
    url: absoluteUrl("/about"),
    images: [{ url: imageUrl("/images/studio-portrait.jpg"), width: 1200, height: 1500, alt: "Francesco Cappuccio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${siteName}`,
    description,
    images: [imageUrl(socialImage)]
  }
};

export default function AboutPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(imagePageStructuredData("/about/", "About Francesco Cappuccio", profileImages)) }} />
      <section className="border-b border-ivory/10 bg-surface" aria-label="About Francesco Cappuccio">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 lg:pb-24 lg:pt-20">
          <div className="flex items-center justify-between gap-6 border-t border-ivory/15 pt-5 font-mono text-[10px] uppercase tracking-widest2 text-stone">
            <span>About Francesco Cappuccio</span>
            <span>Bangkok · Global</span>
          </div>
          <div className="mt-12 grid items-center gap-14 md:mt-16 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] md:gap-12 lg:gap-24">
            <div className="md:pb-6">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Design philosophy</p>
              <h1 className="mt-7 font-body text-[clamp(2.75rem,6.6vw,6.5rem)] font-light leading-[0.94] tracking-[-0.045em] text-ivory">
                <span className="block">Form follows</span>
                <span className="block">function</span>
                <span className="block text-stone">&amp; vice versa.</span>
              </h1>
              <p className="mt-10 max-w-md border-t border-ivory/15 pt-6 text-base font-light leading-7 text-stone sm:text-lg sm:leading-8">
                Light sculptures, architectural systems, collectible furniture and design objects.
              </p>
            </div>
            <figure className="w-full max-w-[420px] justify-self-center md:justify-self-end">
              <video
                className="block aspect-[9/16] w-full bg-obsidian"
                controls
                playsInline
                preload="metadata"
                poster="/video/interview-vertier-poster.jpg"
                aria-describedby="interview-caption"
              >
                <source src="/video/interview-vertier.mp4" type="video/mp4" />
                Your browser does not support this video.
              </video>
              <figcaption id="interview-caption" className="mt-4 flex justify-between gap-4 font-mono text-[10px] uppercase tracking-widest2 text-stone">
                <span>In conversation</span>
                <span>Vertier interview film</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="francesco-heading">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-panel sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/studio-portrait.jpg"
              alt={getImageDescription("/images/studio-portrait.jpg", "Francesco Cappuccio portrait")}
              fill
              sizes="(min-width: 1024px) 520px, (min-width: 640px) 90vw, calc(100vw - 40px)"
              className="object-cover object-[50%_14%] grayscale contrast-[0.96]"
            />
          </div>
          <div className="max-w-2xl border-t border-ivory/15 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">01 / The designer</p>
            <h2 id="francesco-heading" className="mt-7 font-body text-[clamp(2.8rem,5vw,5rem)] font-light leading-[0.98] tracking-[-0.04em] text-ivory">
              Francesco Cappuccio
            </h2>
            <p className="mt-10 max-w-[33ch] font-body text-[clamp(1.5rem,2.5vw,2.1rem)] font-light leading-[1.22] text-ivory">
              {studio.intro}
            </p>
            <Link href="/work" className="group mt-10 inline-flex items-center gap-4 border-b border-ivory/30 pb-2 font-mono text-[10px] uppercase tracking-widest2 text-ivory transition-colors hover:text-stone">
              Explore selected work <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-ivory/10 bg-surface" aria-labelledby="practice-heading">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="flex items-end justify-between gap-6 border-t border-ivory/15 pt-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">02 / The practice</p>
              <h2 id="practice-heading" className="studio-section-title mt-6">Light as material.</h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Since 1993</span>
          </div>
          <div className="mt-14 grid items-start gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <div className="grid max-w-[40rem] gap-7 text-base font-light leading-7 text-stone sm:text-lg sm:leading-8">
              {studio.paragraphs.slice(0, 4).map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "text-ivory" : undefined}>
                  {renderEmphasis(paragraph)}
                </p>
              ))}
            </div>
            <figure className="relative aspect-[3/4] w-full max-w-[34rem] overflow-hidden bg-panel lg:justify-self-end">
              <Image
                src="/images/francesco-at-work.jpg"
                alt={getImageDescription("/images/francesco-at-work.jpg", "Francesco Cappuccio examining an object")}
                fill
                sizes="(min-width: 1024px) 510px, (min-width: 640px) 80vw, calc(100vw - 40px)"
                className="object-cover object-[50%_48%] grayscale contrast-[0.96]"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="context-heading">
        <div className="grid gap-10 border-t border-ivory/15 pt-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">03 / Place &amp; context</p>
            <h2 id="context-heading" className="studio-section-title mt-6 max-w-[12ch]">Shaped by place.</h2>
          </div>
          <div className="grid max-w-[40rem] gap-7 text-base font-light leading-7 text-stone sm:text-lg sm:leading-8">
            {studio.paragraphs.slice(4, 7).map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "text-ivory" : undefined}>
                {renderEmphasis(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ivory/10 bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-ivory/15 pt-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">04 / Recognition</p>
              <h2 className="studio-section-title mt-6">Major awards</h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-stone">35 international awards</span>
          </div>
          <div className="mt-12 grid border-t border-ivory/10 md:grid-cols-2 lg:grid-cols-4">
            {awards.map((award) => (
              <a key={award.title} href={award.href} target="_blank" rel="noreferrer" className="group border-b border-ivory/10 py-8 md:px-6 lg:border-r lg:last:border-r-0">
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
        </div>
      </section>
    </main>
  );
}
