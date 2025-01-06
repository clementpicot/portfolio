"use client";

import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LocaleSwitcher({locale}) {
  const [mounted, setMounted] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(locale)

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  return (
    <button className="text-sm font-bold uppercase font-funnel" onClick={() => {
      setCurrentLocale(currentLocale === "fr" ? "en" : "fr")
      redirect(`/${currentLocale === "fr" ? "en" : "fr"}`)
    }} >
      {currentLocale === "fr" ? 'FR' : 'EN'}
    </button>
  );
}
