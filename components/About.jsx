"use client";
import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import PortfolioImg from "../public/assets/me.png";

export const About = () => {
  return (
    <div id="about" className="relative w-full py-32 px-6 md:px-16 lg:px-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-pink/10 blur-[100px]" />

      <div className="relative z-10 max-w-[1240px] m-auto grid md:grid-cols-3 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full relative md:col-span-1"
        >
          <div className="absolute -inset-3 -z-10 bg-pink/30 rounded-3xl -rotate-2 blur-sm" />
          <div className="absolute -inset-1 -z-10 bg-pink-glow/20 rounded-3xl rotate-2" />
          <div className="rounded-3xl overflow-hidden border-2 border-pink rotate-1 hover:rotate-0 transition-transform duration-300">
            <Image
              className="w-full h-auto object-cover"
              src={PortfolioImg}
              alt="Tiffany Pietersen"
              width={800}
              height={800}
            />
          </div>
        </motion.div>

        {/* Text */}
        <div className="col-span-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-pink uppercase tracking-widest mb-2"
          >
            About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-white mb-8"
          >
            A bit about me
          </motion.h2>

          <div className="space-y-5 text-white/60 leading-relaxed max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi there! My name is <span className="font-semibold text-pink">Tiffany Pietersen</span>, and
              I&apos;m a software developer from Cape Town with a diploma in Software Development from IIE Rosebank College.
              My interest in technology started at home, where I watched my dad build and repair computers.
              Seeing how technology could solve problems sparked my curiosity, and that curiosity has grown into a career
              of building web, mobile, and AI-powered applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I enjoy learning new technologies, taking ideas from concept to production, and creating software that is practical, reliable, and meaningful.
              Outside of coding, I enjoy activities that keep me creative and balanced — whether it&apos;s
              <span className="font-semibold text-pink"> e-sports, reading, baking, music, or writing</span>.
              You&apos;ll also find me serving in my church&apos;s media ministry.
              My faith keeps me grounded and reminds me to approach both my work and the people around me with purpose.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I&apos;m currently working at <span className="font-semibold text-pink">Appmaniazar</span> as a
              software developer, where I build and maintain applications that bring ideas to life. My goal is
              to keep expanding my knowledge and use technology to make a positive impact on people&apos;s
              lives.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};
