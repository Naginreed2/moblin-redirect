"use client";

import { motion } from "framer-motion";
import Links from "./Links";

export default function LinkTree() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center w-full max-w-xl mx-auto px-4 py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Links />
    </motion.div>
  );
}