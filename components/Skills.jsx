"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Html from "../public/assets/html.png";
import Css from "../public/assets/css.png";
import Javascript from "../public/assets/javascript.png";
import ReactImg from "../public/assets/react.png";
import Github from "../public/assets/github1.png";
import Java from "../public/assets/java.png";
import C from "../public/assets/C.png";
import NextJS from "../public/assets/nextjs.png";
import NodeJS from "../public/assets/node.png";
import Bootstrap from "../public/assets/Bootstrap.png";
import Microsoft from "../public/assets/Microsoft_Office.png";
import TailwindImg from "../public/assets/tailwind.png";
import Azure from "../public/assets/Azure_DevOp.png";
import Python from "../public/assets/python.png";
import Flutter from "../public/assets/Flutter.png";
import Dart from "../public/assets/Dart.png";
import Flutterflow from "../public/assets/Flutterflow.png";
import Wordpress from "../public/assets/Wordpress.png";

const categories = [
  {
    title: "Languages",
    skills: [
      { title: "HTML", src: Html },
      { title: "CSS", src: Css },
      { title: "JavaScript", src: Javascript },
      { title: "Python", src: Python },
      { title: "Java", src: Java },
      { title: "C#", src: C },
      { title: "Dart", src: Dart },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { title: "React", src: ReactImg },
      { title: "Next.js", src: NextJS },
      { title: "Tailwind CSS", src: TailwindImg },
      { title: "Bootstrap", src: Bootstrap },
      { title: "WordPress", src: Wordpress },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { title: "Node.js", src: NodeJS },
      { title: "GitHub", src: Github },
      { title: "Azure DevOps", src: Azure },
      { title: "Microsoft Office", src: Microsoft },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { title: "Flutter", src: Flutter },
      { title: "FlutterFlow", src: Flutterflow },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-32 px-6 md:px-16 lg:px-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink/10 blur-[120px]" />

      <div className="relative z-10 max-w-[1240px] m-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-pink uppercase tracking-widest mb-2"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl text-white mb-16"
        >
          Technologies I <span className="text-gradient">work with</span>
        </motion.h2>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-display font-semibold text-white mb-8 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-pink" />
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    whileHover={{ y: -8, scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-pink/50 hover:bg-pink/5 hover:glow-pink-sm cursor-default"
                  >
                    <div className="flex justify-center">
                      <Image
                        src={skill.src}
                        width={65}
                        height={65}
                        alt={skill.title}
                        className="transition duration-300 group-hover:scale-110 group-hover:rotate-6"
                      />
                    </div>
                    <h4 className="mt-6 text-center font-semibold text-white/70 group-hover:text-pink transition-colors duration-300">
                      {skill.title}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
