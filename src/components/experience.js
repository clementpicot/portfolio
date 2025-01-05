"use client";

import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Experience({ delay, context, isOpened, onToggle, children }) {
  const [isTracking, setIsTracking] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 200, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 25 });

  const handleMouseMove = (event) => {
    cursorX.set(event.clientX);
    cursorY.set(event.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isTracking]);

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
          className={`bg-slate-50 dark:bg-foreground fixed rounded-full left-0 top-0 ${
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
            className={`-top-1/2 translate-y-1/2 -left-1/2 translate-x-1/2 dark:text-slate-50 text-black ${
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
