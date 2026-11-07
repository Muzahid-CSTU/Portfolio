"use client";

import { useState } from "react";

// Shows a neat placeholder if the image file is missing in /public.
export default function SafeImage({
  src,
  alt,
  className = "",
  fallback,
}: {
  src?: string;
  alt: string;
  className?: string;
  fallback?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-deep p-4 text-center text-sm text-muted ${className}`}
      >
        {fallback ?? alt}
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}
