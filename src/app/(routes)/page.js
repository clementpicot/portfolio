"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ArticleTransition from "@/components/article-transition";

export default function Home() {

  return (
    <>
      <motion.h1
        initial={{ y: 24 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          bounce: 0,
          ease: "easeInOut",
          duration: 0.8,
        }}
        className="w-full cursor-pointer"
      >
        <span className="sr-only">
          Clément Picot - Experienced Frontend Developer - React Junior
        </span>
        <span className="block group relative overflow-hidden">
          <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full animation-shine text-blue-500 dark:text-foreground">
            Clément Picot
          </span>
          <span className="inline-block absolute top-0 left-0 transition-all duration-300 ease-in-out translate-y-full group-hover:-translate-y-0 text-white/60">
            <a
              href="https://www.linkedin.com/in/clement-picot/"
              target="_blank"
            >
              React Developer
            </a>
          </span>
        </span>
      </motion.h1>

      <Link href="/profil">Profil</Link>

      <ArticleTransition className="leading-snug space-y-4" delay={.5}>
        <motion.p>
          I'm a{"  "}
          <Link href="/about" className="text-blue-500 hover:text-blue-700">
            frontend developer
          </Link>
          , optimist, and comunny builder. I work form myself, where I learn
          React and Next.js, an open-source web framework built with React.
        </motion.p>
        <motion.p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
          commodi nulla! Ipsam distinctio, reiciendis explicabo nam hic ea!{" "}
          <Link href="/projects" className="text-blue-500 hover:text-blue-700">
            Id aspernatur
          </Link>
          nisi pariatur sint ratione saepe ut incidunt nulla culpa expedita!
        </motion.p>
      </ArticleTransition>
    </>
  );
}
