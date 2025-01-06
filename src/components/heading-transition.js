"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function HeadingTransition({ title, ...delegated }) {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.1,
            duration: 0.8,
          },
        }}
        className="mb-0"
        {...delegated}
      >
        {title}
      </motion.h1>
      <span className="sr-only">
        Clément Picot - Experienced Frontend Developer - ReactJS NextJS
      </span>
      <motion.span
        initial={{ y: -24 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          bounce: 0,
          ease: "easeInOut",
          duration: 0.8
        }}
        className="inline-block animation-shine mt-0"
      >
        <Link href="/">Clément Picot</Link>
      </motion.span>
    </>
  );
}

export default HeadingTransition;
