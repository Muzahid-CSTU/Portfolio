import Link from "next/link";

export default function SectionTitle({
  title,
  href,
  linkLabel,
}: {
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
        <div className="mt-3 h-1 w-14 rounded bg-accent" />
      </div>
      {href && (
        <Link href={href} className="font-semibold text-accent hover:underline">
          {linkLabel ?? "View all"} →
        </Link>
      )}
    </div>
  );
}
