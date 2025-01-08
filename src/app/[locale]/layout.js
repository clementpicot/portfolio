import "@/app/globals.scss";

import { AnimatePresence } from "motion/react";
import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";

import ThemeProvider from "@/providers/theme-provider";
import LocaleSwitcher from "@/components/locale-switcher";
import ThemeSwitcher from "@/components/theme-switcher";
import CursorRadial from "@/components/cursor-radial";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Geist, Geist_Mono, Funnel_Display } from "next/font/google";
import { CursorProvider } from "@/providers/cursor-provider";
import ExportPDFButton from "@/components/export-pdf";
import Cursor from "@/components/cursor";
import Head from "next/head";

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
      <Head>
        <script
          async
          src="https://cloud.umami.is/script.js"
          data-website-id="c2060ac5-e423-44f5-8446-738c713d7a2f"
        />
      </Head>
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
              <main className="max-w-[60rem] mx-auto w-full">
                <header className="flex items-center justify-between">
                  <div>
                    <h1 className="w-full min-w-40 cursor-pointer dark:text-secondary">
                      <span className="sr-only">
                        Clément Picot - Experienced Frontend Developer - ReactJS
                        NextJS
                      </span>
                      <span className="block group relative overflow-hidden">
                        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full animation-shine">
                          Clément Picot
                          <ArrowUpRightIcon
                            width={10}
                            className="inline ml-2"
                          />
                        </span>
                        <span className="inline-block absolute top-0 left-0 transition-all duration-300 ease-in-out translate-y-full group-hover:-translate-y-0 text-gray-500 dark:text-white/50">
                          <a
                            href="https://www.linkedin.com/in/clement-picot/"
                            target="_blank"
                          >
                            React Developer
                          </a>
                        </span>
                      </span>
                    </h1>
                  </div>

                  <div className="flex justify-end gap-4">
                    <LocaleSwitcher locale={locale} />
                    <ThemeSwitcher />
                    <ExportPDFButton />
                  </div>
                </header>
                <AnimatePresence initial={false} mode="wait">
                  {children}
                </AnimatePresence>
              </main>
            </div>
            <CursorRadial />
            <Cursor />
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
