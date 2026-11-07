import Link from "next/link";
import { socialLinks, contact } from "@/data/social";
import { isUrl } from "@/lib/utils";
import SocialIcon from "./Icon";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-deep">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-10 px-6 py-12">
        <div className="max-w-xs">
          <div className="text-xl font-extrabold text-white">
            Muzahid<span className="text-accent">.</span>
          </div>
          <p className="mt-3 text-muted">
            Full stack web developer and competitive programmer from Chandpur.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-bold text-white">Quick Links</div>
          <Link href="/" className="text-muted hover:text-white">Home</Link>
          <Link href="/about" className="text-muted hover:text-white">About</Link>
          <Link href="/projects" className="text-muted hover:text-white">Projects</Link>
          <Link href="/contact" className="text-muted hover:text-white">Contact</Link>
        </div>

        <div className="flex flex-col gap-3">
          <div className="font-bold text-white">Follow</div>
          <div className="flex gap-3">
            {socialLinks
              .filter((s) => isUrl(s.url))
              .map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
                >
                  <SocialIcon name={s.icon} className="text-lg" />
                </a>
              ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-8 text-sm text-muted">
        © 2026 {contact.name}. All rights reserved.
      </div>
    </footer>
  );
}
