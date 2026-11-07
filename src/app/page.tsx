import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { site, socialLinks, contact } from "@/data/social";
import { projects } from "@/data/projects";
import { cpStats, cpAchievements } from "@/data/cp";
import { coCurricular } from "@/data/cocurricular";
import { isUrl } from "@/lib/utils";
import SocialIcon from "@/components/Icon";
import SafeImage from "@/components/SafeImage";
import Typewriter from "@/components/Typewriter";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const cpHighlights = [
    cpAchievements[0],
    cpAchievements[2],
    cpAchievements[3],
  ].filter(Boolean);
  const eventHighlights =
    coCurricular.find((t) => t.id === "events")?.items.slice(0, 3) ?? [];

  return (
    <>
      {/* HERO */}
      <section className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-12 px-6 py-16 md:py-24">
        <div className="animate-fade-up flex flex-1 basis-[420px] flex-col gap-5">
          <p className="text-lg text-muted">Hello, I&apos;m</p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Kaji Muzahidul <span className="text-accent">Islam</span>
          </h1>
          <div className="min-h-9 text-2xl font-semibold text-white sm:text-3xl">
            <Typewriter words={site.typedRoles} />
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted">{site.intro}</p>

          <div className="mt-2 flex flex-wrap gap-4">
            <a
              href={site.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 font-bold text-bg transition hover:opacity-90"
            >
              <FaDownload aria-hidden="true" /> Download Resume
            </a>
            <Link
              href="/projects"
              className="rounded-xl border-2 border-accent px-7 py-3 font-bold text-accent transition hover:bg-accent hover:text-bg"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            {socialLinks
              .filter((s) => isUrl(s.url))
              .map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-muted transition hover:border-accent hover:text-white"
                >
                  <SocialIcon name={s.icon} /> {s.name}
                </a>
              ))}
          </div>
        </div>

        <div className="relative mx-auto flex flex-none justify-center">
          <SafeImage
            src={site.photo}
            alt="Kaji Muzahidul Islam"
            fallback="Add your photo at public/photo.jpg"
            className="animate-float h-72 w-72 rounded-full border-4 border-accent object-cover sm:h-80 sm:w-80"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-line bg-surface/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 text-center md:grid-cols-4">
          {cpStats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-accent md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <SectionTitle title="Featured Projects" href="/projects" linkLabel="View all projects" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* CP HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <SectionTitle title="Competitive Programming" href="/cp" linkLabel="View all achievements" />
        <div className="grid gap-6 md:grid-cols-3">
          {cpHighlights.map((a) => (
            <div key={a.title} className="rounded-2xl border border-line bg-surface p-6">
              <div className="text-xs font-bold uppercase tracking-wide text-accent">{a.title}</div>
              <div className="mt-2 text-xl font-bold text-white">{a.result}</div>
              <p className="mt-2 text-muted">{a.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CO-CURRICULAR HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <SectionTitle title="Co-curricular" href="/co-curricular" linkLabel="View all activities" />
        <div className="grid gap-6 md:grid-cols-3">
          {eventHighlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-surface p-6">
              <div className="text-xs font-bold uppercase tracking-wide text-accent">
                {item.organization}
              </div>
              <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-center justify-between gap-10 rounded-3xl border border-line bg-surface p-8 md:p-12">
          <div className="flex max-w-md flex-col gap-4">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">Get In Touch</h2>
            <div className="h-1 w-14 rounded bg-accent" />
            <p className="text-lg text-muted">
              Have a project, a collaboration or an event in mind? Send me a message and I
              will get back to you.
            </p>
            <Link
              href="/contact"
              className="self-start rounded-xl bg-accent px-7 py-3.5 font-bold text-bg transition hover:opacity-90"
            >
              Contact Me →
            </Link>
          </div>
          <div className="flex min-w-64 flex-1 basis-72 flex-col gap-3">
            {[
              ["Email", contact.email],
              ["Phone", contact.phone],
              ["Location", contact.location],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-line bg-bg px-5 py-4">
                <div className="text-xs font-bold uppercase text-accent">{label}</div>
                <div className="mt-1 break-all text-white">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
