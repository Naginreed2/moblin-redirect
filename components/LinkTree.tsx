// components/LinkTree.tsx

"use client";

import { motion } from "framer-motion";
import Links from "./Links";
import { useEffect, useState } from "react";

export default function LinkTree() {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const checkHeight = () => {
      const windowHeight = window.innerHeight;
      const contentHeight = document.body.scrollHeight;
      setShowTitle(contentHeight <= windowHeight);
    };
    checkHeight();
    window.addEventListener("resize", checkHeight);
    return () => window.removeEventListener("resize", checkHeight);
  }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-start p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {showTitle && (
        <motion.h1
          className="text-4xl font-bold mb-8 text-center bg-black/50 inline-block px-4 py-3 rounded-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Moblin
        </motion.h1>
      )}
      <Links />
    </motion.div>
  );
}
