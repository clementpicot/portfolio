"use client";

import { useEffect, useState } from "react";

export default function usePosition() {
  const [position, setPosition] = useState({ x: null, y: null });

  const handlePosition = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handlePosition);

    return () => {
      window.removeEventListener("mousemove", handlePosition);
    };
  }, []);

  return { position };
}
