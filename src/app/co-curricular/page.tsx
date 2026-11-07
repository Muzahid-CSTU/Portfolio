import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SafeImage from "@/components/SafeImage";
import CoCurricularTabs from "@/components/CoCurricularTabs";
import { gallery } from "@/data/cocurricular";

export const metadata: Metadata = { title: "Co-curricular" };

export default function CoCurricularPage() {
  const photos = gallery.filter((g) => !g.src.includes("TODO"));

  return (
    <>
      <PageHeader
        title="Co-curricular"
        subtitle="Ambassadorships, mentoring, events and leadership roles beyond coding."
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <CoCurricularTabs />
      </section>

      {photos.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <SectionTitle title="Gallery" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {photos.map((g) => (
              <SafeImage
                key={g.src}
                src={g.src}
                alt={g.alt}
                className="h-56 w-full rounded-xl border border-line object-cover"
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
