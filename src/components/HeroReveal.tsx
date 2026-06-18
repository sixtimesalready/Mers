"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function HeroReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
