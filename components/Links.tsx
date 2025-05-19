// components/Links.tsx

"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import LinkButton from "./LinkButton";

export default function Links() {
  const stableLinks = links.filter((l) => l.type === "stable");
  const experimentalLinks = links.filter((l) => l.type === "experimental");

  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {/* Stable (formerly official) */}
      <div className="flex flex-col gap-1">
        {stableLinks.map((link, idx) => (
          <LinkButton key={link.id} link={link} index={idx} />
        ))}
      </div>

      {/* Experimental */}
      {experimentalLinks.length > 0 && (
        <div className="mt-8 p-4 border border-solid rounded-lg bg-black/50">
          <h3 className="text-xl font-semibold mb-4">Experimental</h3>
          <div className="flex flex-col gap-1">
            {experimentalLinks.map((link, idx) => (
              <LinkButton
                key={link.id}
                link={link}
                index={stableLinks.length + idx}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
