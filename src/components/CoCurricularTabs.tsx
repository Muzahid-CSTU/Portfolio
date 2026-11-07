"use client";

import { useState } from "react";
import { coCurricular } from "@/data/cocurricular";
import { isUrl } from "@/lib/utils";
import SafeImage from "./SafeImage";

export default function CoCurricularTabs() {
  const [active, setActive] = useState(coCurricular[0].id);
  const tab = coCurricular.find((t) => t.id === active) ?? coCurricular[0];

  return (
    <div>
      <div role="tablist" className="mb-8 flex flex-wrap gap-3">
        {coCurricular.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === active}
            onClick={() => setActive(t.id)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              t.id === active
                ? "border-accent bg-accent text-bg"
                : "border-line text-muted hover:border-accent hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {tab.items.map((item) => (
          <article
            key={item.title + item.organization}
            className="overflow-hidden rounded-2xl border border-line bg-surface"
          >
            {item.image && (
              <SafeImage
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover"
              />
            )}
            <div className="flex flex-col gap-2 p-6">
              <div className="text-xs font-bold uppercase tracking-wide text-accent">
                {item.organization}
                {item.period ? ` · ${item.period}` : ""}
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-muted">{item.description}</p>
              {isUrl(item.link) && (
                <a
                  href={item.link}
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
    </div>
  );
}
