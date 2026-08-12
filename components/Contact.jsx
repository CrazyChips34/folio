"use client";
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <div id='contact' className="relative w-full py-32 px-6 md:px-16 lg:px-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink/10 blur-[150px]" />

      <div className="relative z-10 max-w-[1240px] m-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-pink uppercase tracking-widest mb-2"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl text-white mb-16"
        >
          Get in <span className="text-gradient">touch</span>
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-full col-span-3 lg:col-span-2 p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent"
          >
            <h3 className="font-display text-2xl text-white">Tiffany Pietersen</h3>
            <p className="mt-1 font-mono text-xs text-pink uppercase tracking-wide">Full-Stack Developer</p>
            <p className="mt-6 text-sm text-white/50 leading-relaxed">
              I&apos;m always excited to connect with like-minded people and share ideas — feel free to reach out.
            </p>

            <p className="mt-10 mb-4 font-mono text-xs text-white/30 uppercase tracking-widest">Connect</p>
            <div className="flex items-center gap-4">
              <Link href='https://www.linkedin.com/in/tiffany-pietersen-1297b2213' target='_blank' rel='noreferrer' title='LinkedIn'>
                <div className="social-icon bg-white/5 border border-pink/30 rounded-full text-xl text-pink hover:bg-pink hover:text-black hover:glow-pink-sm">
                  <FaLinkedinIn />
                </div>
              </Link>
              <Link href='https://github.com/CrazyChips34' target='_blank' rel='noreferrer' title='GitHub'>
                <div className="social-icon bg-white/5 border border-pink/30 rounded-full text-xl text-pink hover:bg-pink hover:text-black hover:glow-pink-sm">
                  <FaGithub />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right card - form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full col-span-3 p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent"
          >
            <form action='https://getform.io/f/58da03db-3ee4-469e-bca4-3138d8a8a7b6' method='POST'>
              <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                <div className="flex flex-col">
                  <label className="py-2 font-mono text-xs uppercase tracking-wide text-white/40">Name</label>
                  <input className="p-3 border border-white/10 rounded-xl bg-white/5 text-white focus:border-pink focus:outline-none focus:glow-pink-sm transition-all placeholder:text-white/20" type='text' name='name' placeholder="Your name" required />
                </div>
                <div className="flex flex-col">
                  <label className="py-2 font-mono text-xs uppercase tracking-wide text-white/40">Phone Number</label>
                  <input className="p-3 border border-white/10 rounded-xl bg-white/5 text-white focus:border-pink focus:outline-none focus:glow-pink-sm transition-all placeholder:text-white/20" type='text' name='phone' placeholder="Optional" />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="py-2 font-mono text-xs uppercase tracking-wide text-white/40">Email</label>
                <input
                  className="p-3 border border-white/10 rounded-xl bg-white/5 text-white focus:border-pink focus:outline-none focus:glow-pink-sm transition-all placeholder:text-white/20"
                  type='email'
                  name='email'
                  placeholder="you@example.com"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="py-2 font-mono text-xs uppercase tracking-wide text-white/40">Subject</label>
                <input className="p-3 border border-white/10 rounded-xl bg-white/5 text-white focus:border-pink focus:outline-none focus:glow-pink-sm transition-all placeholder:text-white/20" type='text' name='subject' placeholder="What's this about?" required />
              </div>
              <div className="flex flex-col py-2">
                <label className="py-2 font-mono text-xs uppercase tracking-wide text-white/40">Message</label>
                <textarea className="p-3 border border-white/10 rounded-xl bg-white/5 text-white focus:border-pink focus:outline-none focus:glow-pink-sm transition-all placeholder:text-white/20 resize-none" rows='8' name='message' placeholder="Tell me more..." required />
              </div>
              <button className="w-full p-4 mt-4 font-semibold text-black bg-pink rounded-full hover:bg-pink-glow transition-all hover:glow-pink">
                Send message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/30">
            tiffany<span className="text-pink">.</span>dev — Built with Next.js &amp; Framer Motion
          </p>
          <p className="font-mono text-xs text-white/30">
            © {new Date().getFullYear()} Tiffany Pietersen
          </p>
        </div>
      </div>
    </div>
  );
};
