"use client";

import Script from "next/script";

export default function UmamiScript() {
  return (
    <Script
      src={process.env.NEXT_PUBLIC_UMAMI_URL}
      data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
      onError={(err) => {
        console.error("Body Script failed to load", err);
      }}
      strategy="lazyOnload"
    />
  );
}
