"use client";

import useTracking from "@/hooks/use-tracking";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function Row({
  delay,
  context,
  isOpened,
  onToggle,
  children,
}) {
  const { setIsTracking, isTracking, springX, springY } = useTracking({ stiffness: 200, damping: 25 });

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
      onMouseEnter={() => setIsTracking(true)}
      onMouseLeave={() => setIsTracking(false)}
      onClick={onToggle}
      className="py-8 border-b border-neutral-400 cursor-none"
    >
      {isTracking && (
        <motion.div
          className={`dark:bg-slate-50 bg-foreground dark:bg-foreground fixed rounded-full inset-0 -top-4 -left-4 ${
            isTracking ? "size-12 opacity-100" : "size-6 opacity-50"
          }`}
          style={{
            translateX: springX,
            translateY: springY,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <ArrowDownRightIcon
            width={24}
            className={`-top-1/2 translate-y-1/2 -left-1/2 translate-x-1/2 text-slate-50 dark:text-black ${
              isOpened && "-rotate-90"
            } transition-all`}
          />
        </motion.div>
      )}
      {children}

      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "1rem" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            {context}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
