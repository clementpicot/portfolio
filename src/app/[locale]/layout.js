import "@/app/globals.scss";

import { AnimatePresence } from "motion/react";
import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";
import ThemeProvider from "@/providers/theme-provider";

import CursorRadial from "@/components/cursor-radial";
import Cursor from "@/components/cursor";
import UmamiScript from "@/components/umami-script";
import Footer from "@/components/footer";
import Header from "@/components/header";

import { Geist, Geist_Mono, Funnel_Display } from "next/font/google";
import { CursorProvider } from "@/providers/cursor-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const funnel = Funnel_Display({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-funnel",
});

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: `Clément Picot`,
    description: `${
      locale === "en"
        ? "Experienced Frontend Developer - ReactJS NextJS"
        : "Développeur Front-End expérimenté - ReactJS NextJS"
    }`,
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    redirect("/fr");
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${funnel.variable} antialiased text-primary dark:text-secondary bg-secondary dark:bg-primary`}
      >
        <ThemeProvider
          defaultTheme="dark"
          attribute="data-mode"
          disableTransitionOnChange
        >
          <CursorProvider>
            <div className="min-h-screen flex flex-col justify-between pt-8 p-8 font-[family-name:var(--font-geist-sans)]">
              <div className="max-w-[60rem] mx-auto w-full">
                <Header locale={locale} />
                <main>
                  <AnimatePresence initial={false} mode="wait">
                    {children}
                  </AnimatePresence>
                </main>
                <Footer />
              </div>
            </div>
            <CursorRadial />
            <Cursor />
          </CursorProvider>
        </ThemeProvider>
        <UmamiScript />
      </body>
    </html>
  );
}
