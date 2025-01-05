"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function ThemeProvider({ children, ...delegated }) {
  return (
    <NextThemeProvider {...delegated}>
      {children}
    </NextThemeProvider>
  );
}
