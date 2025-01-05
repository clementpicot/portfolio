"use client";
import React from "react";
import { AnimatePresence, color, motion } from "framer-motion";

function ArticleTransition({ children, delay, className, ...delegated }) {

  return (
    <motion.article
      initial={{ opacity: 0.5, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: {
        duration: 1,
        staggerChildren: .5
      } }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 1,
        staggerChildren: .5,
      }}
      className={`mt-6 ${className}`}
      {...delegated}
    >
      {children}
    </motion.article>
  );
}

export default ArticleTransition;
