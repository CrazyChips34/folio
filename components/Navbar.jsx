"use client";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className='flex items-center justify-between px-6 md:px-16 lg:px-32'>
          <Link to='home' smooth duration={500} className='cursor-pointer'>
            <h1 className='font-display text-xl tracking-tight text-white'>
              tiffany<span className='text-pink text-glow'>.</span>dev
            </h1>
          </Link>

          {/* Desktop nav */}
          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                className='cursor-pointer font-mono text-xs uppercase tracking-widest text-white/60 hover:text-pink transition-colors'
              >
                {link.name}
              </Link>
            ))}
            <a
              className='px-5 py-2.5 text-sm font-semibold text-black bg-pink rounded-full hover:bg-pink-glow transition-all hover:glow-pink-sm'
              href='/Curriculum_Vitae _Of_Tiffany_Pietersen.pdf'
              target='_blank'
              rel='noreferrer'
              download
            >
              Download CV
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden text-white text-2xl'
            aria-label='Toggle menu'
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className='fixed top-0 left-0 z-40 w-full h-screen bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className='cursor-pointer font-display text-3xl text-white hover:text-pink transition-colors'
            >
              {link.name}
            </Link>
          ))}
          <a
            className='mt-4 px-8 py-3 text-sm font-semibold text-black bg-pink rounded-full'
            href='/Curriculum_Vitae _Of_Tiffany_Pietersen.pdf'
            target='_blank'
            rel='noreferrer'
            download
          >
            Download CV
          </a>
        </div>
      )}
    </>
  );
};
