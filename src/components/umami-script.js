"use client";

import Script from "next/script";

export default function UmamiScript() {

  if (!process.env.NEXT_PUBLIC_PROD_URL) return;

  return (
    <Script
      src={process.env.NEXT_PUBLIC_UMAMI_URL}
      data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
      onError={(err) => {
        console.error("Umami script failed to load", err);
      }}
      strategy="lazyOnload"
    />
  );
}
