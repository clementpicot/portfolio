"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";

export const cursorConfig = {
  default: {
    variant: "default",
    styles: {
      width: 16,
      height: 16,
    },
  },
  ".row": {
    variant: "hoverRow",
    styles: {
      width: 48,
      height: 48,
      border: "none",
    },
    icon: (
      <ArrowDownRightIcon className="w-full text-slate-50 dark:text-black" />
    ),
    onClickAnimation: { width: 48, height: 48, rotate: -45 },
  },
  ".print": {
    variant: "hoverButton",
    styles: {},
    content: "Télécharger PDF",
  },
};

export default function Cursor() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isClicked, setIsClicked] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 30 });

  const config = cursorConfig;

  useEffect(() => {
    let lastHoveredElement = null;

    const moveCursor = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const handleMouseEnter = (e) => {
      const target = e.target;

      // Check if the hovered element matches a selector or has a parent that does
      for (const [selector, value] of Object.entries(config)) {
        if (target.matches(selector) || target.closest(selector)) {
          setCursorVariant(value.variant || "hover");
          lastHoveredElement = { selector, config: value };
          return;
        }
      }

      setCursorVariant("default");
      lastHoveredElement = null; // Reset when no match
    };

    const handleMouseLeave = () => {
      setCursorVariant("default");
      lastHoveredElement = null;
    };

    const handleClick = () => {
      if (lastHoveredElement?.config?.onClickAnimation) {
        setIsClicked(true);
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", handleClick);

    // Optimize event listeners for interactive elements only
    const interactiveElements = document.querySelectorAll(
      Object.keys(config).join(",")
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", handleClick);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [config]);

  const variants = {
    // default: { scale: 1 },
    ...Object.values(config).reduce(
      (acc, item) => ({ ...acc, [item.variant]: item.styles }),
      {}
    ),
    clicked: {}, // Placeholder for click animations
  };

  const currentVariantConfig = Object.values(config).find(
    (item) => item.variant === cursorVariant
  );

  return (
    <>
      <motion.div
        className="cursor hidden sm:block fixed top-0 left-0 pointer-events-none z-40 size-4 rounded-full border border-secondary dark:border-primary bg-primary dark:bg-secondary"
        style={{
          translateX: springX,
          translateY: springY,
        }}
        variants={variants}
        animate={
          isClicked && currentVariantConfig?.onClickAnimation
            ? currentVariantConfig.onClickAnimation
            : cursorVariant
        }
        onAnimationComplete={() => setIsClicked(false)} // Reset click state after animation
      >
        {currentVariantConfig?.icon && (
          <motion.span
            initial={{ width: 0, height: 0 }}
            animate={{ width: 24, height: 24 }}
            className="block translate-x-1/2 translate-y-1/2 -left-1/2 -top-1/2 transition-all"
          >
            {currentVariantConfig.icon}
          </motion.span>
        )}
      </motion.div>
      {currentVariantConfig?.content && (
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          className="fixed top-6 left-2 p-2 rounded-sm font-bold text-sm bg-primary dark:bg-secondary text-secondary dark:text-primary"
          style={{
            translateX: springX,
            translateY: springY,
          }}
        >
          {currentVariantConfig.content}
        </motion.div>
      )}
    </>
  );
}
