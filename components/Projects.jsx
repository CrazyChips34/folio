"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "SnapIQ",
    role: "Solo project",
    status: "Shipped",
    description:
      "An AI screenshot organizer that makes every screenshot searchable, so you can actually find that one from three weeks ago.",
    stack: ["Expo", "Claude Vision", "SerpApi", "SQLite FTS5"],
  },
  {
    name: "StickerVault",
    role: "Solo project",
    status: "Shipped",
    description:
      "Auto-classifies your WhatsApp stickers with AI and watches your device folders, exporting straight back into WhatsApp's native pack format.",
    stack: ["Android", "Claude Vision", "Folder watching"],
  },
  {
    name: "SnapBooth",
    role: "Solo project",
    status: "Shipped",
    description:
      "A photobooth PWA with a full operator control panel, live session gallery, and brand profiles for events — built to actually work on iOS Safari.",
    stack: ["PWA", "iOS Safari compat"],
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="relative w-full py-32 px-6 md:px-16 lg:px-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-pink/10 blur-[120px]" />

      <div className="relative z-10 max-w-[1240px] m-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-pink uppercase tracking-widest mb-2"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl text-white mb-14"
        >
          Things I&apos;ve <span className="text-gradient">shipped</span>
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden hover:border-pink/50 transition-all duration-300 hover:glow-pink"
            >
              {/* Top accent line */}
              <div className="h-1 w-full bg-gradient-to-r from-pink via-pink-glow to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="flex items-start justify-between px-6 pt-6">
                <h3 className="font-display text-2xl text-white group-hover:text-pink transition-colors duration-300">
                  {project.name}
                </h3>
                <span
                  className={`status-tag shrink-0 ml-3 px-2.5 py-1 rounded-full ${
                    project.status === "Shipped"
                      ? "bg-pink/20 text-pink border border-pink/30"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  {project.status.toUpperCase()}
                </span>
              </div>
              <p className="px-6 mt-1 text-xs font-mono text-white/30">{project.role}</p>
              <p className="px-6 mt-4 text-sm text-white/50 leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 px-6 py-6 mt-2 border-t border-white/5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[0.7rem] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 group-hover:border-pink/30 group-hover:text-pink/70 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
