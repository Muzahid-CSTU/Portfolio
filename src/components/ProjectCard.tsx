import Link from "next/link";
import type { Project } from "@/data/projects";
import SafeImage from "./SafeImage";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-1 hover:border-accent">
      <SafeImage
        src={project.image}
        alt={`${project.name} screenshot`}
        fallback="Project image"
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-bold text-white">{project.name}</h3>
        <p className="text-muted">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full bg-bg px-3 py-1 text-xs font-semibold text-accent"
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="mt-auto self-start rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-bg transition hover:opacity-90"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
