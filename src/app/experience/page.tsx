import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { experience } from "@/data/experience";
import { isUrl } from "@/lib/utils";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageHeader title="Experience" subtitle="Where I have worked and what I contributed." />
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16">
        {experience.map((e) => {
          const videos = e.videos?.filter((v) => isUrl(v.url)) ?? [];
          return (
            <article
              key={e.role + e.company}
              className="rounded-2xl border border-line bg-surface p-6 md:p-8"
            >
              <div className="text-sm font-bold uppercase tracking-wide text-accent">{e.period}</div>
              <h2 className="mt-1 text-2xl font-bold text-white">{e.role}</h2>
              <div className="text-lg text-muted">{e.company}</div>

              <ul className="mt-5 flex list-disc flex-col gap-2 pl-5 text-muted marker:text-accent">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              {videos.length > 0 && (
                <div className="mt-6">
                  <h3 className="mb-3 font-bold text-white">Content I created</h3>
                  <div className="flex flex-wrap gap-3">
                    {videos.map((v) => (
                      <a
                        key={v.url}
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-line bg-bg px-4 py-2 text-sm font-medium text-accent transition hover:border-accent"
                      >
                        ▶ {v.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </>
  );
}
