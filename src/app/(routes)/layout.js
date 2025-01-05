import { AnimatePresence } from "framer-motion";
import { Geist, Geist_Mono, Funnel_Display } from "next/font/google";
import "@/app/globals.css";
import ThemeProvider from "@/providers/theme-provider";
import ThemeSwitcher from "@/components/theme-switcher";

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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${funnel.variable} antialiased`}
      >
        <ThemeProvider
          defaultTheme="dark"
          attribute="data-mode"
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col justify-between pt-8 p-8 font-[family-name:var(--font-geist-sans)]">
            <main className="max-w-[60rem] mx-auto w-full">
              <ThemeSwitcher />
              <AnimatePresence initial={false} mode="wait">
                {children}
              </AnimatePresence>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
