"use client";

import { useCursor } from "@/providers/cursor-provider";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

export default function Row({ delay, context, isOpened, onToggle, children }) {
  const { setIsCursorVisible } = useCursor();

  const renderOptions = {
    renderNode: {
      hyperlink: (node, children) => {
        const href = node.data.uri;
        return (
          <a href={href} className="dark:text-blue-400 dark:hover:text-blue-600 text-orange-500 hover:text-orange-700 transition-all pointer-events-auto" target="_blank" rel="noopener noreferrer">{children}</a>
        );
      },
    },
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay,
        },
      }}
      onMouseEnter={() => {
        setIsCursorVisible(false);
      }}
      onMouseLeave={() => {
        setIsCursorVisible(true);
      }}
      onClick={onToggle}
      className="row relative z-40 py-8 border-b border-neutral-400 cursor-none pointer-events-auto [&>*]:pointer-events-auto"
    >
      {children}

      <p className={`mt-4 flex sm:hidden items-center gap-1.5 transition-all ease-in-out animation-shine ${isOpened && 'restart'}`}>
        <InformationCircleIcon width={16} />
        En savoir plus
      </p>

      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "2rem" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="row-content overflow-hidden"
          >
            {documentToReactComponents(context, renderOptions)}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
