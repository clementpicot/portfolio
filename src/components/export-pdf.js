"use client";

import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function ExportPDFButton() {

  const handleDownloadPDF = async () => {
    window.print();
  };

  return (
    <button
      onClick={handleDownloadPDF}
      className="print bg-primary dark:bg-secondary text-secondary dark:text-primary flex justify-center items-center rounded-full size-8"
    >
      <ArrowDownTrayIcon width={20} />
    </button>
  );
}
