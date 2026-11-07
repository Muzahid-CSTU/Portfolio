export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="border-b border-line bg-deep">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-4xl font-extrabold text-white md:text-5xl">{title}</h1>
        <div className="mt-4 h-1 w-14 rounded bg-accent" />
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>}
      </div>
    </div>
  );
}
