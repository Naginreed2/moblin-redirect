// components/Links.tsx

"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import LinkButton from "./LinkButton";

export default function Links() {
  const Links = links.filter;
  const appsLinks = links.filter((l) => l.type === "apps");
  const helpLinks = links.filter((l) => l.type === "help");
  const toolsLinks = links.filter((l) => l.type === "tools");
  const remoteLinks = links.filter((l) => l.type === "remote");
  const experimentalLinks = links.filter((l) => l.type === "experimental");

  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {/* Apps */}
      {appsLinks.length > 0 && (
        <div className="mt-3 p-4 border border-solid rounded-lg bg-black/50">
          <h3 className="text-xl font-semibold mb-2">Apps</h3>
          <div className="flex flex-col gap-1">
            {appsLinks.map((link, idx) => (
              <LinkButton
                key={link.id}
                link={link}
                index={Links.length + idx}
              />
            ))}
          </div>
        </div>
      )}

      {/* Help */}
      {helpLinks.length > 0 && (
        <div className="mt-3 p-4 border border-solid rounded-lg bg-black/50">
          <h3 className="text-xl font-semibold mb-2">Help</h3>
          <div className="flex flex-col gap-1">
            {helpLinks.map((link, idx) => (
              <LinkButton
                key={link.id}
                link={link}
                index={Links.length + idx}
              />
            ))}
          </div>
        </div>
      )}     

      {/* Tools */}
      {toolsLinks.length > 0 && (
        <div className="mt-3 p-4 border border-solid rounded-lg bg-black/50">
          <h3 className="text-xl font-semibold mb-2">Tools</h3>
          <div className="flex flex-col gap-1">
            {toolsLinks.map((link, idx) => (
              <LinkButton
                key={link.id}
                link={link}
                index={Links.length + idx}
              />
            ))}
          </div>
        </div>
      )}

      {/* Remote */}
      {remoteLinks.length > 0 && (
        <div className="mt-3 p-4 border border-solid rounded-lg bg-black/50">
          <h3 className="text-xl font-semibold mb-2">Remote</h3>
          <div className="flex flex-col gap-1">
            {remoteLinks.map((link, idx) => (
              <LinkButton
                key={link.id}
                link={link}
                index={Links.length + idx}
              />
            ))}
          </div>
        </div>
      )}

      {/* Experimental */}
      {experimentalLinks.length > 0 && (
        <div className="mt-3 p-4 border border-solid rounded-lg bg-black/50">
          <h3 className="text-xl font-semibold mb-2">Experimental</h3>
          <div className="flex flex-col gap-1">
            {experimentalLinks.map((link, idx) => (
              <LinkButton
                key={link.id}
                link={link}
                index={Links.length + idx}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
