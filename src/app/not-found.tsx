import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-6 py-28 text-center">
      <div className="text-7xl font-extrabold text-accent">404</div>
      <h1 className="text-3xl font-bold text-white">Page not found</h1>
      <p className="text-muted">The page you are looking for does not exist or has moved.</p>
      <Link
        href="/"
        className="mt-2 rounded-xl bg-accent px-7 py-3 font-bold text-bg hover:opacity-90"
      >
        Back to Home
      </Link>
    </div>
  );
}
