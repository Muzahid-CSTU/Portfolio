import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SafeImage from "@/components/SafeImage";
import { cpStats, cpAchievements, cpProfiles } from "@/data/cp";
import { isUrl } from "@/lib/utils";

export const metadata: Metadata = { title: "Competitive Programming" };

export default function CpPage() {
  return (
    <>
      <PageHeader
        title="Competitive Programming"
        subtitle="Contests, rankings and the problem-solving habits behind my code."
      />

      <section className="border-b border-line bg-surface/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 text-center md:grid-cols-4">
          {cpStats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-accent md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-16">
        <SectionTitle title="Achievements" />
        <div className="grid gap-6 md:grid-cols-2">
          {cpAchievements.map((a) => (
            <article
              key={a.title}
              className="overflow-hidden rounded-2xl border border-line bg-surface"
            >
              {a.image && (
                <SafeImage src={a.image} alt={a.title} className="h-44 w-full object-cover" />
              )}
              <div className="flex flex-col gap-2 p-6">
                <div className="text-xs font-bold uppercase tracking-wide text-accent">
                  {a.event} · {a.year}
                </div>
                <h3 className="text-xl font-bold text-white">{a.title}</h3>
                <div className="font-semibold text-white">{a.result}</div>
                <p className="text-muted">{a.description}</p>
                {isUrl(a.link) && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-sm font-semibold text-accent hover:underline"
                  >
                    View post →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle title="Profiles" />
        <div className="flex flex-wrap gap-4">
          {cpProfiles.map((p) =>
            isUrl(p.url) ? (
              <a
                key={p.platform}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-line bg-surface px-6 py-4 transition hover:border-accent"
              >
                <div className="text-sm text-muted">{p.platform}</div>
                <div className="font-bold text-white">{p.handle}</div>
              </a>
            ) : null
          )}
        </div>
      </section>
    </>
  );
}
