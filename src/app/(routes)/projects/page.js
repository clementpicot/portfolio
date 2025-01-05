"use client";

import Link from "next/link";
import HeadingTransition from "@/components/heading-transition";

export default function Projects() {
  return (
    <>
      <HeadingTransition title={"Projects"} />
      <p>
        <Link href="/">Retourner sur la page d'accueil</Link>
      </p>
    </>
  );
}
