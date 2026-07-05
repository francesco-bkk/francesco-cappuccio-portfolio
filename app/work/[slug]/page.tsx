import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ExpandableImage } from "@/components/ExpandableImage";
import { getProject, projects } from "@/lib/content";
import { absoluteUrl, imageUrl, siteName } from "@/lib/seo";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return {
      title: "Project"
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: absoluteUrl(`/work/${project.slug}`)
    },
    openGraph: {
      type: "article",
      title: `${project.title} | ${siteName}`,
      description: project.summary,
      url: absoluteUrl(`/work/${project.slug}`),
      images: [
        {
          url: imageUrl(project.image),
          width: 1200,
          height: 1500,
          alt: project.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteName}`,
      description: project.summary,
      images: [imageUrl(project.image)]
    }
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/work/${project.slug}`),
    image: imageUrl(project.image),
    creator: {
      "@type": "Person",
      name: "Francesco Cappuccio"
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: absoluteUrl("/")
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-stone transition-colors duration-300 hover:text-ivory"
        >
          <ArrowLeft aria-hidden="true" size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="animate-fade-up lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">{project.eyebrow}</p>
            <h1 className="mt-6 font-body text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">{project.title}</h1>
            <span className="mt-8 block h-px w-14 bg-ivory/15" />
            <div className="mt-8 grid gap-7 text-base leading-7 text-stone">
              {project.details ? (
                <>
                  {project.details.meta?.length ? (
                    <dl className="grid gap-4 border-b border-ivory/10 pb-7 sm:grid-cols-2">
                      {project.details.meta.map((item) => (
                        <div key={item.label}>
                          <dt className="font-mono text-[10px] uppercase tracking-widest2 text-stone">{item.label}</dt>
                          <dd className="mt-2 text-ivory">{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                  {project.details.awardLogos?.length ? (
                    <div className="grid gap-4 border-b border-ivory/10 pb-7 pt-1">
                      <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Awards</p>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {project.details.awardLogos.map((award) => {
                          const logo = (
                            <div className="relative h-24 w-full">
                              <Image
                                src={award.src}
                                alt={award.title}
                                fill
                                sizes="280px"
                                className="object-contain object-left"
                              />
                            </div>
                          );

                          return award.href ? (
                            <a
                              key={award.src}
                              href={award.href}
                              target="_blank"
                              rel="noreferrer"
                              className="transition-opacity hover:opacity-80"
                            >
                              {logo}
                            </a>
                          ) : (
                            <div key={award.src}>{logo}</div>
                          );
                        })}
                      </div>
                    </div>
                  ) : project.details.awardLogo ? (
                    <div className="grid gap-4 border-b border-ivory/10 pb-7 pt-1">
                      <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Award logo</p>
                      <div className="relative h-24 w-full max-w-[280px]">
                        <Image
                          src={project.details.awardLogo}
                          alt={`${project.title} award logo`}
                          fill
                          sizes="280px"
                          className="object-contain object-left"
                        />
                      </div>
                    </div>
                  ) : null}
                  {project.details.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {project.details.features?.length ? (
                    <div className="grid gap-6 border-t border-ivory/10 pt-7">
                      <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">Featuring</p>
                      {project.details.features.map((feature) => (
                        <div key={feature.title}>
                          <h2 className="font-body text-xl font-light leading-tight text-ivory">{feature.title}</h2>
                          <p className="mt-3">{feature.body}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {project.details.brand ? (
                    <p className="border-t border-ivory/10 pt-6 font-mono text-xs uppercase tracking-widest text-stone">
                      Brand:{" "}
                      <a
                        href={project.details.brandHref ?? "https://www.lightsculptures.co.th/"}
                        target="_blank"
                        rel="noreferrer"
                        className="text-ivory underline decoration-ivory/25 underline-offset-4 transition-colors hover:text-stone"
                      >
                        {project.details.brand}
                      </a>
                    </p>
                  ) : null}
                  {project.details.video ? (
                    <div className="grid gap-4 border-t border-ivory/10 pt-7">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="font-mono text-[10px] uppercase tracking-widest2 text-stone">
                          {project.details.video.label}
                        </p>
                        <a
                          href={project.details.video.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-[10px] uppercase tracking-[0.18em] text-ivory underline decoration-ivory/25 underline-offset-4 transition-colors hover:text-stone"
                        >
                          Watch on YouTube
                        </a>
                      </div>
                      <div className="relative aspect-video overflow-hidden bg-panel">
                        <iframe
                          src={project.details.video.embedUrl}
                          title={project.details.video.title}
                          className="absolute inset-0 h-full w-full grayscale contrast-[0.92]"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ) : null}
                  {project.details.links?.length ? (
                    <div className="grid gap-4 border-t border-ivory/10 pt-7">
                      {project.details.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex flex-wrap items-center gap-x-3 gap-y-2 text-sm leading-6 text-stone transition-colors hover:text-ivory"
                        >
                          <span className="font-mono text-[10px] uppercase tracking-widest2 text-stone">{link.label}</span>
                          <span className="text-ivory underline decoration-ivory/25 underline-offset-4 transition-colors group-hover:decoration-ivory">
                            {link.text}
                          </span>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </>
              ) : (
                <p>{project.summary}</p>
              )}
            </div>
          </div>

          <div className="animate-fade-up delay-2 grid gap-6">
            <ExpandableImage
              src={project.image}
              alt={project.title}
              priority
              sizes="(min-width: 1024px) 55vw, calc(100vw - 40px)"
              className="aspect-[4/5]"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {(project.detailImages ?? [`/images/${project.slug}-detail-1.jpg`, `/images/${project.slug}-detail-2.jpg`]).map(
                (image, index) => (
                  <ExpandableImage key={image} src={image} alt={`${project.title} detail ${index + 1}`} />
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
