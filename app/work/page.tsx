import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects, projects } from "@/lib/content";
import { absoluteUrl, imageUrl, siteName, socialImage } from "@/lib/seo";

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
  "akuna-lighting-experience",
  "harvest",
  "quadra",
  "amsterdam"
];

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Explore Cappuccio Design Studio projects across sculptural lighting, furniture, curated art, product design, and spatial works.",
  alternates: {
    canonical: absoluteUrl("/work")
  },
  openGraph: {
    title: `Work | ${siteName}`,
    description:
      "Explore Cappuccio Design Studio projects across sculptural lighting, furniture, curated art, product design, and spatial works.",
    url: absoluteUrl("/work"),
    images: [
      {
        url: imageUrl("/images/project1.jpg"),
        width: 1200,
        height: 900,
        alt: "Cappuccio Design Studio work"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `Selected Work | ${siteName}`,
    description:
      "Explore Cappuccio Design Studio projects across sculptural lighting, furniture, curated art, product design, and spatial works.",
    images: [imageUrl(socialImage)]
  }
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
      <header className="border-t border-ivory/10 pt-10">
        <div className="flex items-start justify-between gap-8">
          <h1 className="studio-page-title lowercase">work</h1>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone">
            {String(projects.length).padStart(2, "0")} works
          </p>
        </div>
      </header>

      <Link href="/work/vertier-collection" className="group mt-12 grid gap-6 border-t border-ivory/15 pt-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12" aria-label="Explore the Vertier furniture collection">
        <div className="relative aspect-[16/10] overflow-hidden bg-panel">
          <Image src="/images/vertier-collection-room.jpg" alt="Vertier furniture collection" fill sizes="(min-width: 1024px) 680px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
        </div>
        <div className="pb-2">
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Collection / Vertier</p>
          <h2 className="mt-5 font-display text-5xl font-light leading-none text-ivory sm:text-7xl">Form in <em>tension.</em></h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-stone">MUAY, NEXUM and HINGE by Francesco Cappuccio for Vertier.</p>
          <span className="mt-7 inline-block border-b border-ivory pb-2 font-mono text-[10px] uppercase tracking-widest2 text-ivory">View collection ↗</span>
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
