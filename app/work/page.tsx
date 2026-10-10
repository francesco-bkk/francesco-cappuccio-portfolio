import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects, projects } from "@/lib/content";
import { absoluteUrl, imageUrl, siteName } from "@/lib/seo";

import { getImageDescription, imagePageStructuredData, serializeStructuredData } from "@/lib/image-seo";

const workDescription =
  "Explore Francesco Cappuccio's lighting design and light sculptures, alongside selected furniture and art collaborations.";

const categories = [
  { label: "Lighting", value: "lighting" },
  { label: "Furniture", value: "furniture" },
  { label: "Curated Art", value: "curated-art" },
  { label: "Featured", value: "featured" }
];

const lightingProjectOrder = [
  "mandarin-oriental-riverside-bangkok",
  "damansara",
  "wai",
  "falcons",
  "akuna-lighting-experience",
  "harvest",
  "quadra",
  "amsterdam"
];

export const metadata: Metadata = {
  title: "Selected Work",
  description: workDescription,
  alternates: {
    canonical: absoluteUrl("/work")
  },
  openGraph: {
    title: `Work | ${siteName}`,
    description: workDescription,
    url: absoluteUrl("/work"),
    images: [
      {
        url: imageUrl("/images/bird-silk-thread-1.png"),
        width: 1083,
        height: 1655,
        alt: "The Bird and the Silk Thread light sculpture by Francesco Cappuccio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `Selected Work | ${siteName}`,
    description: workDescription,
    images: [imageUrl("/images/bird-silk-thread-1.png")]
  }
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(imagePageStructuredData("/work/", "Selected work by Francesco Cappuccio", ["/images/bird-silk-thread-1.png", ...projects.flatMap(project => [project.image, ...(project.hoverImage ? [project.hoverImage] : [])])])) }} />
      <header className="border-t border-ivory/10 pt-10">
        <div className="flex items-start justify-between gap-8">
          <h1 className="studio-page-title lowercase">work</h1>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone">
            {String(projects.length).padStart(2, "0")} works
          </p>
        </div>
        <p className="mt-6 max-w-xl text-sm leading-7 text-stone">
          Lighting design and light sculpture, alongside selected furniture and art collaborations.
        </p>
      </header>

      <Link href="/work/the-bird-and-the-silk-thread" className="work-feature group mt-12 grid gap-8 border-t border-ivory/15 pt-6 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-8 md:grid-cols-[0.85fr_1.15fr] md:items-center lg:gap-16" aria-label="Explore The Bird and the Silk Thread light sculpture">
        <div className="relative aspect-[1083/1655] w-full max-w-[440px] overflow-hidden bg-panel">
          <Image src="/images/bird-silk-thread-1.png" alt={getImageDescription("/images/bird-silk-thread-1.png", "The Bird and the Silk Thread")} fill priority sizes="(min-width: 640px) 440px, calc(100vw - 40px)" className="work-feature-image object-contain" />
        </div>
        <div className="pb-2">
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Featured / Light sculpture</p>
          <h2 className="mt-5 font-display text-5xl font-light leading-none text-ivory sm:text-6xl lg:text-7xl">The Bird and the <em>Silk Thread.</em></h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-stone">A luminous tribute to the Silk Road. A crystalline bird carries a flowing silk thread, bringing light, material and movement together in a sculptural installation.</p>
          <span className="mt-7 inline-flex items-center gap-2 border-b border-ivory pb-2 font-mono text-[10px] uppercase tracking-widest2 text-ivory">Explore the light sculpture <span className="work-feature-arrow inline-block" aria-hidden="true">↗</span></span>
        </div>
      </Link>

      <nav className="mt-8 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[10px] uppercase tracking-[0.24em] text-stone">
        {categories.map((category) => (
          <a key={category.value} href={`#${category.value}`} className="transition hover:text-ivory">
            {category.label}
          </a>
        ))}
      </nav>

      <div className="mt-20 grid gap-y-24">
        {categories.map((category) => {
          let categoryProjects =
            category.value === "featured"
              ? featuredProjects
              : projects.filter(
                  (project) =>
                    project.category === category.value ||
                    project.additionalCategories?.some((value) => value === category.value)
                );
          if (category.value === "lighting") {
            categoryProjects = [...categoryProjects].sort((a, b) => {
              const aIndex = lightingProjectOrder.indexOf(a.slug);
              const bIndex = lightingProjectOrder.indexOf(b.slug);
              const aRank = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex;
              const bRank = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex;

              return aRank - bRank;
            });
          }
          return (
            <section key={category.value} id={category.value}>
              <div className="mb-8 flex items-center justify-between border-t border-ivory/10 pt-5">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone">
                  {category.label}
                </h2>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone">
                  {String(categoryProjects.length).padStart(2, "0")} projects
                </span>
              </div>
              <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {categoryProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
