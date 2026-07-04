import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/content";
import { absoluteUrl, imageUrl, siteName } from "@/lib/seo";

const categories = [
  { label: "Lighting", value: "lighting" },
  { label: "Furniture", value: "furniture" },
  { label: "Featured", value: "featured" }
];

export const metadata: Metadata = {
  title: `Work | ${siteName}`,
  description:
    "Explore Cappuccio Design Studio projects across sculptural lighting, furniture, product design, and spatial works.",
  alternates: {
    canonical: absoluteUrl("/work")
  },
  openGraph: {
    title: `Work | ${siteName}`,
    description:
      "Explore Cappuccio Design Studio projects across sculptural lighting, furniture, product design, and spatial works.",
    url: absoluteUrl("/work"),
    images: [
      {
        url: imageUrl("/images/project1.jpg"),
        width: 1200,
        height: 900,
        alt: "Cappuccio Design Studio work"
      }
    ]
  }
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
      <header className="border-t border-ivory/10 pt-10">
        <div className="flex items-start justify-between gap-8">
          <h1 className="font-body text-3xl font-light lowercase leading-none text-ivory sm:text-4xl">work</h1>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone">
            {String(projects.length).padStart(2, "0")} works
          </p>
        </div>
      </header>

      <nav className="mt-8 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[10px] uppercase tracking-[0.24em] text-stone">
        {categories.map((category) => (
          <a key={category.value} href={`#${category.value}`} className="transition hover:text-ivory">
            {category.label}
          </a>
        ))}
      </nav>

      <div className="mt-20 grid gap-y-24">
        {categories.map((category) => {
          const categoryProjects = projects.filter((project) => project.category === category.value);
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
