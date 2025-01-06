"use client";

import { useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function useTracking(options = { stiffness: 500, damping: 50 }) {
  const [isTracking, setIsTracking] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, options);
  const springY = useSpring(cursorY, options);

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

  return { springX, springY, isTracking, setIsTracking };
}
