"use client";
import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Main = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxX = (mousePos.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) / 40;
  const parallaxY = (mousePos.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) / 40;

  return (
    <div id='home' className='relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 overflow-hidden'>
      {/* Background orbs */}
      <motion.div
        animate={{ x: parallaxX, y: parallaxY }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className='absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-pink/20 blur-[100px] animate-pulse-glow'
      />
      <motion.div
        animate={{ x: -parallaxX * 0.5, y: -parallaxY * 0.5 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className='absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-pink-glow/10 blur-[120px]'
      />

      {/* Grid lines */}
      <div className='absolute inset-0 opacity-[0.03]' style={{
        backgroundImage: 'linear-gradient(#FF1B7B 1px, transparent 1px), linear-gradient(90deg, #FF1B7B 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className='relative z-10 max-w-5xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className='font-mono text-sm text-pink uppercase tracking-widest mb-6 flex items-center gap-2'>
            <span className='inline-block w-2 h-2 rounded-full bg-pink animate-pulse' />
            Cape Town, South Africa
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className='font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-white'
        >
          Hi, I&apos;m <span className='text-gradient text-glow'>Tiffany.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className='font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-white/80 mt-4'
        >
          I build <span className='text-pink'>software that ships.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className='mt-8 max-w-xl text-base md:text-lg text-white/50 leading-relaxed'
        >
          A software developer who enjoys owning products end to end — from backend services
          to polished user experiences. By day I build production software at Appmaniazar.
          Outside of work, I&apos;m usually building side projects, experimenting with new technologies,
          or creating tools that solve real problems.
        </motion.p>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='flex gap-4 mt-10'
        >
          <Link href='https://www.linkedin.com/in/tiffany-pietersen-1297b2213' target='_blank' rel='noreferrer'>
            <div className='social-icon bg-white/5 border border-pink/30 rounded-full text-2xl text-pink hover:bg-pink hover:text-black hover:glow-pink-sm' title='LinkedIn'>
              <AiFillLinkedin />
            </div>
          </Link>
          <Link href='https://github.com/CrazyChips34' target='_blank' rel='noreferrer'>
            <div className='social-icon bg-white/5 border border-pink/30 rounded-full text-2xl text-pink hover:bg-pink hover:text-black hover:glow-pink-sm' title='GitHub'>
              <AiFillGithub />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
      >
        <span className='font-mono text-xs text-white/30 uppercase tracking-widest'>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className='w-px h-10 bg-gradient-to-b from-pink to-transparent'
        />
      </motion.div>
    </div>
  );
};
