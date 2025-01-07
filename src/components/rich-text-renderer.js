"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function RichTextRenderer({ richText }) {
  const [activeLink, setActiveLink] = useState(null);

  // Toggles the visibility of the image on click
  const toggleImage = (href) => {
    setActiveLink(activeLink === href ? null : href);
  };

  const renderOptions = {
    renderNode: {
      "embedded-asset-block": (node) => {
        // Render other blocks if needed
      },
      hyperlink: (node, children) => {
        const href = node.data.uri;
        return (
          <span
            onMouseEnter={() => setActiveLink(href)}
            onMouseLeave={() => setActiveLink(null)}
            onClick={() => toggleImage(href)}
            style={{ position: "relative", display: "inline-block" }}
          >
            <span
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-blue-400 dark:hover:text-blue-600 text-orange-500 hover:text-orange-700 font-medium transition-all"
            >
              {children}
            </span>
            {activeLink === href && (
              <motion.img
                initial={{ maxWidth: 0 }}
                animate={{
                  maxWidth: "18rem",
                  transition: {
                    duration: 0.1,
                  },
                }}
                exit={{maxWidth: 0}}
                src={href}
                alt="Alphie the Bernese Mountain Dog"
                className="alphie absolute z-30 bottom-10 sm:left-1/2 sm:-translate-x-1/2"
              />
            )}
          </span>
        );
      },
    },
  };

  return (
    <div className="mt-8 space-y-3">
      {documentToReactComponents(richText, renderOptions)}
    </div>
  );
}
