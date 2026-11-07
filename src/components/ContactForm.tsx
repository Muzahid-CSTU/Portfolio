"use client";

import { useState } from "react";
import { contact } from "@/data/social";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-lg border border-line bg-bg px-4 py-3 text-white placeholder:text-muted focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const v = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const errs: Record<string, string> = {};
    if (v.name.length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errs.email = "Please enter a valid email.";
    if (v.subject.length < 3) errs.subject = "Please enter a subject.";
    if (v.message.length < 10) errs.message = "Message should be at least 10 characters.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Fallback: open the visitor's email app if EmailJS is not configured yet.
    if (!serviceId || !templateId || !publicKey) {
      const body = `${v.message}\n\n— ${v.name} (${v.email})`;
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        v.subject
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: v.name,
            from_email: v.email,
            subject: v.subject,
            message: v.message,
          },
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-semibold text-white">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" className={inputClass} />
        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold text-white">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" className={inputClass} />
        {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-semibold text-white">Subject</label>
        <input id="subject" name="subject" type="text" placeholder="What is this about?" className={inputClass} />
        {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold text-white">Message</label>
        <textarea id="message" name="message" rows={5} placeholder="Write your message..." className={inputClass} />
        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start rounded-lg bg-accent px-6 py-3 font-bold text-bg transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      <div aria-live="polite">
        {status === "sent" && (
          <p className="text-accent">Message sent! I will get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="text-red-400">
            Something went wrong. Please email me directly at {contact.email}.
          </p>
        )}
      </div>
    </form>
  );
}
