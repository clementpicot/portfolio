"use client";

import useTracking from "@/hooks/use-tracking";
import { useCursor } from "@/providers/cursor-provider";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function Row({ delay, context, isOpened, onToggle, children }) {
  const { setIsTracking, isTracking, springX, springY } = useTracking({
    stiffness: 200,
    damping: 25,
  });
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
        setIsTracking(true);
      }}
      onMouseLeave={() => {
        setIsCursorVisible(true);
        setIsTracking(false);
      }}
      onClick={onToggle}
      className="row py-8 border-b border-neutral-400 cursor-none"
    >
      {isTracking && (
        <motion.div
          className="dark:bg-slate-50 bg-secondary dark:bg-secondary fixed pointer-events-none rounded-full inset-0 -top-4 -left-4"
          style={{
            translateX: springX,
            translateY: springY,
          }}
          initial={{
            width: 12,
            height: 12,
          }}
          animate={{
            width: 48,
            height: 48,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 10,
            },
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: 24,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
            }}
          >
            <ArrowDownRightIcon
              className={`-top-1/2 translate-y-1/2 -left-1/2 translate-x-1/2 text-slate-50 dark:text-black w-full ${
                isOpened && "-rotate-90"
              } transition-all`}
            />
          </motion.div>
        </motion.div>
      )}
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
