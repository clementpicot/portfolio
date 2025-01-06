"use client";

import usePosition from "@/hooks/use-position";
import { useCursor } from "@/providers/cursor-provider";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mounted, setMounted] = useState(false);
  const { position } = usePosition();

  const { isCursorVisible } = useCursor();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  if (!isCursorVisible) return;

  return (
    <div
      className="pointer-events-none fixed z-30 inset-0 size-3 rounded-full dark:bg-white bg-foreground border border-gray-800"
      style={{
        translate: `${position.x}px ${position.y}px`,
      }}
    />
  );
}
