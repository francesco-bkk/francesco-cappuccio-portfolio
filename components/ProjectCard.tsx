import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  spanClassName?: string;
};

export function ProjectCard({ project, priority = false, spanClassName }: ProjectCardProps) {
  const imageClassName = spanClassName ? "aspect-[4/5] lg:h-full lg:min-h-[280px]" : "aspect-[4/5]";

  return (
    <Link href={`/work/${project.slug}`} className={`group block ${spanClassName ?? ""}`}>
      <article className="grid gap-4">
        <div className={`relative overflow-hidden bg-panel ${imageClassName}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale contrast-[0.96] transition duration-500 ease-out group-hover:grayscale-[65%] group-hover:opacity-90"
          />
        </div>

        <div className="grid gap-1.5">
          <h3 className="font-body text-base font-light leading-snug text-ivory">{project.title}</h3>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-stone">
            {project.eyebrow}
          </p>
        </div>
      </article>
    </Link>
  );
}
