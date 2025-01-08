import React from "react";
import LocaleSwitcher from "./locale-switcher";
import ThemeSwitcher from "./theme-switcher";
import ExportPDFButton from "./export-pdf";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Header({ locale }) {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="w-full min-w-40 cursor-pointer dark:text-secondary">
          <span className="sr-only">
            Clément Picot - Experienced Frontend Developer - ReactJS NextJS
          </span>
          <span className="block group relative overflow-hidden">
            <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full animation-shine">
              Clément Picot
              <ArrowUpRightIcon width={10} className="inline ml-2" />
            </span>
            <span className="inline-block absolute top-0 left-0 transition-all duration-300 ease-in-out translate-y-full group-hover:-translate-y-0 text-gray-500 dark:text-white/50">
              <a
                href="https://www.linkedin.com/in/clement-picot/"
                target="_blank"
                data-umami-event="Redirection LinkedIn - Header"
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
        <ExportPDFButton locale={locale} />
      </div>
    </header>
  );
}
