"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import usePosition from "@/hooks/use-position";

export default function CursorRadial() {
  const { theme } = useTheme();

  const { position } = usePosition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const radialColor =
    theme === "dark" ? "rgba(76, 88, 121, 0.15)" : "rgba(23, 23, 23, 0.15)";

  if (!mounted) return;

  return (
    <div
      className="pointer-events-none fixed inset-0"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, ${radialColor}, transparent 80%)`,
      }}
    />
  );
}
