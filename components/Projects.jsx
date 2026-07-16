"use client";
import React from "react";

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
    <div id="projects" className="w-full py-24">
      <p className="font-mono text-sm text-sage uppercase tracking-widest mb-2">Projects</p>
      <h2 className="font-display text-4xl md:text-5xl text-ink mb-12">
        Things I&apos;ve shipped
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col rounded-3xl border-2 border-ink bg-white overflow-hidden hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="flex items-start justify-between px-5 pt-5">
              <h3 className="font-display text-xl text-ink">{project.name}</h3>
              <span
                className={`status-tag shrink-0 ml-3 px-2.5 py-1 rounded-full text-ink ${
                  project.status === "Shipped" ? "bg-gold" : "bg-rose/70"
                }`}
              >
                {project.status.toUpperCase()}
              </span>
            </div>
            <p className="px-5 mt-1 text-xs font-mono text-ink/50">{project.role}</p>
            <p className="px-5 mt-3 text-sm text-ink/70 leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 px-5 py-5 mt-2 border-t border-line">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[0.7rem] px-2.5 py-1 rounded-full bg-paper border border-line text-ink/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
