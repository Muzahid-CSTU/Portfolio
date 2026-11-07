import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SafeImage from "@/components/SafeImage";
import { about } from "@/data/about";
import { skillCategories } from "@/data/skills";
import { education } from "@/data/education";
import { site } from "@/data/social";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Me" subtitle={about.headline} />

      <section className="mx-auto flex max-w-6xl flex-wrap items-start gap-12 px-6 pt-16">
        <SafeImage
          src={site.photo}
          alt="Kaji Muzahidul Islam"
          fallback="Photo"
          className="h-72 w-72 flex-none rounded-2xl border border-line object-cover"
        />
        <div className="flex min-w-72 flex-1 basis-96 flex-col gap-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-muted">{p}</p>
          ))}
          <div className="mt-2 flex flex-wrap gap-2">
            {about.interests.map((i) => (
              <span
                key={i}
                className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium text-white"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-20">
        <SectionTitle title="Skills" />
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="mb-4 text-lg font-bold text-accent">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="rounded-lg border border-line bg-bg px-3 py-1.5 text-sm font-medium text-white"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle title="Education" />
        <ol className="relative ml-3 border-l-2 border-line">
          {education.map((e) => (
            <li key={e.degree} className="mb-10 ml-8 last:mb-0">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-4 border-bg bg-accent" />
              <div className="text-sm font-bold uppercase tracking-wide text-accent">{e.period}</div>
              <h3 className="mt-1 text-xl font-bold text-white">{e.degree}</h3>
              <div className="text-muted">{e.institution}</div>
              {e.status && <div className="text-muted">{e.status}</div>}
              {e.details?.map((d) => (
                <div key={d} className="text-muted">{d}</div>
              ))}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
