"use client";

import { motion } from "framer-motion";
import { LinkType } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type LinkButtonProps = {
  link: LinkType;
  index: number;
};

export default function LinkButton({ link, index }: LinkButtonProps) {
  // Get icon component from name or fallback to ExternalLink
  const getIcon = (iconName?: string): LucideIcon => {
    if (!iconName) return ExternalLink;

    const formattedName =
      iconName.charAt(0).toUpperCase() + iconName.slice(1);

    const icon = Icons[formattedName as keyof typeof Icons];
    return (icon ?? ExternalLink) as LucideIcon;
  };

  const IconComponent = getIcon(link.icon);

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full p-3 flex flex-col justify-between rounded-xl bg-card hover:bg-green-900 border border-border hover:border-gray-300 transition-all duration-300 overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <IconComponent size={18} className="text-primary" />
          <h2 className="text-lg font-semibold">{link.title}</h2>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          whileHover={{ scale: 1, opacity: 1, rotate: 15 }}
          transition={{ duration: 0.2 }}
          className="opacity-50 group-hover:opacity-100"
        >
          <ExternalLink size={18} />
        </motion.div>
      </div>

      {link.description && (
        <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
      )}

      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-primary/60 w-0 group-hover:w-full transition-all duration-300"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}
