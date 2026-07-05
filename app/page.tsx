import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { ParallaxImage } from "@/components/ParallaxImage";
import { ProjectCard } from "@/components/ProjectCard";
import { awards, featuredProjects, studio } from "@/lib/content";
import { absoluteUrl, imageUrl, siteDescription, siteName } from "@/lib/seo";

const landingProject = {
  title: "The Pavilion Crown",
  href: "/work/damansara",
  image: "/images/pavilion-crown-1.png"
};

const homeShareImage = "/images/og-home.jpg";

export const metadata: Metadata = {
  title: `${siteName} | Lighting, Furniture & Product Design`,
  description: siteDescription,
  alternates: {
    canonical: absoluteUrl("/")
  },
  openGraph: {
    title: `${siteName} | Lighting, Furniture & Product Design`,
    description: siteDescription,
    url: absoluteUrl("/"),
    images: [
      {
        url: imageUrl(homeShareImage),
        width: 1200,
        height: 630,
        alt: landingProject.title
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Lighting, Furniture & Product Design`,
    description: siteDescription,
    images: [imageUrl(homeShareImage)]
  }
};

export default function Home() {
  return (
    <main>
      <section className="border-b border-ivory/10 bg-obsidian">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 lg:pb-20">
          <Link
            href={landingProject.href}
            className="group relative block aspect-[4/3] overflow-hidden bg-panel sm:aspect-[16/7] sm:min-h-[300px]"
            aria-label={`Open ${landingProject.title} project`}
          >
            <ParallaxImage
              src={landingProject.image}
              alt={landingProject.title}
              priority
              sizes="(min-width: 1280px) 1184px, calc(100vw - 40px)"
              className="absolute inset-0"
              imageClassName="grayscale contrast-[0.94] transition duration-700 group-hover:grayscale-[70%]"
              strength={18}
            />
          </Link>

          <div className="mt-10 grid gap-6 border-b border-ivory/10 pb-10 sm:mt-12 lg:mt-14 md:grid-cols-[260px_1fr_auto] md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Featured work</p>
              <h1 className="mt-2 font-body text-3xl font-light leading-none text-ivory sm:text-4xl">
                {landingProject.title}
              </h1>
            </div>
            <span className="hidden h-px bg-ivory/10 md:block" />
            <Link
              href="/work"
              className="group inline-flex w-fit items-center gap-4 border-b border-ivory pb-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:text-stone"
            >
              See all work
              <ArrowRight
                aria-hidden="true"
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-ivory/10 bg-obsidian">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,520px)_minmax(460px,1fr)] lg:gap-20">
            <div className="max-w-[520px]">
              <p className="font-body text-[clamp(1.9rem,9vw,2.6rem)] font-light leading-[1.12] text-ivory lg:text-[2.9rem]">
                {studio.quote}
              </p>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-widest2 text-stone">
                {studio.quoteBy}
              </p>
            </div>
            <Link
              href="/work/scacco-matto"
              className="group block"
              aria-label="Open Scacco Matto project"
            >
              <div className="relative aspect-[1.12/1] overflow-hidden bg-transparent">
                <Image
                  src="/images/project3.jpg"
                  alt="Scacco Matto portable lamp"
                  fill
                  sizes="(min-width: 1024px) 620px, calc(100vw - 40px)"
                  className="scale-[1.18] object-contain grayscale contrast-[0.96] transition duration-700 group-hover:scale-[1.2] group-hover:grayscale-[70%]"
                />
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-ivory/10 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Essence object</p>
                <p className="font-body text-lg font-light text-ivory">Scacco Matto</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-ivory/10 bg-obsidian">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="flex items-center justify-between gap-8 border-t border-ivory/10 pt-8">
            <h2 className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Major awards</h2>
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-stone">
              {String(awards.length).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-10 grid border-t border-ivory/10 md:grid-cols-4">
            {awards.map((award) => (
              <a
                key={award.title}
                href={award.href}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[104px_minmax(0,1fr)] items-center gap-6 border-b border-ivory/10 py-7 transition-colors duration-300 hover:bg-surface md:grid-cols-1 md:items-stretch md:gap-0 md:border-r md:px-6 md:py-8 md:last:border-r-0"
              >
                <div className="relative h-16 w-24 mix-blend-multiply grayscale opacity-75 transition duration-300 group-hover:opacity-100 md:h-20 md:w-full md:max-w-[230px]">
                  <Image
                    src={award.logo}
                    alt={`${award.title} logo`}
                    fill
                    sizes="(min-width: 768px) 230px, 96px"
                    className="object-contain object-left"
                  />
                </div>
                <div className="self-center md:mt-10 md:self-end">
                  <h3 className="font-body text-lg font-light leading-tight text-ivory">{award.title}</h3>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-widest2 text-stone">{award.work}</p>
                  <p className="mt-1 text-sm leading-6 text-stone">{award.year}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="flex items-center justify-between gap-8 border-t border-ivory/10 pt-8">
            <h2 className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Selected work</h2>
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-stone">
              {String(featuredProjects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} priority={index < 2} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-ivory/10 bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:gap-14 sm:px-8 sm:py-20 lg:grid-cols-[0.86fr_1fr] lg:items-start lg:gap-24 lg:py-28">
          <div className="relative aspect-square w-full self-start overflow-hidden bg-panel lg:aspect-[4/5]">
            <Image
              src="/images/studio-portrait.jpg"
              alt="Francesco Cappuccio portrait"
              fill
              sizes="(min-width: 1024px) 45vw, calc(100vw - 40px)"
              className="scale-[1.12] object-cover object-[50%_14%] grayscale contrast-[0.96] transition-all duration-700 hover:grayscale-[70%]"
            />
          </div>
          <div className="max-w-none">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">About the studio</p>
            <p className="mt-7 max-w-[640px] font-body text-[1.72rem] font-light leading-[1.18] text-ivory sm:mt-8 sm:text-[2rem]">
              {studio.intro}
            </p>
            <div className="mt-9 grid max-w-[560px] gap-6 text-[0.95rem] leading-7 text-stone sm:mt-12 sm:gap-7 sm:text-sm">
              {studio.paragraphs.slice(0, 3).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 grid gap-6 border-t border-ivory/10 pt-10 sm:mt-14 sm:grid-cols-[1.35fr_1fr_1.08fr_1fr] sm:gap-8">
              {awards.map((award) => (
                <a
                  key={award.title}
                  href={award.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <p className="font-mono text-[9px] uppercase tracking-widest2 text-stone transition-colors group-hover:text-ivory">
                    {award.title === "Archiproducts Design Awards"
                      ? "Archiproducts Awards"
                      : award.title === "Red Dot Design Award"
                        ? "Red Dot Award"
                        : award.title === "European Product Design Award"
                          ? "European Design Award"
                          : award.title === "LIT Lighting Design Awards"
                            ? "LIT Design Awards"
                            : award.title}
                  </p>
                  <p className="mt-3 text-xs leading-5 text-stone">
                    {award.title === "Archiproducts Design Awards" ? (
                      <>
                        Winner 2024
                        <br />
                        Longlisted 2025
                      </>
                    ) : (
                      award.year
                    )}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-ivory/10 bg-obsidian text-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.58fr_1.25fr] lg:items-start lg:gap-12 lg:py-32">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Get in touch</p>
            <h2 className="mt-6 font-body text-4xl font-light leading-none text-ivory sm:text-5xl">Contact</h2>
            <p className="mt-10 max-w-xs text-sm leading-7 text-stone lg:mt-14">{studio.address}</p>
          </div>
          <form className="grid gap-7 sm:gap-9 lg:pt-[6.25rem]">
            <div className="grid gap-7 sm:grid-cols-2 sm:gap-9">
              <input
                className="h-14 w-full rounded-none border-b-2 border-ivory/55 bg-transparent px-1 text-base text-ivory placeholder:text-stone focus:border-ivory focus:outline-none sm:h-12 sm:text-sm"
                placeholder="First name"
              />
              <input
                className="h-14 w-full rounded-none border-b-2 border-ivory/55 bg-transparent px-1 text-base text-ivory placeholder:text-stone focus:border-ivory focus:outline-none sm:h-12 sm:text-sm"
                placeholder="Last name"
              />
            </div>
            <div className="grid gap-7 sm:grid-cols-2 sm:gap-9">
              <input
                className="h-14 w-full rounded-none border-b-2 border-ivory/55 bg-transparent px-1 text-base text-ivory placeholder:text-stone focus:border-ivory focus:outline-none sm:h-12 sm:text-sm"
                placeholder="Email*"
                type="email"
              />
              <input
                className="h-14 w-full rounded-none border-b-2 border-ivory/55 bg-transparent px-1 text-base text-ivory placeholder:text-stone focus:border-ivory focus:outline-none sm:h-12 sm:text-sm"
                placeholder="Phone"
              />
            </div>
            <textarea
              className="min-h-36 w-full rounded-none border-b-2 border-ivory/55 bg-transparent px-1 py-3 text-base text-ivory placeholder:text-stone focus:border-ivory focus:outline-none sm:min-h-32 sm:text-sm"
              placeholder="Message*"
            />
            <button
              className="w-full justify-self-stretch border-2 border-ivory bg-ivory px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-obsidian transition-colors duration-300 hover:bg-transparent hover:text-ivory sm:w-auto sm:justify-self-start sm:px-10"
              type="button"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
