import type { Metadata } from "next";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import SocialIcon from "@/components/Icon";
import { contact, socialLinks } from "@/data/social";
import { isUrl } from "@/lib/utils";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const cards = [
    { icon: FaEnvelope, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: FaPhone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: `https://wa.me/${contact.whatsapp}`,
    },
    { icon: FaMapMarkerAlt, label: "Location", value: contact.location },
  ];

  return (
    <>
      <PageHeader
        title="Let's Work Together"
        subtitle="Have a project, collaboration or event in mind? Reach out directly or send a message."
      />

      <section className="mx-auto flex max-w-6xl flex-wrap gap-10 px-6 py-16">
        <div className="flex min-w-72 flex-1 basis-80 flex-col gap-4">
          {cards.map(({ icon: Icon, label, value, href }) => {
            const body = (
              <>
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-bg text-lg text-accent">
                  <Icon aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase text-accent">{label}</span>
                  <span className="block break-all text-white">{value}</span>
                </span>
              </>
            );
            const cls =
              "flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4";
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`${cls} transition hover:border-accent`}
              >
                {body}
              </a>
            ) : (
              <div key={label} className={cls}>
                {body}
              </div>
            );
          })}

          <div className="mt-2 flex gap-3">
            {socialLinks
              .filter((s) => isUrl(s.url))
              .map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
                >
                  <SocialIcon name={s.icon} className="text-lg" />
                </a>
              ))}
          </div>
        </div>

        <div className="flex-1 basis-96 rounded-2xl border border-line bg-surface p-6 md:p-8">
          <h2 className="mb-6 text-2xl font-bold text-white">Send a message</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
