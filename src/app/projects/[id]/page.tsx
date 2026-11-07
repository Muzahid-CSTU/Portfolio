import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { getProject, projects } from "@/data/projects";
import { isUrl } from "@/lib/utils";
import SafeImage from "@/components/SafeImage";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  return { title: project?.name ?? "Project" };
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-2xl border border-line bg-surface p-6">
      <h2 className="mb-4 text-xl font-bold text-white">{title}</h2>
      <ul className="flex list-disc flex-col gap-2 pl-5 text-muted marker:text-accent">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProjectDetails({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link href="/projects" className="text-sm font-semibold text-accent hover:underline">
        ← Back to projects
      </Link>

      <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">{project.name}</h1>
      <div className="mt-4 h-1 w-14 rounded bg-accent" />

      <SafeImage
        src={project.image}
        alt={`${project.name} screenshot`}
        fallback="Project image"
        className="mt-8 h-64 w-full rounded-2xl border border-line object-cover md:h-96"
      />

      <div className="mt-6 flex flex-wrap gap-4">
        {isUrl(project.liveLink) && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-bg hover:opacity-90"
          >
            <FaExternalLinkAlt aria-hidden="true" /> Live Project
          </a>
        )}
        {isUrl(project.githubLink) && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-accent px-6 py-2.5 font-bold text-accent hover:bg-accent hover:text-bg"
          >
            <FaGithub aria-hidden="true" /> GitHub (Client)
          </a>
        )}
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <section className="rounded-2xl border border-line bg-surface p-6">
          <h2 className="mb-3 text-xl font-bold text-white">Overview</h2>
          <p className="leading-relaxed text-muted">{project.description}</p>
        </section>

        <section className="rounded-2xl border border-line bg-surface p-6">
          <h2 className="mb-4 text-xl font-bold text-white">Main Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="rounded-full bg-bg px-4 py-1.5 text-sm font-semibold text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <List title="Key Features" items={project.features} />
        <List title="Challenges Faced" items={project.challenges} />
        <List title="Future Plans & Improvements" items={project.futurePlans} />
      </div>
    </div>
  );
}
