"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import LinkButton from "./LinkButton";

export default function Links() {
  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="flex flex-col gap-1">
        {links.map((link, index) => (
          <LinkButton key={link.id} link={link} index={index} />
        ))}
      </div>
    </motion.div>
  );
}