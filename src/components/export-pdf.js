"use client";

import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import useScreenWidth from "@/hooks/use-screen-width";

export default function ExportPDFButton({locale}) {

  const isMobile = useScreenWidth();

  function downloadFile(url, filename) {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
  }

  const handleDownloadPDF = async () => {
    if (isMobile) {

      downloadFile(`/pdf/portfolio-clement-picot-${locale}.pdf`, 'Portfolio Clément Picot')

      return;
    }

    window.print();

  };

  return (
    <button
      onClick={handleDownloadPDF}
      className="print bg-primary dark:bg-secondary text-secondary dark:text-primary flex justify-center items-center rounded-full size-8"
      data-umami-event="Download PDF"
    >
      <ArrowDownTrayIcon width={20} />
    </button>
  );
}
