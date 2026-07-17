"use client";
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';

export const Main = () => {
  return (
    <div className='min-h-[85vh] flex flex-col justify-center px-2'>
      <div className='max-w-3xl'>
        <p className='font-mono text-sm text-sage uppercase tracking-widest mb-4'>
          Cape Town, South Africa
        </p>
        <h1 className='font-display text-5xl md:text-7xl leading-[1.05] text-ink'>
          Hi, I&apos;m Tiffany.
          <br />
          I build <span className='text-coral'>software that ships.</span>
        </h1>
        <p className='mt-6 max-w-xl text-base md:text-lg text-ink/70 leading-relaxed'>
          A software developer who enjoys owning products end to end—from backend services 
          to polished user experiences and everything in between. By day I build production software at Appmaniazar. 
          Outside of work, I&apos;m usually building side projects, experimenting with new technologies, or creating tools that solve real problems.
        </p>
      </div>

      {/*-----Socials-----*/}
      <div className='flex gap-4 mt-10'>
        <Link href='https://www.linkedin.com/in/tiffany-pietersen-1297b2213' target='_blank' rel='noreferrer'>
          <div className='social-icon bg-ink text-paper rounded-full text-2xl' title='LinkedIn'>
            <AiFillLinkedin />
          </div>
        </Link>
        <Link href='https://github.com/CrazyChips34' target='_blank' rel='noreferrer'>
          <div className='social-icon bg-ink text-paper rounded-full text-2xl' title='GitHub'>
            <AiFillGithub />
          </div>
        </Link>
      </div>
    </div>
  );
};
