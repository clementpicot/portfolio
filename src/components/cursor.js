"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Cursor() {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  const handlePosition = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handlePosition);

    return () => {
      window.removeEventListener("mousemove", handlePosition);
    };
  }, [position]);

  const radialColor =
    theme === "dark" ? "rgba(76, 88, 121, 0.15)" : "rgba(23, 23, 23, 0.15)";

  if (!mounted) return;

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, ${radialColor}, transparent 80%)`,
        }}
      />
      <div
        className="pointer-events-none fixed z-30 inset-0 size-3 rounded-full dark:bg-white bg-foreground border border-gray-800"
        style={{
          translate: `${position.x}px ${position.y}px`,
        }}
      />
    </>
  );
}
