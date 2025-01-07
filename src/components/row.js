"use client";

import { useCursor } from "@/providers/cursor-provider";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

export default function Row({ delay, context, isOpened, onToggle, children }) {

  const { setIsCursorVisible } = useCursor();

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
            {context}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
